document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.getElementById('hamburger-menu');
    const navLinks = document.getElementById('nav-links');
    
    // Toggle menu visibility
    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });

    // Close the menu if a link is clicked (optional feature)
    navLinks.addEventListener('click', function(event) {
        if (event.target.tagName === 'A') {
            navLinks.classList.remove('active');
        }
    });
});
