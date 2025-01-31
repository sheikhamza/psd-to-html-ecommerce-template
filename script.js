const topBar = document.getElementById('top-bar');

const OfferClose = () => {
    topBar.style.cssText = 'display: none !important;';
}

// const menuToggle = document.getElementById('menu-toggle');
// const mobileNav = document.getElementById('mobile-nav');
// const closeMenu = document.getElementById('close-menu');



// Listen for click events on the body
const menuToggle = document.getElementById('menu-toggle');
const mobileNav = document.getElementById('mobile-nav');
const closeMenu = document.getElementById('close-menu');

// Open mobile menu
menuToggle.addEventListener('click', () => {
    mobileNav.style.transform = 'translateX(0)';
    document.body.classList.add('overflow-hidden'); // Disable body scroll
});

// Close mobile menu
closeMenu.addEventListener('click', () => {
    mobileNav.style.transform = 'translateX(-100%)';
    document.body.classList.remove('overflow-hidden'); // Enable body scroll again
});

// Close menu if click is outside (or on body)
document.body.addEventListener('click', function(event) {
    // Check if the click is outside the mobile menu and not the menu button
    if (!mobileNav.contains(event.target) && !menuToggle.contains(event.target)) {
        mobileNav.style.transform = 'translateX(-100%)'; // Hide the div
        document.body.classList.remove('overflow-hidden'); // Enable body scroll
    }
});

// Prevent click on mobile nav itself from closing it
mobileNav.addEventListener('click', function(event) {
    event.stopPropagation();
});


closeMenu.addEventListener('click', () => {
    mobileNav.style.transform = 'translateX(-100%)';
});

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        640: { slidesPerView: 2, spaceBetween: 20 },
        1024: { slidesPerView: 4, spaceBetween: 30 },
    },
});