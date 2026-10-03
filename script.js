// ----------------------------
// Skills Carousel JavaScript
// ----------------------------

// Store images for each skill
const skillImages = {
  networking: [
    "images/network.jfif",
    "images/net1.jfif",
    "images/network3.jpg"
  ],
  frontend: [
    "images/dev.jfif",
    "images/dev1.jfif",
    "images/frontend3.jpg"
  ],
  system: [
    "images/system.jfif",
    "images/system1.jfif",
    "images/system3.jpg"
  ],
  hardware: [
    "images/hardware.jfif",
    "images/hardware1.jfif",
    "images/hardware3.jpg"
  ]
};

let currentSkill = "";
let currentIndex = 0;

function openCarousel(skill) {
  currentSkill = skill;
  currentIndex = 0;
  document.getElementById("photoModal").style.display = "block";
  showImage();
}

function closeCarousel() {
  document.getElementById("photoModal").style.display = "none";
}

function showImage() {
  const image = document.getElementById("carouselImage");
  image.src = skillImages[currentSkill][currentIndex];
}

function prevImage() {
  currentIndex =
    (currentIndex - 1 + skillImages[currentSkill].length) %
    skillImages[currentSkill].length;
  showImage();
}

function nextImage() {
  currentIndex =
    (currentIndex + 1) % skillImages[currentSkill].length;
  showImage();
}

// Optional: close modal when clicking outside image
window.onclick = function (event) {
  const modal = document.getElementById("photoModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

// ===== CONTACT FORM MODAL EFFECT =====
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const modal = document.getElementById("successModal");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault(); // prevent page reload
      modal.style.display = "flex";
      form.reset(); // clear fields after "sending"
    });
  }
});

function closeModal() {
  document.getElementById("successModal").style.display = "none";
}

// Optional: close modal by clicking outside it
window.onclick = function (event) {
  const modal = document.getElementById("successModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
};



document.addEventListener("DOMContentLoaded", () => {
  const logo = document.querySelector(".logo img");
  logo.style.opacity = 0;
  logo.style.transition = "opacity 1s ease";

  setTimeout(() => {
    logo.style.opacity = 1;
  }, 200);
});

