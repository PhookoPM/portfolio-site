const frontendTools = ["HTML", "CSS", "Next.js", "Tailwind CSS"];
const serverTools = ["C#", ".NET", "Python (Django)", "SQL"];

const typeWriter = (elementId, words, delay = 150, wait = 2000) => {
    let i = 0;
    let j = 0;
    let currentWord = '';
    let isDeleting = false;
    const element = document.getElementById(elementId);

    const type = () => {
        currentWord = words[i];

        if (isDeleting) {
            j--;
        } else {
            j++;
        }

        element.textContent = currentWord.substring(0, j);

        if (!isDeleting && j === currentWord.length) {
            isDeleting = true;
            setTimeout(type, wait);
        } else if (isDeleting && j === 0) {
            isDeleting = false;
            i = (i + 1) % words.length;
            setTimeout(type, 500);
        } else {
            setTimeout(type, isDeleting ? delay / 2 : delay);
        }
    };

    type();
};

document.addEventListener("DOMContentLoaded", () => {
    typeWriter("frontend-text", frontendTools);
    typeWriter("server-text", serverTools);
});

let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {   
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if(top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove("active");
                document.querySelector(`header nav a
                [href*=' + id + ']`).classList.add("active");
            });
        }
    })
}


menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
} 