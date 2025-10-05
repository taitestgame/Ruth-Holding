let lastScrollTop = 0;
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  const currentScroll = window.scrollY;

  if (currentScroll > lastScrollTop && currentScroll > 100) {
    // Vuốt xuống → ẩn header
    header.classList.remove("show");
    header.classList.add("hide");
  } else if (currentScroll < lastScrollTop) {
    // Vuốt lên → hiện lại header
    header.classList.remove("hide");
    header.classList.add("show");
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});
