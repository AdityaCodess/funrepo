document.addEventListener("DOMContentLoaded", () => {
    const audio = document.getElementById('audio');
    const lyricsContainer = document.getElementById('lyrics');
    const lyricsSpans = document.querySelectorAll('#lyrics span');

    // Define your lyrics timings in seconds here
    const timings = [
        25,   // "Pehle Bhi Main Tumse Mila Hoon"
        32,   // "Pehli Dafa Hi Milke Laga"
        38,   // "Toone Chhua Zakhmon Ko Mere"
        44,   // "Marham Marham Dil Pe Laga"
        51,   // "Paagal Paagal Hain Thode"
        54,   // "Baadal Baadal Hain Dono"
        57,   // "Khul Ke Barse Bheege Aa Zara"
        63,   // "Pehle Bhi Main Tumse Mila Hoon"
        69,   // "Pehli Dafa Hi Milke Laga"
        75,   // "Toone Chhua Zakhmon Ko Mere"
        82,   // "Marham Marham Dil Pe Laga"
        88,   // "Music"
        113,  // "Ghalat Kya Sahi Kya"
        116,  // "Mujhe Na Pata Hai"
        119,  // "Tumhein Agar Pata Ho Bata dena"
        126,  // "Main Arse Se Khud Se"
        129,  // "Zara Laapata Hoon"
        132,  // "Tumhein Agar Milun Toh Pata dena"
        138,  // "Kho Na Jaana Mujhe"
        141,  // "Dekhte Dekhte"
        144,  // "Tu Hi Zariya"
        147,  // "Tu Hi Manzil Hai"
        150,  // "Ya Ke Dil Hai"
        153,  // "Itna Bata"
        156,  // "Toone Chhua Zakhmon Ko Mere"
        162,  // "Marham Marham Dil Pe Laga"
        170,  // "Paagal Paagal Hain Thode"
        173,  // "Baadal Baadal Hain Bheege"
        175,  // "Barse Barse Bheege Aa Zara"
        181,  // "Pehle Bhi Main Tumse Mila Hoon"
        187,  // "Pehli Dafa Hi Milke Laga"
        194,  // "Toone Chhua Zakhmon Ko Mere"
        200,  // "Marham Marham Dil Pe Laga"
        206,  // "Ho Ho Ho Ho…"
        234   // "Hmm…"
    ];

    // Start audio playback from 20 seconds
    audio.addEventListener("loadedmetadata", () => {
        audio.currentTime = 25; // Set the starting point at 20 seconds
    });

    audio.addEventListener('play', () => {
        let currentLine = 0;

        // Hide all lines except the first one
        lyricsSpans.forEach((span, index) => {
            span.style.display = index === 0 ? "inline" : "none"; // Show only the first line initially
            span.style.color = ""; // Reset color
            span.style.transform = "translateY(0)"; // Reset position
        });

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
            // Stop the interval when all lines have been displayed
            if (currentLine >= timings.length || currentTime >= timings[timings.length - 1] + 5) {
                clearInterval(interval);
            }
        }, 100);
    });

    // Start audio autoplay
    audio.play();
});