  const swiper = new Swiper('.swiper', {
    loop: true,
    autoplay: { delay: 3000, disableOnInteraction: false },
    pagination: { el: '.swiper-pagination', clickable: true }
  });

  let matches = [];
  let currentIndex = -1;

  function removeHighlights() {
    document.querySelectorAll(".highlight").forEach(el => {
      el.outerHTML = el.innerHTML;
    });
  }

  function highlightAll(query) {
    removeHighlights();
    matches = [];
    currentIndex = -1;
    if (!query) return;

    const regex = new RegExp(`(${query})`, "gi");
    document.body.querySelectorAll("*:not(script):not(style)").forEach(el => {
      if (el.children.length === 0 && el.textContent.match(regex)) {
        el.innerHTML = el.innerHTML.replace(regex, `<span class="highlight">$1</span>`);
      }
    });

    matches = Array.from(document.querySelectorAll(".highlight"));
  }

  function searchNext(query) {
    if (!query) return;
    if (matches.length === 0) highlightAll(query);
    if (matches.length === 0) return;

    currentIndex = (currentIndex + 1) % matches.length;
    matches[currentIndex].scrollIntoView({ behavior: "smooth", block: "center" });
    matches.forEach(m => m.classList.remove("active-highlight"));
    matches[currentIndex].classList.add("active-highlight");
  }

  function setSearchEvents(inputId, btnId) {
    const input = document.getElementById(inputId);
    const btn = document.getElementById(btnId);

    btn.addEventListener("click", () => searchNext(input.value.trim()));
    input.addEventListener("keypress", e => {
      if (e.key === "Enter") searchNext(input.value.trim());
    });
  }

  setSearchEvents("searchInputTop", "searchBtnTop");
  setSearchEvents("searchInputBottom", "searchBtnBottom");
