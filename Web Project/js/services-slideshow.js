// --- 1. LANDSCAPING SLIDESHOW ---
const ldsFrontWrapper = document.getElementById('lds-front-wrapper');

if (ldsFrontWrapper) {
    function toggleLDS() {
        if (ldsFrontWrapper.style.opacity === '0') {
            ldsFrontWrapper.style.opacity = '1';
        } else {
            ldsFrontWrapper.style.opacity = '0';
        }
    }
    setInterval(toggleLDS, 5000); // 5 second loop
}

// --- 2. MAINTENANCE SLIDESHOW ---
const maintFrontWrapper = document.getElementById('maint-front-wrapper');

if (maintFrontWrapper) {
    function toggleMaint() {
        // Toggles between maint1 (front) and maint2 (back)
        if (maintFrontWrapper.style.opacity === '0') {
            maintFrontWrapper.style.opacity = '1';
        } else {
            maintFrontWrapper.style.opacity = '0';
        }
    }
    // Offset by 500ms so they don't both flip at the exact same millisecond
    setInterval(toggleMaint, 5500); 
}