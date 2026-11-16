// APEXNODE WEBSITE JAVASCRIPT

document.addEventListener("DOMContentLoaded", function () {

  // Smooth navigation
  const navLinks = document.querySelectorAll('nav a[href^="#"]');

  navLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      const targetId = this.getAttribute("href");
      const target = document.querySelector(targetId);

      if (target) {
        event.preventDefault();
        target.scrollIntoView({
          behavior: "smooth"
        });
      }
    });
  });

  // Project card navigation
  const projectCards = document.querySelectorAll(".project-card");

  projectCards.forEach(function (card) {
    card.addEventListener("click", function () {
      const demoPage = this.getAttribute("href");

      if (demoPage) {
        window.location.href = demoPage;
      }
    });
  });

});
