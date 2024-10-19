document.addEventListener("DOMContentLoaded", () => {
    const audio = document.getElementById('audio');
    const lyricsSpans = document.querySelectorAll('#lyrics span');
    const backButton = document.getElementById('back-button');

    // Define your lyrics timings in seconds here
    const timings = [
        25, 32, 38, 44, 51, 54, 57, 63, 69, 75,
        82, 88, 113, 116, 119, 126, 129, 132, 138,
        141, 144, 147, 150, 153, 156, 162, 170,
        173, 175, 181, 187, 194, 200, 206, 234
    ];

    // Start audio playback from 25 seconds
    audio.addEventListener("loadedmetadata", () => {
        audio.currentTime = 25; // Set the starting point at 25 seconds
    });

    audio.addEventListener('play', () => {
        let currentLine = 0;

        // Hide all lines except the first one
        lyricsSpans.forEach((span, index) => {
            span.style.display = index === 0 ? "inline" : "none"; // Show only the first line initially
            span.style.color = ""; // Reset color
            span.style.transform = "translateY(0)"; // Reset position
        });

        // Initially disable the back button
        backButton.classList.add('disabled');
        backButton.disabled = true;

        const interval = setInterval(() => {
            const currentTime = audio.currentTime;
            if (currentLine < timings.length && currentTime >= timings[currentLine]) {
                // Show the current line
                lyricsSpans[currentLine].style.display = "inline"; // Show the current line
                lyricsSpans[currentLine].style.color = "#ff6f61"; // Change color
                lyricsSpans[currentLine].style.transform = "translateY(-30px)"; // Scroll up

                // Scroll to the current line
                lyricsSpans[currentLine].scrollIntoView({ behavior: 'smooth', block: 'center' });

                currentLine++;
            }

            // Scroll to the back button when the song reaches 206 seconds
            if (currentTime >= 206) {
                clearInterval(interval);
                backButton.scrollIntoView({ behavior: 'smooth' });
                backButton.classList.remove('disabled'); // Enable back button
                backButton.disabled = false; // Remove the disabled attribute
            }

            // Stop the interval when all lines have been displayed
            if (currentLine >= timings.length || currentTime >= timings[timings.length - 1] + 5) {
                clearInterval(interval);
            }
        }, 100);
    });

    // Start audio autoplay
    audio.play();
});
