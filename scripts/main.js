// ===== OPENING ANIMATION CONTROL =====

// Wait for page to fully load before starting animations
document.addEventListener('DOMContentLoaded', function() {
    
    // Start the opening animation sequence timing
    setTimeout(() => {
        
        // Add CSS class that triggers header logo to appear
        // This class is used in CSS to show the hidden header logo
        document.body.classList.add('animation-complete');
        
        // Hide the animated opening title after header logo appears
        setTimeout(() => {
            // Get reference to the animated title element
            const openingTitle = document.getElementById('opening-title');
            
            // Fade out the animated title smoothly
            openingTitle.style.opacity = '0';
            openingTitle.style.transition = 'opacity 0.3s ease-out';
            
            // Completely remove from page after fade out completes
            setTimeout(() => {
                openingTitle.style.display = 'none';
            }, 300); // Wait 300ms for fade out to finish
            
        }, 800); // Wait 800ms for header logo to fully appear
        
    }, 3500); // Start this process after 3.5 seconds (when animations are nearly complete)
});

// ===== INTERACTIVE FEATURES =====

// Shop Button Click Handler - Placeholder functionality
// This adds an event listener to the shop button for user interaction
document.querySelector('.shop-button').addEventListener('click', () => {
    // Show alert when button is clicked (temporary placeholder)
    // In a real website, this would redirect to a shop page or open a modal
    alert('Shop feature coming soon!');
});

/* 
ANIMATION TIMELINE EXPLANATION:
0.0s - Page loads, all content hidden
0.5s - Opening title "MossMate" fades in (center, large, white)
2.5s - Title starts moving to header position while changing color to green
3.0s - Main content starts fading in
3.5s - JavaScript starts cleanup process
4.0s - Header logo appears, animated title fades out
4.3s - Animated title completely removed from page
*/