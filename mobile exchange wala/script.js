// Initialize AOS
document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        mirror: false
    });
});

// Sticky Navbar Logic
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('glass-nav', 'py-3');
        navbar.classList.remove('py-5');
    } else {
        navbar.classList.remove('glass-nav', 'py-3');
        navbar.classList.add('py-5');
    }
});

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Phone Exchange Form Logic
const exchangeForm = document.getElementById('exchangeForm');

if (exchangeForm) {
    exchangeForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const model = document.getElementById('model').value;
        const condition = document.getElementById('condition').value;
        const storage = document.getElementById('storage').value;
        const price = document.getElementById('price').value;

        // WhatsApp Message Formatting
        const message = `*New Exchange Inquiry*%0A%0A` +
            `*Name:* ${name}%0A` +
            `*Phone:* ${phone}%0A` +
            `*Model:* ${model}%0A` +
            `*Condition:* ${condition}%0A` +
            `*Storage:* ${storage}%0A` +
            `*Expected Price:* ₹${price}`;

        const whatsappNumber = "919876543210"; // Replace with actual shop number
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

        // Open WhatsApp
        window.open(whatsappUrl, '_blank');
    });
}

// Smooth Scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
            // Close mobile menu if open
            if (!mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
            }
        }
    });
});

// Form Input Animation (Simple focus effect)
const inputs = document.querySelectorAll('input, select');
inputs.forEach(input => {
    input.addEventListener('focus', () => {
        input.parentElement.classList.add('scale-[1.02]');
    });
    input.addEventListener('blur', () => {
        input.parentElement.classList.remove('scale-[1.02]');
    });
});
