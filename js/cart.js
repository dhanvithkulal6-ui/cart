/**
 * SoleStreet Shopping Cart Logic
 * Manages items listing, quantities, remove, STREET10 coupon calculation & checkout total in INR (₹)
 */

let appliedCoupon = null;

document.addEventListener('DOMContentLoaded', () => {
  renderCart();

  const applyCouponBtn = document.getElementById('apply-coupon-btn');
  const couponInput = document.getElementById('coupon-code-input');

  if (applyCouponBtn && couponInput) {
    applyCouponBtn.addEventListener('click', () => {
      const code = couponInput.value.trim().toUpperCase();
      if (!code) {
        showToast('Empty Coupon', 'Please enter a coupon code', 'fa-solid fa-triangle-exclamation');
        return;
      }

      if (code === 'STREET10') {
        appliedCoupon = { code: 'STREET10', discountPercent: 10 };
        showToast('Coupon Applied!', '10% discount applied to your subtotal!', 'fa-solid fa-tags');
        renderCart();
      } else {
        showToast('Invalid Coupon', 'The coupon code you entered is invalid', 'fa-solid fa-circle-xmark');
      }
    });
  }
});

function renderCart() {
  const cart = getCart();
  const cartContainer = document.getElementById('cart-items-list');
  const emptyCartState = document.getElementById('empty-cart-state');
  const cartContentGrid = document.getElementById('cart-content-grid');

  if (!cartContainer) return;

  if (cart.length === 0) {
    if (cartContentGrid) cartContentGrid.style.display = 'none';
    if (emptyCartState) emptyCartState.style.display = 'block';
    return;
  }

  if (cartContentGrid) cartContentGrid.style.display = 'grid';
  if (emptyCartState) emptyCartState.style.display = 'none';

  cartContainer.innerHTML = cart.map((item, index) => `
    <div class="cart-item-row" data-index="${index}">
      <img src="${item.image}" alt="${item.name}" class="cart-item-thumb">
      <div class="cart-item-details">
        <h4 class="product-title">${item.name}</h4>
        <div class="cart-item-meta">
          <span>Brand: <strong>${item.brand}</strong></span>
          <span>Size: <strong>UK ${item.size}</strong></span>
          <span>Color: <strong>${item.color}</strong></span>
        </div>
      </div>
      <div class="cart-item-price">${formatPrice(item.price)}</div>
      <div class="quantity-control">
        <button class="qty-btn" onclick="updateCartQuantity(${index}, -1)"><i class="fa-solid fa-minus"></i></button>
        <span class="qty-input">${item.quantity}</span>
        <button class="qty-btn" onclick="updateCartQuantity(${index}, 1)"><i class="fa-solid fa-plus"></i></button>
      </div>
      <button class="remove-btn" onclick="removeCartItem(${index})" title="Remove Item">
        <i class="fa-solid fa-trash-can"></i>
      </button>
    </div>
  `).join('');

  calculateCartTotals();
}

function updateCartQuantity(index, delta) {
  let cart = getCart();
  if (cart[index]) {
    cart[index].quantity += delta;
    if (cart[index].quantity <= 0) {
      cart.splice(index, 1);
      showToast('Item Removed', 'Item removed from cart', 'fa-solid fa-trash-can');
    }
    saveCart(cart);
    renderCart();
  }
}

function removeCartItem(index) {
  let cart = getCart();
  if (cart[index]) {
    const item = cart[index];
    cart.splice(index, 1);
    saveCart(cart);
    showToast('Item Removed', `${item.name} (UK ${item.size}) removed`, 'fa-solid fa-trash-can');
    renderCart();
  }
}

function calculateCartTotals() {
  const cart = getCart();
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  let discountAmount = 0;
  if (appliedCoupon && appliedCoupon.code === 'STREET10') {
    discountAmount = Math.round(subtotal * 0.10);
  }

  // Free delivery on orders > ₹2,999 or empty cart
  const deliveryCharge = (subtotal > 2999 || subtotal === 0) ? 0 : 149;
  const grandTotal = Math.max(0, subtotal - discountAmount + deliveryCharge);

  const subtotalEl = document.getElementById('summary-subtotal');
  const discountRow = document.getElementById('summary-discount-row');
  const discountEl = document.getElementById('summary-discount');
  const deliveryEl = document.getElementById('summary-delivery');
  const totalEl = document.getElementById('summary-total');

  if (subtotalEl) subtotalEl.textContent = formatPrice(subtotal);
  
  if (discountRow && discountEl) {
    if (discountAmount > 0) {
      discountEl.textContent = `-${formatPrice(discountAmount)}`;
      discountRow.style.display = 'flex';
    } else {
      discountRow.style.display = 'none';
    }
  }

  if (deliveryEl) {
    deliveryEl.textContent = deliveryCharge === 0 ? 'FREE' : formatPrice(deliveryCharge);
  }

  if (totalEl) totalEl.textContent = formatPrice(grandTotal);

  localStorage.setItem('solestreet_checkout_meta', JSON.stringify({
    subtotal,
    discountAmount,
    deliveryCharge,
    grandTotal,
    appliedCouponCode: appliedCoupon ? appliedCoupon.code : null
  }));
}
