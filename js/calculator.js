// ===== PRICING CALCULATOR =====
const calcClass = document.getElementById('calcClass');
const calcLessons = document.getElementById('calcLessons');
const calcHire = document.getElementById('calcHire');
const calcRefresher = document.getElementById('calcRefresher');
const totalAmount = document.getElementById('totalAmount');
const calcWhatsApp = document.getElementById('calcWhatsApp');

function updateCalculator() {
    const selectedOption = calcClass.options[calcClass.selectedIndex];
    const pricePerLesson = parseInt(selectedOption.getAttribute('data-price'));
    const lessons = parseInt(calcLessons.value) || 0;
    const hire = parseInt(calcHire.value) || 0;
    const refresher = parseInt(calcRefresher.value) || 0;

    let total = 0;
    if (calcClass.value === 'oral') {
        total = pricePerLesson * Math.ceil(lessons / 7); // weekly rate
    } else {
        total = pricePerLesson * lessons;
    }
    total += hire + refresher;

    // Animate the number change
    const currentVal = parseInt(totalAmount.textContent);
    gsap.to({ val: currentVal }, {
        val: total,
        duration: 0.5,
        ease: 'power2.out',
        onUpdate: function() { totalAmount.textContent = Math.round(this.targets()[0].val); }
    });

    // Update WhatsApp link
    const className = selectedOption.text.split(' - ')[0];
    calcWhatsApp.href = `https://wa.me/263772329050?text=Hi, I calculated my cost for ${className} (${lessons} lessons, total $${total}). Can I book?`;
}

[calcClass, calcLessons, calcHire, calcRefresher].forEach(el => {
    el.addEventListener('change', updateCalculator);
    el.addEventListener('input', updateCalculator);
});
