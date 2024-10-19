document.addEventListener('DOMContentLoaded', () => {
    const smiley = document.getElementById('smiley');

    // Move smiley with mouse
    document.addEventListener('mousemove', (e) => {
        const x = e.clientX;
        const y = e.clientY;
        smiley.style.left = `${x}px`;
        smiley.style.top = `${y}px`;
    });

    // Change smiley expression on click
    smiley.addEventListener('click', () => {
        smiley.classList.toggle('happy');
        if (smiley.classList.contains('happy')) {
            smiley.style.backgroundColor = '#00ff00'; // Change to a happy color
            smiley.style.transform = 'translate(-50%, -50%) scale(1.2)'; // Make it bigger
            setTimeout(() => {
                smiley.style.transform = 'translate(-50%, -50%)'; // Reset size
            }, 200);
        } else {
            smiley.style.backgroundColor = '#ffcc00'; // Change back to normal
        }
    });
});
