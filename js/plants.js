// plants.js

const plFront = document.getElementById('pl-front');
const plBack = document.getElementById('pl-back');

if (plFront && plBack) {

    const plImages = [
        'images/pl1.jpg',
        'images/pl2.jpg',
        'images/pl3.jpg',
        'images/pl4.jpg',
        'images/pl5.jpg'
    ];

    let plIndex = 0;

    function crossFadePlants() {

        let nextPlIndex = (plIndex + 1) % plImages.length;

        // Set hidden image
        plBack.src = plImages[nextPlIndex];

        // Fade out front image
        plFront.style.opacity = '0';

        setTimeout(() => {

            // Swap image instantly while hidden
            plFront.src = plImages[nextPlIndex];

            // Temporarily disable transition
            plFront.style.transition = 'none';
            plFront.style.opacity = '1';

            // Force browser reflow
            plFront.offsetHeight;

            // Re-enable transition
            plFront.style.transition = 'opacity 1.5s ease-in-out';

            plIndex = nextPlIndex;

        }, 1500);
    }

    // Start slideshow
    setInterval(crossFadePlants, 4000);
}