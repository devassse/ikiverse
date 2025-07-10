const openIcon = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".close-menu-icon");
const btn = document.getElementById("back-to-top");

openIcon.addEventListener("click", function () {
  openIcon.classList.add("hidden");
  closeIcon.classList.remove("hidden");
});

closeIcon.addEventListener("click", function () {
  closeIcon.classList.add("hidden");
  openIcon.classList.remove("hidden");
});

// back to top
window.addEventListener("scroll", () => {
  if (window.scrollY > 800) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
});
