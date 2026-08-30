const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {
        const top = section.offsetTop - 120;

        if (pageYOffset >= top) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });

});
document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', () => {
        // If the user scrolls down more than 150 pixels, add the 'scrolled' class
        if (window.scrollY > 150) {
            navbar.classList.add('scrolled');
        } else {
            // Remove it when they scroll back to the top
            navbar.classList.remove('scrolled');
        }
    });
});
// Resume Internal Scrolling Logic
function scrollToResume(position) {
    const container = document.getElementById('resume-container');
    const maxScroll = container.scrollHeight - container.clientHeight;
    
    if (position === 'top') {
        container.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (position === 'middle') {
        container.scrollTo({ top: maxScroll / 2, behavior: 'smooth' });
    } else if (position === 'bottom') {
        container.scrollTo({ top: maxScroll, behavior: 'smooth' });
    }
}