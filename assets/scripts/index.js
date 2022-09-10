const menuButton = document.querySelector(".mobile-navbar");
const menuIcon = document.querySelectorAll(".menu-icon");
const menuContainer = document.querySelector(".mobile-menu");
const navbar = document.querySelector(".navbar");

menuButton.addEventListener("click", () => {
  menuIcon[0].classList.toggle("active");
  menuIcon[1].classList.toggle("active");
  menuIcon[2].classList.toggle("active");

  menuContainer.classList.toggle("active");
});

