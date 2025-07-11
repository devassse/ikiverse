const openIcon = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".close-menu-icon");
const navbar = document.querySelector(".main-navbar");
const links = document.querySelectorAll(".main-navbar a");
const btn = document.getElementById("back-to-top");

openIcon.addEventListener("click", function () {
  openIcon.classList.add("hidden");
  closeIcon.classList.remove("hidden");
  navbar.style.display = "block";
  navbar.classList.add("navbar-mobile");
});

closeIcon.addEventListener("click", function () {
  closeIcon.classList.add("hidden");
  openIcon.classList.remove("hidden");
  navbar.style.display = "none";
  navbar.classList.remove("navbar-mobile");
});

// Clicking on a link closes the navbar
links.forEach((link) => {
  link.addEventListener("click", () => {
    closeIcon.classList.add("hidden");
    openIcon.classList.remove("hidden");
    navbar.style.display = "none";
    navbar.classList.remove("navbar-mobile");
  });
});

// back to top
window.addEventListener("scroll", () => {
  if (window.scrollY > 800) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
});
