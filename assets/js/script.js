/* assets/js/script.js */
document.addEventListener('DOMContentLoaded', () => {
    /* Mobile Menu Toggle */
    const menuBtn = document.querySelector('.mobile-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const links = document.querySelectorAll('.nav-link');

    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            /* Simple hamburger animation */
            menuBtn.classList.toggle('open');
        });
    }

    /* Close menu when clicking links */
    links.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu) navMenu.classList.remove('active');
        });
    });

    /* Sticky Header Effect */
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = "var(--shadow-md)";
        } else {
            header.style.boxShadow = "none";
        }
    });

    /* Active Link Highlighting */
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    links.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        } else {
            // Remove active just in case
            link.classList.remove('active');
        }
    });
});
