const menuButton = document.querySelector(".mobile-navbar");
const menuIcon = document.querySelectorAll(".menu-icon");
const menuContainer = document.querySelector(".mobile-menu");
const navbar = document.querySelector(".navbar");

// add event listener click on mobile button

menuButton.addEventListener("click", () => {
  menuIcon[0].classList.toggle("active");
  menuIcon[1].classList.toggle("active");
  menuIcon[2].classList.toggle("active");

  menuContainer.classList.toggle("active");
});

// add background on navbar when scrolled

window.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop > 10) {
    navbar.style.backgroundColor = "rgba(0,0,0,.2)";
  } else {
    navbar.style.backgroundColor = "transparent";
  }
});
