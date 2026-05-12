// slideshow.js

const frontImg = document.getElementById('cycling-image');
const backImg = document.getElementById('back-image');

if (frontImg && backImg) {

    const images = [
        'images/new.png',
        'images/new1.png',
        'images/new2.png',
        'images/new3.png',

    ];

    let currentIndex = 0;

    function crossFade() {
        let nextIndex = (currentIndex + 1) % images.length;

        backImg.src = images[nextIndex];
        frontImg.style.opacity = '0';

        setTimeout(() => {
            frontImg.src = images[nextIndex];

            frontImg.style.transition = 'none';
            frontImg.style.opacity = '1';

            frontImg.offsetHeight;

            frontImg.style.transition = 'opacity 1.5s ease-in-out';

            currentIndex = nextIndex;
        }, 1500);
    }

    setInterval(crossFade, 4000);
}
