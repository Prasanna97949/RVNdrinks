
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

// carousel
const productCarousel = document.getElementById("productCarousel");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    let index = 0;
    const totalSlides = document.querySelectorAll("#productCarousel > div").length;
    const visibleSlides = window.innerWidth >= 768 ? 3 : window.innerWidth >= 640 ? 2 : 1;
    
    function updateCarousel() {
        const slideWidth = document.querySelector("#productCarousel > div").offsetWidth;
        productCarousel.style.transform = `translateX(-${index * slideWidth}px)`;
    }

    function nextSlide() {
        index = (index + 1) % (totalSlides - visibleSlides + 1);
        updateCarousel();
    }

    function prevSlide() {
        index = (index - 1 + (totalSlides - visibleSlides + 1)) % (totalSlides - visibleSlides + 1);
        updateCarousel();
    }

    nextBtn.addEventListener("click", nextSlide);
    prevBtn.addEventListener("click", prevSlide);

    setInterval(nextSlide, 3000);