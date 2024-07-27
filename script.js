let count = 0;

// Fonction pour charger le compteur depuis le localStorage
function loadCount() {
    const savedCount = localStorage.getItem('popCount');
    if (savedCount !== null) {
        count = parseInt(savedCount, 10);
        document.getElementById('pop-count').innerText = count;
    }
}

// Fonction pour sauvegarder le compteur dans le localStorage
function saveCount() {
    localStorage.setItem('popCount', count);
}

document.addEventListener('DOMContentLoaded', (event) => {
    loadCount();

    const popButton = document.querySelector('.pop-button');
    const popCount = document.getElementById('pop-count');
    const monkeyImage = document.getElementById('monkey');
    const monkeySound = document.getElementById('monkey-sound');

    popButton.addEventListener('click', () => {
        count++;
        popCount.innerText = count;
        saveCount();

        // Ajouter l'animation à l'image
        monkeyImage.classList.add('animate');

        // Retirer l'animation après un court délai
        setTimeout(() => {
            monkeyImage.classList.remove('animate');
        }, 300);

        // Jouer le son du singe
        monkeySound.play();
    });
});
