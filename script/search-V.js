// Gán ID của nút Search bạn đang có
const searchBtn = document.getElementById("search-btn"); 
const popup = document.getElementById("search-popup");
const closeBtn = document.getElementById("close-btn");

searchBtn.addEventListener("click", () => {
  popup.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  popup.classList.remove("active");
});

// Đóng popup khi click ra ngoài
popup.addEventListener("click", (e) => {
  if (e.target === popup) popup.classList.remove("active");
});

