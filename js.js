document.addEventListener("DOMContentLoaded", () => {

  /* ---------------- Navbar Scroll Effect ---------------- */
  const navbar = document.querySelector(".main-nav");
  if (navbar) {
    window.addEventListener("scroll", () => {
      navbar.classList.toggle("scrolled", window.scrollY > 50);
    });
  }

  /* ---------------- Banner Swiper Slider ---------------- */
  if (typeof Swiper !== "undefined") {
    const bannerEl = document.querySelector(".swiper");
    if (bannerEl) {
      const paginationEl = bannerEl.querySelector(".swiper-pagination");
      const bannerSwiper = new Swiper(bannerEl, {
        loop: true,
        autoplay: { delay: 3000, disableOnInteraction: false },
        pagination: paginationEl ? { el: paginationEl, clickable: true } : false,
        grabCursor: true,
        effect: "slide",
      });

      // Pause on hover (desktop only)
      bannerEl.addEventListener("mouseenter", () => bannerSwiper.autoplay.stop());
      bannerEl.addEventListener("mouseleave", () => bannerSwiper.autoplay.start());
    }
  } else {
    console.warn("Swiper not loaded. Please include Swiper JS & CSS.");
  }

  /* ---------------- Product Horizontal Slider ---------------- */
  const prevBtn = document.querySelector(".hd .prev");
  const nextBtn = document.querySelector(".hd .next");
  const scrollContainer = document.querySelector(".tempWrap");
  const scrollAmount = 275; // Card width + gap
  let autoplayInterval;

  if (prevBtn && nextBtn && scrollContainer) {
    const autoScroll = () => {
      const atEnd = scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth - 1;
      scrollContainer.scrollTo({
        left: atEnd ? 0 : scrollContainer.scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    };

    const resetAutoplay = () => {
      clearInterval(autoplayInterval);
      autoplayInterval = setInterval(autoScroll, 3000);
    };

    prevBtn.addEventListener("click", () => {
      scrollContainer.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      resetAutoplay();
    });

    nextBtn.addEventListener("click", () => {
      scrollContainer.scrollBy({ left: scrollAmount, behavior: "smooth" });
      resetAutoplay();
    });

    ["mouseenter", "focusin"].forEach(evt => scrollContainer.addEventListener(evt, () => clearInterval(autoplayInterval)));
    ["mouseleave", "focusout"].forEach(evt => scrollContainer.addEventListener(evt, resetAutoplay));

    resetAutoplay();
  } else {
    console.warn("Product slider elements missing.");
  }

  /* ---------------- Footer Menu Toggle ---------------- */
  window.toggleMenu = () => {
    const navMenu = document.getElementById("navMenu");
    if (navMenu) navMenu.classList.toggle("active");
  };

  /* ---------------- Search Function ---------------- */
  window.searchContent = () => {
    const query = document.getElementById("searchInput")?.value.trim();
    alert(query ? `Searching for: ${query}` : "Please enter something to search.");
  };
});
/* ------------------------------Drop down ----------------*/
// Enable dropdown toggle on mobile devices
document.querySelectorAll('.nav-links li.dropdown > a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    // Prevent default link navigation if dropdown is present
    e.preventDefault();
    const dropdownMenu = this.nextElementSibling;
    if (dropdownMenu) {
      // Toggle visibility
      if (dropdownMenu.style.display === 'block') {
        dropdownMenu.style.display = 'none';
      } else {
        // Close any other open dropdowns first (optional)
        document.querySelectorAll('.nav-links .dropdown-menu').forEach(menu => {
          menu.style.display = 'none';
        });
        dropdownMenu.style.display = 'block';
      }
    }
  });
});

// Optional: close dropdown if clicked outside
document.addEventListener('click', function(e) {
  const isClickInside = e.target.closest('.nav-links li.dropdown');
  if (!isClickInside) {
    document.querySelectorAll('.nav-links .dropdown-menu').forEach(menu => {
      menu.style.display = 'none';
    });
  }
});
