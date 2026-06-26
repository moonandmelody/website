const track = document.getElementById('homeCarouselTrack');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const dots = document.querySelectorAll('.dot');

const  collectionTrack = document.getElementById('collectionCarouselTrack');
const  collectionPrevBtn = document.getElementById('collectionPrevBtn');
const  collectionNextBtn = document.getElementById('collectionNextBtn');
const  collectionDots = document.querySelectorAll('.featuredCollectionDot');

const signatureTrack = document.getElementById("signatureCarouselTrack");
const signaturePrevBtn = document.getElementById("signaturePrevBtn");
const signatureNextBtn = document.getElementById("signatureNextBtn");

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

setInterval(autoscroll,10000);

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


// Function to update which dot highlights as active for collection carousel
function updateCollectionIndicators() {
    const slideWidth = collectionTrack.clientWidth;
    // Calculate the current active slide index based on scroll position
    const activeIndex = Math.round(collectionTrack.scrollLeft / slideWidth);

    collectionDots.forEach((dot, index) => {
        if (index === activeIndex) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

collectionTrack.addEventListener('scroll', updateCollectionIndicators);

// Move track forward by the width of one slide
collectionNextBtn.addEventListener('click', () => {
    const slideWidth = collectionTrack.clientWidth;
    // If at the end, loop back to start
    if (collectionTrack.scrollLeft + slideWidth >= collectionTrack.scrollWidth) {
        collectionTrack.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
        collectionTrack.scrollBy({ left: slideWidth, behavior: 'smooth' });
    }
});

// Move track backward by the width of one slide
collectionPrevBtn.addEventListener('click', () => {
    const slideWidth = collectionTrack.clientWidth;
    // If at the start, loop back to the end
    if (collectionTrack.scrollLeft <= 0) {
        collectionTrack.scrollTo({ left: collectionTrack.scrollWidth, behavior: 'smooth' });
    } else {
        collectionTrack.scrollBy({ left: -slideWidth, behavior: 'smooth' });
    }
});

setInterval(collectionAutoscroll,10000);

function collectionAutoscroll(){
    collectionNextBtn.click();
}

// Click functionality for the dots
collectionDots.forEach(dot => {
    dot.addEventListener('click', (e) => {
        const targetIndex = e.target.getAttribute('data-index');
        const slideWidth = collectionTrack.clientWidth;

        collectionTrack.scrollTo({
            left: targetIndex * slideWidth,
            behavior: 'smooth'
        });
    });
});

// Move track forward by the width of one slide
signatureNextBtn.addEventListener('click', () => {
    const slideWidth = signatureTrack.clientWidth;
    // If at the end, loop back to start
    if (signatureTrack.scrollLeft + slideWidth >= signatureTrack.scrollWidth) {
        signatureTrack.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
        signatureTrack.scrollBy({ left: slideWidth, behavior: 'smooth' });
    }
});

// Move track backward by the width of one slide
signaturePrevBtn.addEventListener('click', () => {
    const slideWidth = signatureTrack.clientWidth;
    // If at the start, loop back to the end
    if (signatureTrack.scrollLeft <= 0) {
        signatureTrack.scrollTo({ left: signatureTrack.scrollWidth, behavior: 'smooth' });
    } else {
        signatureTrack.scrollBy({ left: -slideWidth, behavior: 'smooth' });
    }
});
