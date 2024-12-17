document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.querySelector(".contact-form");
  
    if (contactForm) {
      contactForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Empêche l'envoi réel du formulaire
  
        // Récupérer les valeurs des champs
        const name = contactForm.querySelector("input[name='name']").value.trim();
        const email = contactForm.querySelector("input[name='email']").value.trim();
        const message = contactForm.querySelector("textarea[name='message']").value.trim();
  
        // Vérifications
        if (!name || !email || !message) {
          alert("Veuillez remplir tous les champs du formulaire.");
          return;
        }
  
        // Vérification de l'email avec une expression régulière
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
          alert("Veuillez entrer une adresse email valide.");
          return;
        }
  
        // Message de confirmation
        alert(`Merci ${name} ! Votre message a été envoyé avec succès.`);
        
        // Réinitialiser le formulaire après l'envoi
        contactForm.reset();
      });
    } else {
      console.error("Formulaire de contact introuvable.");
    }
  });
  