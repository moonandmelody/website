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

const header = document.getElementById('headerNav');

window.addEventListener('scroll', () => {
    // Check if user has scrolled down more than 20 pixels
    if (window.scrollY > 20) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

const ourStoryExpandButton = document.getElementById("ourStoryExpandButton");
const ourStoryExpandedSection = document.getElementById("ourStoryExpandedSection");

ourStoryExpandButton.addEventListener('click',() => {
    ourStoryExpandedSection.classList.toggle("show");
    ourStoryExpandButton.classList.toggle("ourStoryExpandClose");
});
