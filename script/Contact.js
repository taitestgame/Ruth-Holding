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


// --- Popup mở/đóng ---
const searchBtn = document.querySelector(".search-button, #search-btn, .search");
const popup = document.getElementById("search-popup");
const closeBtn = document.getElementById("close-btn");
const searchInput = document.getElementById("search-input");
const showAllBtn = document.querySelector(".show-results");
const resultItems = document.querySelectorAll(".result-item");

// Mở popup
searchBtn.addEventListener("click", () => {
  popup.classList.add("active");
  searchInput.focus();
  showDefaultResults();
});

// Đóng popup
closeBtn.addEventListener("click", () => {
  popup.classList.remove("active");
  searchInput.value = "";
  showDefaultResults();
});

// Đóng popup khi click ra ngoài
popup.addEventListener("click", (e) => {
  if (e.target === popup) popup.classList.remove("active");
});

// --- Hiển thị mặc định: chỉ 3 kết quả đầu ---
function showDefaultResults() {
  resultItems.forEach((item, index) => {
    item.style.display = index < 3 ? "block" : "none";
  });
  showAllBtn.style.display = "block";
}

// --- Khi nhập từ khóa ---
searchInput.addEventListener("input", () => {
  const keyword = searchInput.value.toLowerCase().trim();

  if (keyword === "") {
    // nếu không nhập gì → quay lại mặc định
    showDefaultResults();
  } else {
    let found = 0;
    resultItems.forEach((item) => {
      const title = item.querySelector("h4").innerText.toLowerCase();
      if (title.includes(keyword)) {
        item.style.display = "block";
        found++;
      } else {
        item.style.display = "none";
      }
    });
    // khi đang search → ẩn nút “Show All”
  //   showAllBtn.style.display = "none";
  }
});

// --- Nút “Show All Results” ---
showAllBtn.addEventListener("click", () => {
  resultItems.forEach((item) => (item.style.display = "block"));
  showAllBtn.style.display = "none"; // ẩn nút sau khi bấm
});

document.querySelector('.show-results').addEventListener('click', function() {
    window.location.href = './Sech-Results.html'; // 👉 thay đường dẫn trang bạn muốn tới
  });


// Hiển thị mặc định 3 kết quả đầu khi tải trang
document.addEventListener("DOMContentLoaded", showDefaultResults);