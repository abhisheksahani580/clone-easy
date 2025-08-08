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


document.addEventListener('DOMContentLoaded', function () {
  const productSwiper = new Swiper('.productSwiper', {
    slidesPerView: 4,
    spaceBetween: 30,
    navigation: {
      nextEl: '.product-next',
      prevEl: '.product-prev',
    },
    loop: false,
    breakpoints: {
      1200: { slidesPerView: 4 },
      900: { slidesPerView: 3 },
      768: { slidesPerView: 2 },
      480: { slidesPerView: 1 }
    }
  });
});









