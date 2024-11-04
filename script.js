document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide icons
    lucide.createIcons();

    // Dark mode toggle
    const darkModeToggle = document.getElementById('darkModeToggle');
    const moonIcon = darkModeToggle.querySelector('i');

    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark');
        if (document.body.classList.contains('dark')) {
            moonIcon.setAttribute('data-lucide', 'sun');
        } else {
            moonIcon.setAttribute('data-lucide', 'moon');
        }
        lucide.createIcons();
    });

    // Form submission (placeholder functionality)
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', (e) => {
        
        e.preventDefault();
        alert('Thank you for your message! This is a placeholder for form submission.');
    });

    window.addEventListener('scroll', () => {
        const header = document.getElementById('header');
        if (window.scrollY > 50) { // Adjust the scroll threshold as needed
            header.classList.add('blur');
        } else {
            header.classList.remove('blur');
        }
    });
});