// markup cursor variable
let mouseCursor = document.querySelector(".cursor");
let navLinks = document.querySelectorAll(".nav-links li, .link");

window.addEventListener('mousemove',cursor);

// custom cursor call
function cursor(e) {
    mouseCursor.style.top = e.pageY + 'px';
    mouseCursor.style.left= e.pageX + 'px';
}

// zoom animation
navLinks.forEach(link=> {
    link.addEventListener('mouseleave', () => {
        mouseCursor.classList.remove("link-grow");
    });
    link.addEventListener('mousemove', () => {
        mouseCursor.classList.add("link-grow");
    });
});