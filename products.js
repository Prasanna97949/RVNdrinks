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

// popup

function openPopup(imageSrc, title, description, sizes) {
    document.getElementById('popupImage').src = imageSrc;
    document.getElementById('popupTitle').innerText = title;
    document.getElementById('popupDescription').innerText = description;

    let sizesContainer = document.getElementById('popupSizes');
    sizesContainer.innerHTML = sizes.map(size => `<span class="bg-gray-200 px-3 py-1 rounded-md text-sm">${size}</span>`).join("");

    document.getElementById('popup').classList.remove('hidden');
}

function closePopup() {
    document.getElementById('popup').classList.add('hidden');
}