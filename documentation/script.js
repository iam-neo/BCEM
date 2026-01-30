document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for sidebar links
    document.querySelectorAll('.sidebar a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            // Remove active class from all
            document.querySelectorAll('.sidebar a').forEach(a => a.classList.remove('active'));
            // Add active to current
            this.classList.add('active');

            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Intersection Observer to highlight active section on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                document.querySelectorAll('.sidebar a').forEach(a => {
                    a.classList.remove('active');
                    if (a.getAttribute('href') === `#${id}`) {
                        a.classList.add('active');
                    }
                });
            }
        });
    }, { threshold: 0.3 });

    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
});
