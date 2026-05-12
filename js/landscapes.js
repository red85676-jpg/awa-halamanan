// js/landscapes.js
const lsFront = document.getElementById('ls-front');
const lsBack = document.getElementById('ls-back');

if (lsFront && lsBack) {
    // You can add more landscape images to this list
    const lsImages = [
        'images/ls1.jpg',
        'images/ls2.jpg',
        'images/ls3.jpg',
        'images/ls4.jpg',

    ];

    let lsIndex = 0;

    function crossFadeLS() {
        let nextIndex = (lsIndex + 1) % lsImages.length;

        // Load next image into the back
        lsBack.src = lsImages[nextIndex];
        
        // Fade out the front
        lsFront.style.opacity = '0';

        setTimeout(() => {
            // Swap front source while hidden
            lsFront.src = lsImages[nextIndex];

            // Reset front without a transition flash
            lsFront.style.transition = 'none';
            lsFront.style.opacity = '1';

            // Trigger reflow
            lsFront.offsetHeight;

            // Put the transition back
            lsFront.style.transition = 'opacity 1.5s ease-in-out';

            lsIndex = nextIndex;
        }, 1500);
    }

    setInterval(crossFadeLS, 4000);
}