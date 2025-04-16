const track = document.querySelector(".carousel-track");
const images = document.querySelectorAll(".carousel-track img");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

let index = 0;

// Duplique les images pour l’effet infini
track.innerHTML += track.innerHTML;

const imageWidth = images[0].clientWidth;

function updateCarousel() {
  track.style.transform = `translateX(-${index * imageWidth}px)`;
}

// Bouton suivant
nextButton.addEventListener("click", () => {
  index++;
  if (index >= images.length) {
    index = 0;
  }
  updateCarousel();
});

// Bouton précédent
prevButton.addEventListener("click", () => {
  index--;
  if (index < 0) {
    index = images.length - 1;
  }
  updateCarousel();
});