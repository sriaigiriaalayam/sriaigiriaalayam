// ------------------------
// 1. Modal Functionality
// ------------------------
const serviceCards = document.querySelectorAll('.service-card, .everything-card');
const modal = document.querySelector('.modal');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-description');
const closeBtn = document.querySelector('.close-btn');

// Details for modals
const details = {
    "Kundali / Janam Kundli & Matching": "Detailed Kundali & Matching info...",
    "Tarot Astrology": "Detailed Tarot Astrology info...",
    "Numerology / Career Guidance": "Detailed Numerology info...",
    "Palmistry": "Detailed Palmistry info...",
    "Feng Shui Astrology": "Detailed Feng Shui info...",
    "Scientific Vastu Shastra": "Detailed Vastu info...",
    "Rituals & Pujas": "Details on Havan, Vastu Shanti, Kaal Sarp rituals...",
    "Muhurtham / Auspicious Timing": "Details on Muhurtham & Auspicious Timing...",
    "Gemstone Remedies & Sales": "Details on gemstone remedies & sales...",
    "Online Consultations": "Information on online consultations...",
    "Marriage Problems": "Guidance on marriage issues...",
    "Land / Property Issues": "Guidance on land/property issues...",
    "Career Problems": "Guidance on career problems...",
    "Health & Well-being": "Health & well-being guidance...",
    "Family Disputes": "Family disputes guidance...",
    "General Life Guidance": "General life guidance info..."
};

// Open modal on card click
serviceCards.forEach(card => {
    card.addEventListener('click', () => {
        const key = card.dataset.service;
        modalTitle.textContent = key;
        modalDesc.textContent = details[key];
        modal.style.display = 'flex';
    });
});

// Close modal
closeBtn.addEventListener('click', () => modal.style.display = 'none');
window.addEventListener('click', e => { if (e.target === modal) modal.style.display = 'none'; });

// ------------------------
// 2. Fade-in on Scroll
// ------------------------
const faders = document.querySelectorAll('.fade-in');
window.addEventListener('scroll', () => {
    faders.forEach(el => {
        const top = el.getBoundingClientRect().top;
        const windowH = window.innerHeight;
        if (top < windowH - 50) el.classList.add('show');
    });
});

// ------------------------
// 3. Testimonials Slider
// ------------------------
const testimonialsWrapper = document.querySelector('.testimonials-wrapper');
let offset = 0;
function slideTestimonials() {
    if (!testimonialsWrapper) return;
    const width = testimonialsWrapper.querySelector('.testimonial-card').offsetWidth + 20;
    offset += width;
    if (offset >= testimonialsWrapper.scrollWidth) offset = 0;
    testimonialsWrapper.scrollTo({ left: offset, behavior: 'smooth' });
}
setInterval(slideTestimonials, 3000); // slide every 3 seconds

// ------------------------
// 4. Hero Particles Effect
// ------------------------
particlesJS("particles-js", {
    "particles": {
        "number": { "value": 60, "density": { "enable": true, "value_area": 800 } },
        "color": { "value": "#b8860b" },
        "shape": { "type": "circle" },
        "opacity": { "value": 0.6, "random": true },
        "size": { "value": 4, "random": true },
        "line_linked": { "enable": false },
        "move": { "enable": true, "speed": 1.5, "direction": "none", "random": true, "straight": false, "bounce": true }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": { "enable": true, "mode": "repulse" },
            "onclick": { "enable": true, "mode": "push" }
        },
        "modes": { "repulse": { "distance": 100 }, "push": { "particles_nb": 4 } }
    },
    "retina_detect": true
});
