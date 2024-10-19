const dancer = document.getElementById("dancer");
const danceFloor = document.getElementById("danceFloor");
const revealClueBtn = document.getElementById("revealClue");
const clueBox = document.getElementById("clueBox");

// Function to move the dancer randomly on the dance floor
function moveDancer() {
    const x = Math.random() * (danceFloor.clientWidth - 50); // Random X position
    const y = Math.random() * (danceFloor.clientHeight - 50); // Random Y position
    dancer.style.left = `${x}px`;
}

// Move dancer every 2 seconds
setInterval(moveDancer, 2000);

// Show the clue when button is clicked
revealClueBtn.addEventListener("click", () => {
    clueBox.style.display = "block"; // Make the clue box visible
    clueBox.scrollIntoView({ behavior: 'smooth' }); // Scroll to the clue box
});
