// Select the navbar
const navbar = document.querySelector('.main-nav');

// Listen for scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
//slider query
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// or include via CDN and skip imports

const swiper = new Swiper('.swiper', {
  loop: true,
  autoplay: { delay: 3000, disableOnInteraction: false },
  pagination: { el: '.swiper-pagination', clickable: true },
  navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
});
// product


// script.js
document.addEventListener("DOMContentLoaded", function () {
  // ---------- BANNER SLIDER (first .swiper on the page) ----------
  const allSwipers = document.querySelectorAll('.swiper');
  const bannerEl = allSwipers.length ? allSwipers[0] : null;

  let bannerSwiper = null;
  if (bannerEl) {
    // find pagination inside banner to scope it correctly
    const bannerPagination = bannerEl.querySelector('.swiper-pagination');

    bannerSwiper = new Swiper(bannerEl, {
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false
      },
      pagination: bannerPagination ? { el: bannerPagination, clickable: true } : false,
      // keep arrows off for banner unless you add elements: nextEl/prevEl
      grabCursor: true,
      effect: 'slide'
    });

    // pause/resume on hover (desktop)
    bannerEl.addEventListener('mouseenter', () => bannerSwiper.autoplay.stop());
    bannerEl.addEventListener('mouseleave', () => bannerSwiper.autoplay.start());
  }

  // ---------- PRODUCT SWIPER (the productSwiper container) ----------
  const productEl = document.querySelector('.productSwiper');
  let productSwiper = null;
  if (productEl) {
    // show custom arrows if CSS hid them (force via inline style)
    const next = productEl.querySelector('.product-next');
    const prev = productEl.querySelector('.product-prev');
    if (next) next.style.display = 'flex';
    if (prev) prev.style.display = 'flex';

    // Initialize Swiper on the product container element
    productSwiper = new Swiper(productEl, {
      slidesPerView: 4,
      spaceBetween: 20,
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false
      },
      navigation: {
        // use elements scoped to the product container (if present)
        nextEl: next || '.product-next',
        prevEl: prev || '.product-prev'
      },
      // responsive breakpoints
      breakpoints: {
        0:    { slidesPerView: 1 },
        576:  { slidesPerView: 2 },
        900:  { slidesPerView: 3 },
        1200: { slidesPerView: 4 }
      }
    });

    // pause autoplay when user hovers product area
    productEl.addEventListener('mouseenter', () => productSwiper.autoplay.stop());
    productEl.addEventListener('mouseleave', () => productSwiper.autoplay.start());
  }

  // ---------- Safety: ensure any hidden global arrows are visible ----------
  // Some CSS earlier used `display:none !important` on .swiper-button-*. If that's still present,
  // force them visible (this sets inline style which overrides CSS rules).
  document.querySelectorAll('.swiper-button-prev, .swiper-button-next').forEach(btn => {
    // only change if element exists and is inside the page
    if (btn) {
      btn.style.display = 'flex';
      btn.style.alignItems = 'center';
      btn.style.justifyContent = 'center';
    }
  });
});


const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});








