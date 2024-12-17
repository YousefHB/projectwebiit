const questions = [
  {
    question: "Quel est le moyen de transport utilisé pour voler dans les airs ?",
    answers: ["Avion", "Voiture", "Train"],
    correct: 0 // Avion
  },
  {
    question: "Comment s'appelle l'endroit où les avions atterrissent et décollent ?",
    answers: ["Aéroport", "Gare", "Port"],
    correct: 0 // Aéroport
  },
  {
    question: "Quel est le nom du plus grand avion commercial du monde ?",
    answers: ["Boeing 747", "Airbus A380", "Concorde"],
    correct: 1 // Airbus A380
  },
  {
    question: "Qu'est-ce qu'un 'cockpit' ?",
    answers: ["La salle de repos des passagers", "Le lieu où les pilotes contrôlent l'avion", "Le moteur de l'avion"],
    correct: 1 // Le lieu où les pilotes contrôlent l'avion
  },
  {
    question: "Quel avion a été le premier à franchir le mur du son ?",
    answers: ["Concorde", "Lockheed SR-71 Blackbird", "Bell X-1"],
    correct: 2 // Bell X-1
  },
  {
    question: "Qu'indique l'altimètre dans un avion ?",
    answers: ["La vitesse", "L'altitude", "La direction", "La consommation de carburant"],
    correct: 1 // L'altitude
  },
  {
    question: "Qui a inventé le premier avion ?",
    answers: ["Albert Einstein", "Les frères Wright", "Leonardo da Vinci"],
    correct: 1 // Les frères Wright
  }
];

  
  let currentQuestion = 0;
  let score = 0;
  
  const questionContainer = document.getElementById('question');
  const answersContainer = document.getElementById('answers');
  const nextButton = document.getElementById('next-button');
  const resultContainer = document.getElementById('result-container');
  const scoreDisplay = document.getElementById('score');
  
  // Fonction pour charger une question
  function loadQuestion() {
    const questionData = questions[currentQuestion];
    questionContainer.textContent = questionData.question;
  
    answersContainer.innerHTML = '';
    questionData.answers.forEach((answer, index) => {
      const answerButton = document.createElement('button');
      answerButton.textContent = answer;
      answerButton.onclick = () => checkAnswer(index, answerButton);
      answersContainer.appendChild(answerButton);
    });
  }
  
  // Fonction pour vérifier la réponse
  function checkAnswer(selectedIndex, selectedButton) {
    const correctIndex = questions[currentQuestion].correct;
  
    // Ajouter la classe 'selected' à la réponse choisie
    const answerButtons = document.querySelectorAll('#answers button');
    answerButtons.forEach((button, index) => {
      if (index === selectedIndex) {
        button.classList.add('selected');
      } else {
        button.classList.remove('selected');
      }
    });
  
    // Vérifier si la réponse est correcte et augmenter le score
    if (selectedIndex === correctIndex) {
      score++;
    }
  
    nextButton.style.display = 'block';  // Afficher le bouton "Suivant"
  }
  
  // Fonction pour passer à la question suivante
  nextButton.onclick = () => {
    currentQuestion++;
    if (currentQuestion < questions.length) {
      loadQuestion();
      nextButton.style.display = 'none'; // Cacher le bouton "Suivant"
    } else {
      showResult(); // Afficher le résultat si toutes les questions ont été répondues
    }
  };
  
  // Fonction pour afficher les résultats
  function showResult() {
    resultContainer.style.display = 'block';
    scoreDisplay.textContent = `Votre score : ${score} sur ${questions.length}`;
    questionContainer.style.display = 'none';
    answersContainer.style.display = 'none';
    nextButton.style.display = 'none';
  }
  
  // Charger la première question au démarrage
  loadQuestion();
  