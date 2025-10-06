// Header scroll hide/show
let lastScrollTop = 0;
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  const currentScroll = window.scrollY;
  if (currentScroll > lastScrollTop && currentScroll > 100) {
    header.classList.remove("show");
    header.classList.add("hide");
  } else if (currentScroll < lastScrollTop) {
    header.classList.remove("hide");
    header.classList.add("show");
  }
  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

// Mobile Drawer
function openMenu() {
  document.getElementById("sidebar").style.width = "250px";
}
function closeMenu() {
  document.getElementById("sidebar").style.width = "0";
}
document.addEventListener("DOMContentLoaded", function() {
  let links = document.querySelectorAll(".sidebar a");
  let currentPage = window.location.pathname.split("/").pop();

  links.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });
});

