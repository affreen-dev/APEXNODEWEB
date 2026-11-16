
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function() {
  navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", function() {
    navLinks.classList.remove("active");
  });
});

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {
  event.preventDefault();

  if (!contactForm.reportValidity()) return;

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const service = document.getElementById("service").value;
  const message = document.getElementById("message").value;

  const subject = encodeURIComponent("APEXNODE Website Enquiry");
  const body = encodeURIComponent(
    "Name: " + name +
    "\nEmail: " + email +
    "\nService: " + service +
    "\nMessage: " + message
  );

  window.location.href =
    "mailto:affreen.r.dev456@gmail.com?subject=" +
    subject + "&body=" + body;
});
