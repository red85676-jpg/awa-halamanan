// nav.js

function updatePill() {
    const pill = document.getElementById('pill');
    const activeLink = document.querySelector('nav ul li a.active');

    if (!pill || !activeLink) return;

    const rect = activeLink.getBoundingClientRect();
    const parentRect = activeLink.closest('ul').getBoundingClientRect();

    pill.style.width = `${rect.width}px`;
    pill.style.left = `${rect.left - parentRect.left}px`;
}

document.addEventListener("DOMContentLoaded", () => {
    updatePill();
});

window.addEventListener('scroll', function () {

    const nav = document.querySelector('nav');

    if (window.scrollY > 70) {
        nav.classList.add('scrolled');
    } else if (window.scrollY < 30) {
        nav.classList.remove('scrolled');
    }

    updatePill();
});