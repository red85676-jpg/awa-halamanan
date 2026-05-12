document.addEventListener("DOMContentLoaded", () => {
    const pill = document.getElementById('pill');
    const activeLink = document.querySelector('nav ul li a.active');
    const links = document.querySelectorAll('nav ul li a');
        
    const movePill = (element, animate = true) => {
        if(!element) return;
        const rect = element.getBoundingClientRect();
        const parentRect = element.closest('ul').getBoundingClientRect();
            
        pill.style.transition = animate ? 'all 0.6s cubic-bezier(0.25, 1, 0.5, 1)' : 'none';
        pill.style.width = `${rect.width}px`;
        pill.style.left = `${rect.left - parentRect.left}px`;
    };

    // 1. Initial Position
    movePill(activeLink, false);

    // 2. Slide from previous page position
    const prevIndex = sessionStorage.getItem('navIndex');
    const currentIndex = Array.from(links).indexOf(activeLink);

    if (prevIndex !== null && prevIndex !== currentIndex) {
        const prevLink = links[prevIndex];
        if (prevLink) {
            movePill(prevLink, false);
            requestAnimationFrame(() => {
                movePill(activeLink, true);
            });
        }
    }

    sessionStorage.setItem('navIndex', currentIndex);
});