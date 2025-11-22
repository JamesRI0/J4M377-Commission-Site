const audio = document.getElementById('background-music');
const toggleButton = document.getElementById('music-toggle');
const notification = document.getElementById('music-notification');

if (audio && toggleButton && notification) {
    audio.volume = 0.04; 

    function toggleMusic() {
        if (audio.paused) {
            audio.play().then(() => {
                toggleButton.textContent = 'Pause Music ⏸️';
                notification.classList.add('show');
                setTimeout(() => {
                    notification.classList.remove('show');
                }, 5000); 

            }).catch(error => {
                console.error("Autoplay was prevented.", error);
            });
        } else {
            audio.pause();
            toggleButton.textContent = 'Start Music 🎵';
            notification.classList.remove('show');
        }
    }
    toggleButton.addEventListener('click', toggleMusic);
}
