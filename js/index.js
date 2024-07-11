const menuButton = document.querySelector(".hamburger_menu");
const sidebar = document.querySelector(".sidebar");
const overlay = document.querySelector(".overlay");
const allLi = document.querySelectorAll("li");

function disableScroll() {
  document.body.style.overflow = "hidden";
}
function enableScroll() {
  document.body.style.overflow = "auto";
}

menuButton.addEventListener("click", () => {
  sidebar.classList.add("active");
  overlay.classList.add("active");
  disableScroll();
});

allLi.forEach(li => {
  li.addEventListener("click", () => {
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
    enableScroll();
  });
});
