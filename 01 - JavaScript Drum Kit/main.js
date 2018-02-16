document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM');

    function playSound(e) {
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
        if(!audio) return;

        audio.currentTime = 0; //play whenhit the button from the begining of audio
        audio.play();

        key.classList.add('playing');
    }

    function removeTransition(e) {
       if(e.propertyName !== 'transform') return // skip it if it`s not transform
       this.classList.remove('playing');
    }

    const keys = document.querySelectorAll('.key');
    keys.forEach(key => key.addEventListener('transitionend', removeTransition));

    document.addEventListener("keydown", playSound);

});