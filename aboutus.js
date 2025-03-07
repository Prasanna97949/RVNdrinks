// navbar
const navbar = document.getElementById('navbar');
        const menuBtn = document.getElementById('menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');

        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('bg-gray-700', 'shadow-lg', 'p-3');
                navbar.classList.remove('bg-transparent', 'p-4');
            } else {
                navbar.classList.add('bg-transparent', 'p-4');
                navbar.classList.remove('bg-gray-700', 'shadow-lg', 'p-3');
            }
        });

        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

// scroll animation
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".fade-in");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    });
    sections.forEach(section => observer.observe(section));
});