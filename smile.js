const smiley = document.getElementById("smiley");

// Function to handle smiley click
function clickSmiley() {
    generateHappyEmojis(); // Create happy emojis all over the screen
}

// Function to create multiple happy emojis randomly across the screen
function generateHappyEmojis() {
    for (let i = 0; i < 10; i++) { // Generate 10 happy emojis
        const happyEmoji = document.createElement("div");
        happyEmoji.textContent = "😄";
        happyEmoji.classList.add("happy-emoji");
        happyEmoji.style.position = 'absolute'; // Ensure the happy emoji is absolutely positioned
        const x = Math.random() * (window.innerWidth - 50);
        const y = Math.random() * (window.innerHeight - 50);
        happyEmoji.style.left = `${x}px`;
        happyEmoji.style.top = `${y}px`;
        document.body.appendChild(happyEmoji); // Add happy emoji to body
    }
}

// Set the initial position of the smiley at the center of the window
document.addEventListener("DOMContentLoaded", (event) => {
    const initialX = window.innerWidth / 2 - (smiley.offsetWidth / 2);
    const initialY = window.innerHeight / 2 - (smiley.offsetHeight / 2);
    smiley.style.left = `${initialX}px`;
    smiley.style.top = `${initialY}px`;
});

// Add click event to smiley
smiley.addEventListener("click", clickSmiley);
