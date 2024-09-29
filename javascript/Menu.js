const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

menuToggle.addEventListener("click", function () {
  menuToggle.classList.toggle("active");
  menu.classList.toggle("active");
});

menu.addEventListener("click", function () {
  menuToggle.classList.toggle("active");
  menu.classList.toggle("active");
});

document.addEventListener("DOMContentLoaded", function () {
  var skillsLink = document.getElementById("skills-link");

  // Check if the user is on mobile (you can adjust the screen width as needed)
  if (window.innerWidth <= 1300) {
    skillsLink.href = "#mobile-skills";
  } else {
    skillsLink.href = "#desktop-skills";
  }
});
