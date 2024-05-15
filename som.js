    function addSoundToAnimation() {
        const movingSquare = document.getElementById('movingSquare');
        const sound = document.getElementById('sound');

        movingSquare.addEventListener('animationiteration', () => {
            sound.play();
        });
    }

    addSoundToAnimation();

