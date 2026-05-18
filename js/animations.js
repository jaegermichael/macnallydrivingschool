// ===== GSAP ANIMATIONS =====
gsap.registerPlugin(ScrollTrigger);

// Hero Animations
gsap.to('.hero-badge', { opacity: 1, y: 0, duration: 1, delay: 2.8, ease: 'power3.out' });
gsap.to('.hero h1', { opacity: 1, y: 0, duration: 1, delay: 3.0, ease: 'power3.out' });
gsap.to('.hero-subtitle', { opacity: 1, y: 0, duration: 1, delay: 3.2, ease: 'power3.out' });
gsap.to('.hero-buttons', { opacity: 1, y: 0, duration: 1, delay: 3.4, ease: 'power3.out' });
gsap.to('.stat-item', { opacity: 1, duration: 1, delay: 3.6, stagger: 0.2, ease: 'power3.out' });

// Counter Animation
const counters = document.querySelectorAll('.stat-number');
counters.forEach(counter => {
    const target = parseInt(counter.getAttribute('data-target'));
    gsap.to(counter, {
        innerHTML: target,
        duration: 2,
        delay: 4,
        snap: { innerHTML: 1 },
        ease: 'power2.out',
        onUpdate: function() {
            if (target === 98) counter.innerHTML = Math.round(this.targets()[0].innerHTML) + '%';
            else if (target === 15000) counter.innerHTML = Math.round(this.targets()[0].innerHTML).toLocaleString() + '+';
            else counter.innerHTML = Math.round(this.targets()[0].innerHTML) + '+';
        }
    });
});

// Scroll Reveal
const revealElements = document.querySelectorAll('.reveal');
revealElements.forEach(element => {
    gsap.fromTo(element,
        { opacity: 0, y: 50 },
        {
            opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
            scrollTrigger: { trigger: element, start: 'top 85%', toggleActions: 'play none none none' }
        }
    );
});

// Navbar Scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

// Generate Particles
const particlesContainer = document.getElementById('particles');
for (let i = 0; i < 50; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDelay = (Math.random() * 15 + 3) + 's';
    particle.style.animationDuration = (10 + Math.random() * 10) + 's';
    particlesContainer.appendChild(particle);
}

// Parallax
gsap.to('.parallax-bg', {
    yPercent: 50,
    ease: 'none',
    scrollTrigger: { trigger: '.fleet-section', start: 'top bottom', end: 'bottom top', scrub: true }
});
