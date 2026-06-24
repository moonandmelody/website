function navigateTo(sectionName){
    let element = document.getElementById(sectionName);
    let offsetFromTop = 100;

    if(sectionName === "home"){
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }else{
        const elementViewportTop = element.getBoundingClientRect().top;
        const currentScrollTop = window.scrollY || window.pageYOffset;
        const finalScrollTarget = elementViewportTop + currentScrollTop - offsetFromTop;

        window.scrollTo({
            top: finalScrollTarget,
            behavior: 'smooth'
        });
    }
}

const openMenuBtn = document.getElementById('openMenu');
const closeMenuBtn = document.getElementById('closeMenu');
const menuOverlay = document.getElementById('menuOverlay');

// Slide the menu panel in
openMenuBtn.addEventListener('click', () => {
    menuOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
});

// Slide the menu panel out
closeMenuBtn.addEventListener('click', () => {
    menuOverlay.classList.remove('active');
    document.body.style.overflow = '';
});

const header = document.getElementById('headerNav');
const menuHeader = document.getElementById("menuHeader");
const overlayBody = document.getElementById('overlayBody');

window.addEventListener('scroll', () => {
    // Check if user has scrolled down more than 20 pixels
    if (window.scrollY > 20) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

overlayBody.addEventListener('scroll', (e) => {
    console.log("overlayDiv is scrolling");
    console.log(overlayBody.scrollHeight);
    // Check if user has scrolled down more than 20 pixels
    let currentScrollY = e.currentTarget.scrollTop;

    if (currentScrollY > 20) {
        menuHeader.classList.add('scrolled');
    } else {
        menuHeader.classList.remove('scrolled');
    }
});

const ourStoryExpandButton = document.getElementById("ourStoryExpandButton");
const ourStoryExpandedSection = document.getElementById("ourStoryExpandedSection");

ourStoryExpandButton.addEventListener('click',() => {
    ourStoryExpandedSection.classList.toggle("show");
    ourStoryExpandButton.classList.toggle("ourStoryExpandClose");
});
