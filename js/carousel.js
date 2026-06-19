const track = document.getElementById('carouselTrack');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const dots = document.querySelectorAll('.dot');

// Function to update which dot highlights as active
function updateIndicators() {
    const slideWidth = track.clientWidth;
    // Calculate the current active slide index based on scroll position
    const activeIndex = Math.round(track.scrollLeft / slideWidth);

    dots.forEach((dot, index) => {
        if (index === activeIndex) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

track.addEventListener('scroll', updateIndicators);

// Move track forward by the width of one slide
nextBtn.addEventListener('click', () => {
    const slideWidth = track.clientWidth;
    // If at the end, loop back to start
    if (track.scrollLeft + slideWidth >= track.scrollWidth) {
        track.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
        track.scrollBy({ left: slideWidth, behavior: 'smooth' });
    }
});

// Move track backward by the width of one slide
prevBtn.addEventListener('click', () => {
    const slideWidth = track.clientWidth;
    // If at the start, loop back to the end
    if (track.scrollLeft <= 0) {
        track.scrollTo({ left: track.scrollWidth, behavior: 'smooth' });
    } else {
        track.scrollBy({ left: -slideWidth, behavior: 'smooth' });
    }
});

setInterval(autoscroll,5000);

function autoscroll(){
    nextBtn.click();
}

// Click functionality for the dots
dots.forEach(dot => {
    dot.addEventListener('click', (e) => {
        const targetIndex = e.target.getAttribute('data-index');
        const slideWidth = track.clientWidth;

        track.scrollTo({
            left: targetIndex * slideWidth,
            behavior: 'smooth'
        });
    });
});