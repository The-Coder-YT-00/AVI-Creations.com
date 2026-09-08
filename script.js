/**
 * PROFESSIONAL WEBSITE CORE JAVASCRIPT
 * This file handles all animations, form actions, and responsiveness.
 */

// This wrapper ensures the code runs ONLY after the HTML layout fully loads
document.addEventListener('DOMContentLoaded', () => {
    
    // Test connection message in the browser console
    console.log("🚀 Professional website JavaScript successfully connected!");

    /* ==========================================================================
       FEATURE 1: MOBILE NAV MENU TOGGLE (Burger Menu)
       ========================================================================== */
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinksContainer = document.querySelector('.nav-links');

    // Only runs if you decide to add a mobile menu button later
    if (menuToggle && navLinksContainer) {
        menuToggle.addEventListener('click', () => {
            navLinksContainer.classList.toggle('active');
            menuToggle.classList.toggle('is-active');
        });
    }


    /* ==========================================================================
       FEATURE 2: SMOOTH PAGE SCROLLING
       ========================================================================== */
    const links = document.querySelectorAll('.nav-links a');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            
            // If the link points to a section ID on the same page (like #contact)
            if (targetId && targetId.startsWith('#') && targetId.length > 1) {
                e.preventDefault(); // Stop the default harsh jump jump
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'start'
                    });
                }

                // Automatically close mobile menu after clicking a section link
                if (navLinksContainer && navLinksContainer.classList.contains('active')) {
                    navLinksContainer.classList.remove('active');
                    menuToggle.classList.remove('is-active');
                }
            }
        });
    });


    /* ==========================================================================
       FEATURE 3: CONTACT FORM HANDLING
       ========================================================================== */
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Stops the page from breaking or reloading
            
            // 1. Gather the input values from the user
            const emailInput = contactForm.querySelector('input[type="email"]');
            const messageInput = contactForm.querySelector('textarea');
            
            // 2. Simple verification check
            if (emailInput.value.trim() === "" || messageInput.value.trim() === "") {
                alert('Please fill out all required fields before submitting.');
                return;
            }

            // 3. Success Feedback UI
            alert('Thank you for reaching out! Our team will reply to ' + emailInput.value + ' shortly.');
            
            // 4. Reset the form text inputs cleanly
            contactForm.reset();
        });
    }

});
