document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll('.question button');
  const scoreDisplay = document.getElementById('score');
  const scoreValue = document.getElementById('scoreValue');
  let score = 0;

  // Snack Question (all options are correct)
  document.querySelectorAll('.snack-option').forEach(button => {
    button.addEventListener('click', () => {
      alert("Correct! Chocolate is my favorite.");
      score++;
      updateScore();
    });
  });

  //dance option
  document.querySelectorAll('.dance-option').forEach(button => {
    button.addEventListener('click', () => {
      alert("Correct! LET'S DANCE BATTLEEEE!!");
      score++;
      updateScore();
    });
  });

  // Date Question (correct answer: Arcade)
  document.querySelectorAll('.date-option').forEach(button => {
    button.addEventListener('click', () => {
      if (button.textContent === 'Cafe') {
        alert("Correct! I’d definitely choose a Cafe.");
        score++;
      } else {
        alert("Nice try, but I’d pick the Arcade.");
      }
      updateScore();
    });
  });

  function updateScore() {
    scoreDisplay.style.display = "block";
    scoreValue.textContent = score;
  }

  // Card touch and hover effects
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    card.addEventListener('touchstart', () => {
      card.classList.add('active');
    });
    card.addEventListener('touchend', () => {
      card.classList.remove('active');
    });
    card.addEventListener('mouseenter', () => {
      card.classList.add('active');
    });
    card.addEventListener('mouseleave', () => {
      card.classList.remove('active');
    });
  });
});
