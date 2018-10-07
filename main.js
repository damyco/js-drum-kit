function playKeyboard(event) {
        const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`)
        const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
        if (!audio) return; // stop function from running if no key
        audio.currentTime = 0; // rewind to start
        audio.play();
        key.classList.add('playing');
}

function removeTransition(event) {
        if (event.propertyName !== 'transform') return; // skip if its not a transform

<<<<<<< HEAD
        this.classList.remove('playing');
=======
        this.classList.remove('playing'); 
>>>>>>> ca03b67d4ee9a2369b53587e2ccded2ccc15c08c
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
<<<<<<< HEAD
keys.forEach(key => key.addEventListener('click', playMouseClick));
keys.forEach(key => key.addEventListener('touch', playMouseClick));

window.addEventListener('keydown', playKeyboard);


function playMouseClick(event) {
        const button = event.target.attributes[0].nodeValue;
        const audio = document.querySelector(`audio[data-key="${button}"]`)
        const key = document.querySelector(`.key[data-key="${button}"]`);
        audio.currentTime = 0; // rewind to start
        audio.play();
        key.classList.add('playing');
}
=======
window.addEventListener('keydown', playSound);
>>>>>>> ca03b67d4ee9a2369b53587e2ccded2ccc15c08c
