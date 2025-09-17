// Payment selection function
function selectPayment(type) {
  const options = document.querySelectorAll(".payment-option");
  options.forEach((option) => option.classList.remove("selected"));

  event.currentTarget.classList.add("selected");

  const qurbanOptions = document.getElementById("qurbanOptions");
  if (type === "qurban") {
    qurbanOptions.style.display = "block";
  } else {
    qurbanOptions.style.display = "none";
  }
}

// Show animal note for cow selection
function showAnimalNote() {
  const animalType = document.getElementById("animalType").value;
  const animalNote = document.getElementById("animalNote");

  if (animalType === "sapi") {
    animalNote.style.display = "block";
  } else {
    animalNote.style.display = "none";
  }
}

// Form submission
document.getElementById("paymentForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Terima kasih! Form pembayaran Anda telah berhasil dikirim.");
  this.reset();

  // Reset payment options
  const options = document.querySelectorAll(".payment-option");
  options.forEach((option) => option.classList.remove("selected"));
  document.getElementById("qurbanOptions").style.display = "none";
});

// Highlight current section in navigation
window.addEventListener("scroll", function () {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-links a");
  const nav = document.querySelector("nav");

  // Add shadow to nav on scroll
  if (window.scrollY > 50) {
    nav.style.boxShadow = "0 5px 15px rgba(0, 0, 0, 0.1)";
    nav.style.padding = "0.7rem 0";
  } else {
    nav.style.boxShadow = "none";
    nav.style.padding = "1rem 0";
  }

  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").substring(1) === current) {
      link.classList.add("active");
    }
  });
});

// Tab functionality for financial summary
const tabBtns = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

tabBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Remove active class from all buttons and contents
    tabBtns.forEach((b) => b.classList.remove("active"));
    tabContents.forEach((c) => c.classList.remove("active"));

    // Add active class to clicked button
    btn.classList.add("active");

    // Show corresponding content
    const tabId = btn.getAttribute("data-tab");
    document.getElementById(tabId).classList.add("active");
  });
});

// Mobile menu toggle
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const body = document.querySelector("body");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  hamburger.classList.toggle("active");

  // Prevent body scrolling when menu is open
  if (navLinks.classList.contains("active")) {
    body.style.overflow = "hidden";
  } else {
    body.style.overflow = "auto";
  }
});

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    hamburger.classList.remove("active");
    body.style.overflow = "auto"; // Re-enable scrolling
  });
});

// Close mobile menu when clicking outside
document.addEventListener("click", (e) => {
  if (
    navLinks.classList.contains("active") &&
    !e.target.closest(".nav-links") &&
    !e.target.closest(".hamburger")
  ) {
    navLinks.classList.remove("active");
    hamburger.classList.remove("active");
    body.style.overflow = "auto";
  }
});

// Initialize page
document.addEventListener("DOMContentLoaded", function () {
  // Hide animal options by default
  document.getElementById("qurbanOptions").style.display = "none";
  document.getElementById("animalNote").style.display = "none";

  // Set first tab as active
  document.querySelector(".tab-btn").click();
});
