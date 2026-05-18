// ===== 3D CAROUSEL =====
const carouselTrack = document.getElementById('carouselTrack');
const carouselItems = document.querySelectorAll('.carousel-item');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const dotsContainer = document.getElementById('carouselDots');
let currentIndex = 0;
const totalItems = carouselItems.length;

// Create dots
carouselItems.forEach((_, i) => {
    const dot = document.createElement('div');
    dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
    dot.addEventListener('click', () => goToSlide(i));
    dotsContainer.appendChild(dot);
});

function updateCarousel() {
    const angle = 360 / totalItems;
    carouselItems.forEach((item, i) => {
        const offset = i - currentIndex;
        const rotateY = offset * angle;
        const translateZ = 400;
        const translateX = offset * 120;
        const opacity = offset === 0 ? 1 : 0.5;
        const scale = offset === 0 ? 1 : 0.8;
        item.style.transform = `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`;
        item.style.opacity = opacity;
        item.style.zIndex = offset === 0 ? 10 : 5 - Math.abs(offset);
    });

    document.querySelectorAll('.carousel-dot').forEach((dot, i) => {
        dot.classList.toggle('active', i === currentIndex);
    });
}

function goToSlide(index) {
    currentIndex = index;
    if (currentIndex < 0) currentIndex = totalItems - 1;
    if (currentIndex >= totalItems) currentIndex = 0;
    updateCarousel();
}

prevBtn.addEventListener('click', () => goToSlide(currentIndex - 1));
nextBtn.addEventListener('click', () => goToSlide(currentIndex + 1));

// Auto-rotate carousel
let autoRotate = setInterval(() => goToSlide(currentIndex + 1), 4000);
carouselTrack.addEventListener('mouseenter', () => clearInterval(autoRotate));
carouselTrack.addEventListener('mouseleave', () => {
    autoRotate = setInterval(() => goToSlide(currentIndex + 1), 4000);
});

// Touch/drag support
let startX = 0;
let isDragging = false;

carouselTrack.addEventListener('mousedown', (e) => { startX = e.clientX; isDragging = true; });
carouselTrack.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const diff = e.clientX - startX;
    if (Math.abs(diff) > 50) {
        goToSlide(currentIndex + (diff > 0 ? -1 : 1));
        isDragging = false;
    }
});
carouselTrack.addEventListener('mouseup', () => isDragging = false);
carouselTrack.addEventListener('touchstart', (e) => { startX = e.touches[0].clientX; });
carouselTrack.addEventListener('touchmove', (e) => {
    const diff = e.touches[0].clientX - startX;
    if (Math.abs(diff) > 50) {
        goToSlide(currentIndex + (diff > 0 ? -1 : 1));
        startX = e.touches[0].clientX;
    }
});

updateCarousel();
