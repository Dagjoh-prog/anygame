// Grunnleggende logikk for dyrevalg og spillstart
document.addEventListener('DOMContentLoaded', () => {
  const animalButtons = document.querySelectorAll('button');
  const gameBoard = document.getElementById('game-board');
  const animalSelection = document.getElementById('animal-selection');

  animalButtons.forEach(button => {
    button.addEventListener('click', () => {
      const selectedAnimal = button.id;
      alert(`You selected: ${selectedAnimal}`);
      startGame(selectedAnimal);
    });
  });

  function startGame(animal) {
    // Skjul dyrevalg-seksjonen
    animalSelection.style.display = 'none';

    // Vis spillkartet
    gameBoard.style.display = 'block';

    // Start spill-logikken basert på valgt dyr
    console.log(`Starting game with ${animal}`);
    initializeMap();
  }

  function initializeMap() {
    const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');
    // Her kan vi legge inn karttegning og navigasjonslogikk
    ctx.fillStyle = 'green';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    // Mer logikk kommer her senere
  }
});

