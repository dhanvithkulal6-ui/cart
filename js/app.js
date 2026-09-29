/**
 * SoleStreet Core Application Architecture
 * Global Utilities, LocalStorage State Management, Rupee Currency Formatting, Badges, Search & Toasts
 */

// LocalStorage Keys
const CART_STORAGE_KEY = 'solestreet_cart';
const WISHLIST_STORAGE_KEY = 'solestreet_wishlist';

// Helper for Indian Rupee formatting
function formatPrice(amount) {
  return '₹' + Number(amount).toLocaleString('en-IN');
}

// Global Cart State Manager
function getCart() {
  const data = localStorage.getItem(CART_STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}

function saveCart(cart) {
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  updateCartBadge();
}

// Global Wishlist State Manager
function getWishlist() {
  const data = localStorage.getItem(WISHLIST_STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}

function saveWishlist(wishlist) {
  localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(wishlist));
  updateWishlistBadge();
}

// Badge Updates
function updateCartBadge() {
  const cart = getCart();
  const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartBadges = document.querySelectorAll('.cart-badge');
  cartBadges.forEach(badge => {
    badge.textContent = totalCount;
    badge.style.display = totalCount > 0 ? 'flex' : 'none';
  });
}

function updateWishlistBadge() {
  const wishlist = getWishlist();
  const count = wishlist.length;
  const wishlistBadges = document.querySelectorAll('.wishlist-badge');
  wishlistBadges.forEach(badge => {
    badge.textContent = count;
    badge.style.display = count > 0 ? 'flex' : 'none';
  });
}

// Toast Notifications System
function showToast(title, message, iconClass = 'fa-solid fa-circle-check') {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <i class="${iconClass} toast-icon"></i>
    <div class="toast-content">
      <div class="toast-title">${title}</div>
      <div class="toast-desc">${message}</div>
    </div>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

// Wishlist Action Handler
function toggleWishlist(productId) {
  let wishlist = getWishlist();
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const index = wishlist.indexOf(productId);
  if (index > -1) {
    wishlist.splice(index, 1);
    showToast('Removed from Wishlist', `${product.name} removed`, 'fa-solid fa-heart-crack');
  } else {
    wishlist.push(productId);
    showToast('Added to Wishlist!', `${product.name} saved to your favorites`, 'fa-solid fa-heart');
  }
  saveWishlist(wishlist);
  
  document.querySelectorAll(`.product-wishlist-btn[data-id="${productId}"]`).forEach(btn => {
    btn.classList.toggle('active', wishlist.includes(productId));
  });
}

// Add to Cart Core Logic
function addToCart(productId, size, color, quantity = 1) {
  if (!size) {
    showToast('Select a Size', 'Please pick a shoe size before adding to cart', 'fa-solid fa-triangle-exclamation');
    return false;
  }

  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return false;

  let cart = getCart();
  const existingIndex = cart.findIndex(item => item.id === productId && item.size === size && item.color === color);

  if (existingIndex > -1) {
    cart[existingIndex].quantity += quantity;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      brand: product.brand,
      price: product.price,
      image: product.image,
      size: size,
      color: color || product.colors[0],
      quantity: quantity
    });
  }

  saveCart(cart);
  showToast('Added to Cart!', `${product.name} (UK ${size}) added to your cart`, 'fa-solid fa-bag-shopping');
  return true;
}

// Rating Stars Renderer Helper
function generateStarRatingHTML(rating) {
  let stars = '';
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;

  for (let i = 0; i < fullStars; i++) {
    stars += '<i class="fa-solid fa-star"></i>';
  }
  if (hasHalf) {
    stars += '<i class="fa-solid fa-star-half-stroke"></i>';
  }
  const empty = 5 - Math.ceil(rating);
  for (let i = 0; i < empty; i++) {
    stars += '<i class="fa-regular fa-star"></i>';
  }
  return stars;
}

// Render Header & Footer Dynamically
document.addEventListener('DOMContentLoaded', () => {
  updateCartBadge();
  updateWishlistBadge();

  // Search Modal Toggle
  const searchBtn = document.getElementById('search-toggle-btn');
  const searchModal = document.getElementById('global-search-modal');
  const searchClose = document.getElementById('search-modal-close');
  const searchInput = document.getElementById('global-search-input');
  const searchResultsPreview = document.getElementById('search-results-preview');

  if (searchBtn && searchModal) {
    searchBtn.addEventListener('click', (e) => {
      e.preventDefault();
      searchModal.classList.add('active');
      if (searchInput) searchInput.focus();
    });
  }

  if (searchClose && searchModal) {
    searchClose.addEventListener('click', () => {
      searchModal.classList.remove('active');
    });
  }

  if (searchInput && searchResultsPreview) {
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.trim().toLowerCase();
      if (!query) {
        searchResultsPreview.innerHTML = '';
        return;
      }

      const matches = PRODUCTS.filter(p => p.name.toLowerCase().includes(query) || p.brand.toLowerCase().includes(query) || p.category.toLowerCase().includes(query)).slice(0, 5);

      if (matches.length === 0) {
        searchResultsPreview.innerHTML = `<div style="color:var(--text-muted); text-align:center; padding:1rem;">No footwear found for "${query}"</div>`;
      } else {
        searchResultsPreview.innerHTML = matches.map(item => `
          <a href="product-details.html?id=${item.id}" class="cart-item-row" style="background:var(--bg-card); border-radius:8px; padding:0.75rem;">
            <img src="${item.image}" alt="${item.name}" style="width:50px; height:50px; border-radius:6px; object-fit:cover;">
            <div>
              <div style="font-weight:700; font-size:0.95rem;">${item.name}</div>
              <div style="font-size:0.8rem; color:var(--text-muted);">${item.brand} • ${item.category}</div>
            </div>
            <div style="font-weight:800; color:var(--accent-orange); margin-left:auto;">${formatPrice(item.price)}</div>
          </a>
        `).join('');
      }
    });
  }

  // Mobile Nav Toggle
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const navMenu = document.getElementById('main-nav-menu');
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
  }
});
