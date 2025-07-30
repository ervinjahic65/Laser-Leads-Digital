/**
 * script.js
 * Handles basic interactivity for the AdWatcher landing page.
 * - Toggles mobile menu visibility.
 * - Handles FAQ accordion functionality.
 * - Sets the current year in the footer.
 * - Basic form submission feedback (prevents default, shows message).
 */

document.addEventListener('DOMContentLoaded', () => {
    // --- Mobile Menu Toggle ---
    const menuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuButton && mobileMenu) {
        menuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            // Optional: Change burger icon to close icon
            const icon = menuButton.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-bars');
                icon.classList.toggle('fa-times');
            }
        });

        // Close menu when a link is clicked (optional)
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                 mobileMenu.classList.add('hidden');
                 const icon = menuButton.querySelector('i');
                 if (icon) {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                 }
            });
        });
    } else {
        console.warn("Mobile menu button or menu element not found.");
    }

    // --- FAQ Accordion ---
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const questionButton = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');

        if (questionButton && answer) {
            questionButton.addEventListener('click', () => {
                // Close other open FAQs
                faqItems.forEach(otherItem => {
                    if (otherItem !== item && otherItem.classList.contains('active')) {
                        otherItem.classList.remove('active');
                         const otherAnswer = otherItem.querySelector('.faq-answer');
                         if(otherAnswer) otherAnswer.style.maxHeight = '0'; // Collapse smoothly
                    }
                });

                // Toggle the clicked FAQ
                item.classList.toggle('active');
                if (item.classList.contains('active')) {
                    // Set max-height to enable transition
                    answer.style.maxHeight = answer.scrollHeight + 'px';
                } else {
                    answer.style.maxHeight = '0'; // Collapse smoothly
                }
            });
        } else {
             console.warn("FAQ question button or answer element not found within an item.");
        }
    });

    // --- Footer Current Year ---
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    } else {
        console.warn("Current year span element not found.");
    }

    // --- Basic Form Handling (Example) ---

});
