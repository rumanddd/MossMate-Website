// Opening Animation Control
document.addEventListener('DOMContentLoaded', function() {
    // Start the opening animation sequence
    setTimeout(() => {
        // Add class to show the header logo
        document.body.classList.add('animation-complete');
        
        // Hide the opening title after the header logo fades in
        setTimeout(() => {
            const openingTitle = document.getElementById('opening-title');
            openingTitle.style.opacity = '0';
            openingTitle.style.transition = 'opacity 0.3s ease-out';
            
            // Remove from DOM after fade out
            setTimeout(() => {
                openingTitle.style.display = 'none';
            }, 300);
        }, 800); // Wait for header logo to fully appear
        
    }, 3500); // Slightly earlier to coordinate the transition
});

// Placeholder: you can add interactivity here
document.querySelector('.shop-button').addEventListener('click', () => {
 alert('Shop feature coming soon!');
});