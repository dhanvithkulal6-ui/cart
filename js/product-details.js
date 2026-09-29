/**
 * SoleStreet Product Details Page Logic
 * Renders gallery, size/color selector, specs, size modal & related products with Rupee (₹) pricing
 */

document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const productId = params.get('id') || 'sole-01';

  const product = PRODUCTS.find(p => p.id === productId) || PRODUCTS[0];
  let selectedSize = null;
  let selectedColor = product.colors[0];
  let currentQuantity = 1;

  document.title = `${product.name} - SoleStreet Footwear`;

  const breadcrumbCategory = document.getElementById('breadcrumb-category');
  const breadcrumbTitle = document.getElementById('breadcrumb-title');
  if (breadcrumbCategory) breadcrumbCategory.textContent = product.category;
  if (breadcrumbTitle) breadcrumbTitle.textContent = product.name;

  const mainImage = document.getElementById('product-main-image');
  const thumbnailContainer = document.getElementById('thumbnail-container');

  if (mainImage) mainImage.src = product.image;

  if (thumbnailContainer && product.gallery) {
    thumbnailContainer.innerHTML = product.gallery.map((imgUrl, index) => `
      <div class="thumb-item ${index === 0 ? 'active' : ''}" data-src="${imgUrl}">
        <img src="${imgUrl}" alt="${product.name} view ${index + 1}">
      </div>
    `).join('');

    const thumbs = thumbnailContainer.querySelectorAll('.thumb-item');
    thumbs.forEach(thumb => {
      thumb.addEventListener('click', function() {
        thumbs.forEach(t => t.classList.remove('active'));
        this.classList.add('active');
        if (mainImage) mainImage.src = this.dataset.src;
      });
    });
  }

  const brandEl = document.getElementById('detail-brand');
  const titleEl = document.getElementById('detail-title');
  const priceEl = document.getElementById('detail-price');
  const originalPriceEl = document.getElementById('detail-original-price');
  const discountEl = document.getElementById('detail-discount-badge');
  const ratingStarsEl = document.getElementById('detail-rating-stars');
  const ratingTextEl = document.getElementById('detail-rating-text');
  const descEl = document.getElementById('detail-description');

  if (brandEl) brandEl.textContent = product.brand;
  if (titleEl) titleEl.textContent = product.name;
  if (priceEl) priceEl.textContent = formatPrice(product.price);
  if (originalPriceEl) {
    if (product.originalPrice) {
      originalPriceEl.textContent = formatPrice(product.originalPrice);
      originalPriceEl.style.display = 'inline';
    } else {
      originalPriceEl.style.display = 'none';
    }
  }
  if (discountEl) {
    if (product.discount) {
      discountEl.textContent = `${product.discount}% OFF`;
      discountEl.style.display = 'inline-block';
    } else {
      discountEl.style.display = 'none';
    }
  }
  if (ratingStarsEl) ratingStarsEl.innerHTML = generateStarRatingHTML(product.rating);
  if (ratingTextEl) ratingTextEl.textContent = `${product.rating} (${product.reviewsCount} customer reviews)`;
  if (descEl) descEl.textContent = product.description;

  const colorsContainer = document.getElementById('colors-selector-container');
  if (colorsContainer && product.colors) {
    colorsContainer.innerHTML = product.colors.map((color, index) => `
      <button class="color-btn ${index === 0 ? 'selected' : ''}" data-color="${color}">${color}</button>
    `).join('');

    const colorBtns = colorsContainer.querySelectorAll('.color-btn');
    colorBtns.forEach(btn => {
      btn.addEventListener('click', function() {
        colorBtns.forEach(b => b.classList.remove('selected'));
        this.classList.add('selected');
        selectedColor = this.dataset.color;
      });
    });
  }

  const sizesContainer = document.getElementById('sizes-selector-container');
  const sizeErrorNotice = document.getElementById('size-error-notice');

  if (sizesContainer && product.sizes) {
    sizesContainer.innerHTML = product.sizes.map(size => `
      <button class="size-btn" data-size="${size}">UK ${size}</button>
    `).join('');

    const sizeBtns = sizesContainer.querySelectorAll('.size-btn');
    sizeBtns.forEach(btn => {
      btn.addEventListener('click', function() {
        sizeBtns.forEach(b => b.classList.remove('selected'));
        this.classList.add('selected');
        selectedSize = parseInt(this.dataset.size);
        if (sizeErrorNotice) sizeErrorNotice.style.display = 'none';
      });
    });
  }

  const qtyInput = document.getElementById('qty-input');
  const qtyMinus = document.getElementById('qty-minus');
  const qtyPlus = document.getElementById('qty-plus');

  if (qtyMinus && qtyPlus && qtyInput) {
    qtyMinus.addEventListener('click', () => {
      if (currentQuantity > 1) {
        currentQuantity--;
        qtyInput.value = currentQuantity;
      }
    });

    qtyPlus.addEventListener('click', () => {
      if (currentQuantity < 10) {
        currentQuantity++;
        qtyInput.value = currentQuantity;
      }
    });
  }

  const addToCartBtn = document.getElementById('add-to-cart-detail-btn');
  if (addToCartBtn) {
    addToCartBtn.addEventListener('click', () => {
      if (!selectedSize) {
        if (sizeErrorNotice) sizeErrorNotice.style.display = 'block';
        showToast('Select a Size', 'Please choose your shoe size before adding to cart', 'fa-solid fa-triangle-exclamation');
        return;
      }

      addToCart(product.id, selectedSize, selectedColor, currentQuantity);
    });
  }

  const detailWishlistBtn = document.getElementById('detail-wishlist-btn');
  if (detailWishlistBtn) {
    const wishlist = getWishlist();
    if (wishlist.includes(product.id)) {
      detailWishlistBtn.classList.add('active');
    }

    detailWishlistBtn.addEventListener('click', () => {
      toggleWishlist(product.id);
      const isWishlisted = getWishlist().includes(product.id);
      detailWishlistBtn.classList.toggle('active', isWishlisted);
    });
  }

  const specsContainer = document.getElementById('product-specs-container');
  if (specsContainer && product.specifications) {
    specsContainer.innerHTML = Object.entries(product.specifications).map(([key, val]) => `
      <div class="spec-row">
        <span class="spec-label">${key.charAt(0).toUpperCase() + key.slice(1)}</span>
        <span class="spec-val">${val}</span>
      </div>
    `).join('');
  }

  const sizeGuideTrigger = document.getElementById('open-size-guide-btn');
  const sizeModal = document.getElementById('size-guide-modal');
  const sizeModalClose = document.getElementById('close-size-guide-modal');

  if (sizeGuideTrigger && sizeModal) {
    sizeGuideTrigger.addEventListener('click', (e) => {
      e.preventDefault();
      sizeModal.classList.add('active');
    });
  }

  if (sizeModalClose && sizeModal) {
    sizeModalClose.addEventListener('click', () => {
      sizeModal.classList.remove('active');
    });
  }

  const relatedGrid = document.getElementById('related-products-grid');
  if (relatedGrid) {
    const related = PRODUCTS.filter(p => p.id !== product.id && (p.category === product.category || p.brand === product.brand)).slice(0, 4);
    const wishlist = getWishlist();

    relatedGrid.innerHTML = related.map(rel => `
      <div class="product-card">
        <div class="product-image-box">
          <img src="${rel.image}" alt="${rel.name}">
          ${rel.badge ? `<div class="product-badges"><span class="badge badge-orange">${rel.badge}</span></div>` : ''}
          <button class="product-wishlist-btn ${wishlist.includes(rel.id) ? 'active' : ''}" data-id="${rel.id}" onclick="toggleWishlist('${rel.id}')">
            <i class="fa-solid fa-heart"></i>
          </button>
        </div>
        <div class="product-details-content">
          <div class="product-brand">${rel.brand}</div>
          <h3 class="product-title"><a href="product-details.html?id=${rel.id}">${rel.name}</a></h3>
          <div class="product-rating">
            ${generateStarRatingHTML(rel.rating)}
            <span class="rating-count">(${rel.reviewsCount})</span>
          </div>
          <div class="product-price-row">
            <span class="product-price">${formatPrice(rel.price)}</span>
            ${rel.originalPrice ? `<span class="product-original-price">${formatPrice(rel.originalPrice)}</span>` : ''}
          </div>
          <div class="product-card-footer">
            <a href="product-details.html?id=${rel.id}" class="btn btn-secondary btn-sm btn-block">View Details</a>
          </div>
        </div>
      </div>
    `).join('');
  }
});
