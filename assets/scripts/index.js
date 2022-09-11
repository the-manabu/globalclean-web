const menuButton = document.querySelector(".mobile-navbar");
const menuIcons = document.querySelectorAll(".menu-icon");
const menuContainer = document.querySelector(".mobile-menu");
const navbar = document.querySelector(".navbar");
const logo = document.querySelector(".logo");
const menus = document.querySelectorAll(".menu a");

// add event listener click on mobile button

function handleClick() {
  menuIcons[0].classList.toggle("active");
  menuIcons[1].classList.toggle("active");
  menuIcons[2].classList.toggle("active");

  menuContainer.classList.toggle("active");
  menuIcons.forEach((icon) => {
    if (pos >= 780 && icon.classList.contains("active")) {
      icon.style.backgroundColor = "#fff";
    } else if (pos >= 780) {
      icon.style.backgroundColor = "#000";
    }
  });
}
menuButton.addEventListener("click", handleClick);

// variable for width size and position

let windowWidth = 0;
let pos = 0;

// IIFE to get and set width size and position

(() => {
  windowWidth = document.documentElement.offsetWidth;
  pos = document.documentElement.scrollTop;
})();

// check the width size and manipulate index with DOM

if (pos >= 780 && windowWidth <= 1024 && windowWidth != 691) {
  menus.forEach((menu) => {
    menu.style.color = "#000";
  });
  logo.src = "/assets/brand/globalclean-black-logo.svg";
} else if (windowWidth <= 1024 && windowWidth != 691) {
  menus.forEach((menu) => {
    menu.style.color = "#fff";
  });
  logo.src = "/assets/brand/globalclean-white-logo.svg";
} else {
  menus.forEach((menu) => {
    menu.style.color = "black";
  });
  logo.src = "/assets/brand/globalclean-black-logo.svg";
}

// manipulate navbar when window is resize

window.addEventListener("resize", () => {
  windowWidth = document.documentElement.offsetWidth;
  if (pos > 780 && windowWidth <= 1024 && windowWidth != 691) {
    menus.forEach((menu) => {
      menu.style.color = "#000";
    });

    menuIcons.forEach((icon) => {
      icon.style.backgroundColor = "#000";
    });
    logo.src = "/assets/brand/globalclean-black-logo.svg";
  } else if (windowWidth <= 1024 && windowWidth != 691) {
    menus.forEach((menu) => {
      menu.style.color = "#fff";
    });

    if (windowWidth > 720 && menuContainer.classList.contains("active")) {
      menuContainer.classList.remove("active");
      menuIcons.forEach((icon) => {
        icon.classList.remove("active");
      });
    }

    logo.src = "/assets/brand/globalclean-white-logo.svg";
  } else {
    menus.forEach((menu) => {
      menu.style.color = "#000";
    });
    logo.src = "/assets/brand/globalclean-black-logo.svg";
  }
});

// manipulate navbar when scrolled

window.addEventListener("scroll", () => {
  pos = document.documentElement.scrollTop;

  if (pos > 780 && windowWidth <= 1024 && windowWidth != 691) {
    menus.forEach((menu) => {
      menu.style.color = "#000";
    });

    menuIcons.forEach((icon) => {
      icon.style.backgroundColor = "#000";
      if (icon.classList.contains("active")) {
        icon.style.backgroundColor = "#fff";
      }
    });
    logo.src = "/assets/brand/globalclean-black-logo.svg";
  } else if (windowWidth > 1024) {
    menus.forEach((menu) => {
      menu.style.color = "#000";
    });
    logo.src = "/assets/brand/globalclean-black-logo.svg";
  } else {
    menus.forEach((menu) => {
      menu.style.color = "#fff";
    });
    menuIcons.forEach((icon) => {
      icon.style.backgroundColor = "#fff";
      if (icon.classList.contains("active")) {
        icon.style.backgroundColor = "#fff";
      }
    });
    logo.src = "/assets/brand/globalclean-white-logo.svg";
  }

  // add background color when scrolled to navbar

  if (pos > 50) {
    navbar.style.backgroundColor = "rgba(0,0,0,.2)";
  } else {
    navbar.style.backgroundColor = "transparent";
  }
});
