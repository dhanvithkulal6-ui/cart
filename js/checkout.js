/**
 * SoleStreet Checkout Logic
 * Handles customer billing details, payment method toggle (UPI, COD, Card), form validation & order placement
 */

document.addEventListener('DOMContentLoaded', () => {
  const cart = getCart();
  if (cart.length === 0) {
    window.location.href = 'cart.html';
    return;
  }

  renderCheckoutSummary();

  const paymentCards = document.querySelectorAll('.payment-option-card');
  const cardDetailsForm = document.getElementById('card-details-form');
  const upiDetailsForm = document.getElementById('upi-details-form');

  paymentCards.forEach(card => {
    card.addEventListener('click', function() {
      paymentCards.forEach(c => c.classList.remove('selected'));
      this.classList.add('selected');
      const method = this.dataset.method;

      if (cardDetailsForm) cardDetailsForm.style.display = method === 'card' ? 'block' : 'none';
      if (upiDetailsForm) upiDetailsForm.style.display = method === 'upi' ? 'block' : 'none';
    });
  });

  const deliveryRadios = document.querySelectorAll('input[name="delivery-method"]');
  deliveryRadios.forEach(radio => {
    radio.addEventListener('change', () => {
      renderCheckoutSummary();
    });
  });

  const checkoutForm = document.getElementById('checkout-form');
  if (checkoutForm) {
    checkoutForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const fullName = document.getElementById('cust-name').value.trim();
      const email = document.getElementById('cust-email').value.trim();
      const phone = document.getElementById('cust-phone').value.trim();
      const address = document.getElementById('cust-address').value.trim();
      const city = document.getElementById('cust-city').value.trim();
      const state = document.getElementById('cust-state').value.trim();
      const pincode = document.getElementById('cust-pincode').value.trim();

      if (!fullName || !email || !phone || !address || !city || !state || !pincode) {
        showToast('Missing Fields', 'Please complete all required customer information fields', 'fa-solid fa-triangle-exclamation');
        return;
      }

      const orderId = 'SOLE-IN-' + Math.floor(100000 + Math.random() * 900000);
      const orderMeta = JSON.parse(localStorage.getItem('solestreet_checkout_meta')) || {};

      const selectedDeliveryRadio = document.querySelector('input[name="delivery-method"]:checked');
      const deliveryFee = selectedDeliveryRadio ? parseFloat(selectedDeliveryRadio.dataset.price) : 0;
      const finalTotal = Math.max(0, (orderMeta.subtotal || 0) - (orderMeta.discountAmount || 0) + deliveryFee);

      const orderData = {
        orderId,
        date: new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' }),
        customer: { fullName, email, phone, address, city, state, pincode },
        items: cart,
        subtotal: orderMeta.subtotal || 0,
        discountAmount: orderMeta.discountAmount || 0,
        deliveryFee,
        grandTotal: finalTotal,
        paymentMethod: document.querySelector('.payment-option-card.selected')?.dataset.method || 'cod',
        estimatedDelivery: '3 - 5 Business Days'
      };

      localStorage.setItem('solestreet_last_order', JSON.stringify(orderData));
      saveCart([]);
      window.location.href = 'order-confirmation.html';
    });
  }
});

function renderCheckoutSummary() {
  const cart = getCart();
  const checkoutItemsContainer = document.getElementById('checkout-items-list');
  const orderMeta = JSON.parse(localStorage.getItem('solestreet_checkout_meta')) || {};

  if (checkoutItemsContainer) {
    checkoutItemsContainer.innerHTML = cart.map(item => `
      <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:1rem;">
        <div style="display:flex; align-items:center; gap:0.75rem;">
          <img src="${item.image}" alt="${item.name}" style="width:50px; height:50px; border-radius:6px; object-fit:cover;">
          <div>
            <div style="font-weight:700; font-size:0.9rem;">${item.name}</div>
            <div style="font-size:0.75rem; color:var(--text-muted);">Size: UK ${item.size} • Qty: ${item.quantity}</div>
          </div>
        </div>
        <div style="font-weight:700; font-size:0.95rem;">${formatPrice(item.price * item.quantity)}</div>
      </div>
    `).join('');
  }

  const selectedDeliveryRadio = document.querySelector('input[name="delivery-method"]:checked');
  const deliveryFee = selectedDeliveryRadio ? parseFloat(selectedDeliveryRadio.dataset.price) : 0;
  const subtotal = orderMeta.subtotal || cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discountAmount = orderMeta.discountAmount || 0;
  const grandTotal = Math.max(0, subtotal - discountAmount + deliveryFee);

  const subtotalEl = document.getElementById('checkout-subtotal');
  const discountEl = document.getElementById('checkout-discount');
  const discountRow = document.getElementById('checkout-discount-row');
  const deliveryEl = document.getElementById('checkout-delivery');
  const totalEl = document.getElementById('checkout-total');

  if (subtotalEl) subtotalEl.textContent = formatPrice(subtotal);
  
  if (discountRow && discountEl) {
    if (discountAmount > 0) {
      discountEl.textContent = `-${formatPrice(discountAmount)}`;
      discountRow.style.display = 'flex';
    } else {
      discountRow.style.display = 'none';
    }
  }

  if (deliveryEl) deliveryEl.textContent = deliveryFee === 0 ? 'FREE' : formatPrice(deliveryFee);
  if (totalEl) totalEl.textContent = formatPrice(grandTotal);
}
