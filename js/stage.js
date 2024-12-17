const cards = document.querySelectorAll('.experience-card');
const prevButton = document.querySelector('.prev-btn');
const nextButton = document.querySelector('.next-btn');

let currentIndex = 0;

// Fonction pour déplacer le carousel
function moveCarousel(index) {
  const carousel = document.querySelector('.carousel');
  const cardWidth = cards[0].offsetWidth;
  carousel.style.transform = `translateX(-${index * cardWidth}px)`;
}

// Afficher les cartes
nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % cards.length;
  moveCarousel(currentIndex);
});

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + cards.length) % cards.length;
  moveCarousel(currentIndex);
});
