// Fonction pour ouvrir la modale
function openModal(imageSrc) {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const body = document.body;
  
    modal.style.display = 'flex'; // Affiche la modale
    modalImage.src = imageSrc; // Définit l'image dans la modale
    body.classList.add('modal-open'); // Ajoute un flou au contenu
  }
  
  // Fonction pour fermer la modale
  function closeModal() {
    const modal = document.getElementById('imageModal');
    const body = document.body;
  
    modal.style.display = 'none'; // Masque la modale
    body.classList.remove('modal-open'); // Supprime le flou du contenu
  }