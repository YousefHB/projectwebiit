const leftBtn = document.querySelector(".left-btn");
const rightBtn = document.querySelector(".right-btn");
const cardsContainer = document.querySelector(".competence-cards");

let scrollAmount = 0;
const cardWidth = 300 + 15; // Largeur d'une carte + espacement (gap)
const maxScroll = cardsContainer.scrollWidth - cardsContainer.parentElement.clientWidth;

leftBtn.addEventListener("click", () => {
  scrollAmount = Math.max(scrollAmount - cardWidth, 0);
  cardsContainer.style.transform = `translateX(-${scrollAmount}px)`;
});

rightBtn.addEventListener("click", () => {
  scrollAmount = Math.min(scrollAmount + cardWidth, maxScroll);
  cardsContainer.style.transform = `translateX(-${scrollAmount}px)`;
});
