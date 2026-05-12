// --- MAINTENANCE SLIDESHOW ---
const maintFrontWrapper = document.getElementById('maint-front-wrapper');

if (maintFrontWrapper) {
    function toggleMaint() {
        if (maintFrontWrapper.style.opacity === '0') {
            maintFrontWrapper.style.opacity = '1';
        } else {
            maintFrontWrapper.style.opacity = '0';
        }
    }
    // We can offset the timing slightly so they don't flip at the exact same time
    setInterval(toggleMaint, 5500); 
}