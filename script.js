document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            alert('Thank you for your message!');
            // You can add code here to actually submit the form data
        });
    }

    // Theme Toggle
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Function to set the theme
    function setTheme(theme) {
        if (theme === 'dark') {
            body.classList.add('dark-mode');
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        } else {
            body.classList.remove('dark-mode');
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        }
        localStorage.setItem('theme', theme);
    }

    // Check for saved theme in local storage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        setTheme(savedTheme);
    }

    // Toggle theme on button click
    themeToggle.addEventListener('click', function() {
        if (body.classList.contains('dark-mode')) {
            setTheme('light');
        } else {
            setTheme('dark');
        }
    });

        // Custom Tooltip
    const tooltipSpan = document.getElementById('tooltip');

    document.addEventListener('mouseover', function(e) {
        const target = e.target;
        const tooltipText = target.dataset.tooltip;

        if (tooltipText && target.closest('.nav-links')) {
            tooltipSpan.textContent = tooltipText;
            tooltipSpan.style.display = 'block';

            const x = e.clientX + 10;
            const y = e.clientY + 10;

            tooltipSpan.style.left = x + 'px';
            tooltipSpan.style.top = y + 'px';
        }
    });

    document.addEventListener('mouseout', function(e) {
        tooltipSpan.style.display = 'none';
    });
});