const track = document.getElementById('homeCarouselTrack');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const dots = document.querySelectorAll('.dot');

const  collectionTrack = document.getElementById('collectionCarouselTrack');
const  collectionPrevBtn = document.getElementById('collectionPrevBtn');
const  collectionNextBtn = document.getElementById('collectionNextBtn');
const  collectionDots = document.querySelectorAll('.featuredCollectionDot');

const  signatureCarouselTrack = document.getElementById('signatureCarouselTrack');
const signatureDots = document.querySelectorAll('.signatureDot');

const  gourmetCarouselTrack = document.getElementById('gourmetCarouselTrack');
const gourmetDots = document.querySelectorAll('.gourmetDot');

const  bakedCarouselTrack = document.getElementById('bakedCarouselTrack');
const  bakedItemsPrevBtn = document.getElementById('bakedItemsPrevBtn');
const  bakedItemsNextBtn = document.getElementById('bakedItemsNextBtn');
const bakedDots = document.querySelectorAll('.bakedDot');

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

setInterval(autoscroll,18000);

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

function updateSignatureIndicators() {
    const slideWidth = signatureCarouselTrack.clientWidth;
    // Calculate the current active slide index based on scroll position
    const activeIndex = Math.round(signatureCarouselTrack.scrollLeft / slideWidth);

    signatureDots.forEach((dot, index) => {
        if (index === activeIndex) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

signatureCarouselTrack.addEventListener('scroll', updateSignatureIndicators);

function updateGourmetIndicators() {
    const slideWidth = gourmetCarouselTrack.clientWidth;
    // Calculate the current active slide index based on scroll position
    const activeIndex = Math.round(gourmetCarouselTrack.scrollLeft / slideWidth);

    gourmetDots.forEach((dot, index) => {
        if (index === activeIndex) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

gourmetCarouselTrack.addEventListener('scroll', updateGourmetIndicators);

function updateBakedIndicators() {
    const slideWidth = bakedCarouselTrack.clientWidth;
    // Calculate the current active slide index based on scroll position
    const activeIndex = Math.round(bakedCarouselTrack.scrollLeft / slideWidth);

    bakedDots.forEach((dot, index) => {
        if (index === activeIndex) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

bakedCarouselTrack.addEventListener('scroll', updateBakedIndicators);

// Move track forward by the width of one slide
bakedItemsNextBtn.addEventListener('click', () => {
    const slideWidth = bakedCarouselTrack.clientWidth;
    // If at the end, loop back to start
    if (bakedCarouselTrack.scrollLeft + slideWidth >= bakedCarouselTrack.scrollWidth) {
        bakedCarouselTrack.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
        bakedCarouselTrack.scrollBy({ left: slideWidth, behavior: 'smooth' });
    }
});

// Move track backward by the width of one slide
bakedItemsPrevBtn.addEventListener('click', () => {
    const slideWidth = bakedCarouselTrack.clientWidth;
    // If at the start, loop back to the end
    if (bakedCarouselTrack.scrollLeft <= 0) {
        bakedCarouselTrack.scrollTo({ left: bakedCarouselTrack.scrollWidth, behavior: 'smooth' });
    } else {
        bakedCarouselTrack.scrollBy({ left: -slideWidth, behavior: 'smooth' });
    }
});
