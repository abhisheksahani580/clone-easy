  const swiper = new Swiper('.swiper', {
    loop: true,
    autoplay: { delay: 3000, disableOnInteraction: false },
    pagination: { el: '.swiper-pagination', clickable: true }
  });

let matches = [];
let currentIndex = -1;
let lastQuery = "";

function removeHighlights() {
  document.querySelectorAll("span.highlight").forEach(el => {
    el.replaceWith(el.textContent);
  });
}

function highlightAll(query) {
  removeHighlights();
  matches = [];
  currentIndex = -1;

  if (!query) return;

  const regex = new RegExp(`(${query})`, "gi");

  document.body.querySelectorAll("*:not(script):not(style)").forEach(el => {
    if (el.children.length === 0 && regex.test(el.textContent)) {
      el.innerHTML = el.textContent.replace(regex, `<span class="highlight">$1</span>`);
    }
  });

  matches = Array.from(document.querySelectorAll(".highlight"));
}

function searchNext(query) {
  query = query.trim();
  if (!query) {
    removeHighlights();
    matches = [];
    currentIndex = -1;
    lastQuery = "";
    return;
  }

  // Only refresh highlights if the query changed
  if (query !== lastQuery) {
    highlightAll(query);
    lastQuery = query;
  }

  if (matches.length === 0) return;

  currentIndex = (currentIndex + 1) % matches.length;
  matches.forEach(m => m.classList.remove("active-highlight"));
  matches[currentIndex].classList.add("active-highlight");
  matches[currentIndex].scrollIntoView({ behavior: "smooth", block: "center" });
}

function setSearchEvents(inputId, btnId) {
  const input = document.getElementById(inputId);
  const btn = document.getElementById(btnId);

  btn.addEventListener("click", () => searchNext(input.value));

  input.addEventListener("input", () => {
    if (input.value.trim() === "") {
      removeHighlights();
      matches = [];
      currentIndex = -1;
      lastQuery = "";
    }
  });

  input.addEventListener("keypress", e => {
    if (e.key === "Enter") searchNext(input.value);
  });
}

setSearchEvents("searchInputTop", "searchBtnTop");
setSearchEvents("searchInputBottom", "searchBtnBottom");








