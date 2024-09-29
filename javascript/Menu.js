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
  if (window.innerWidth <= 768) {
    // Mobile devices typically have a width of 768px or less
    skillsLink.href = "#mobile-skills"; // Change this to the ID you want on mobile
  } else {
    skillsLink.href = "#desktop-skills"; // Change this to the ID you want on desktop
  }
});
