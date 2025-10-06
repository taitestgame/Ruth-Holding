// Header scroll hide/show (GIỮ NGUYÊN)
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
  const sidebar = document.getElementById("sidebar");
  const menuButton = document.querySelector(".menu-btn");
  

  document.addEventListener('click', function(event) {
   
    if (sidebar.style.width === '250px') {

      const isClickInsideSidebar = sidebar.contains(event.target);
      const isClickOnMenuButton = menuButton.contains(event.target);
      
      if (!isClickInsideSidebar && !isClickOnMenuButton) {
        closeMenu(); // Nếu bấm bên ngoài, đóng menu
      }
    }
  });


 
  let currentPage = window.location.pathname.split("/").pop();


  if (currentPage === '' || currentPage === 'index.html') {
    currentPage = 'Home.html';
  }

  let links = document.querySelectorAll(".navbar a, .sidebar a");

  links.forEach(link => {
    
    link.classList.remove("active"); 

    let linkHref = link.getAttribute("href");

   
    if (linkHref && linkHref.toLowerCase() === currentPage.toLowerCase()) {
      link.classList.add("active");
    }
  });
});
document.addEventListener('DOMContentLoaded', function() {

    const searchIcons = document.querySelectorAll('.search-svg');

    searchIcons.forEach(icon => {
        icon.addEventListener('click', function() {
     
            const searchLink = this.closest('.search').querySelector('a');

            if (searchLink && searchLink.href) {
            
                window.location.href = searchLink.href;
            }
        });
    });
});