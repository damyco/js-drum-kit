function playSound(event) {
        const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`)
        const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
        if (!audio) return; // stop function from running if no key
        audio.currentTime = 0; // rewind to start
        audio.play();
        key.classList.add('playing');
}

function removeTransition(event) {
        if (event.propertyName !== 'transform') return; // skip if its not a transform

        this.classList.remove('playing'); // this is equal to key
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);