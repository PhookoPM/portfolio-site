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
