const frontendTools = ["HTML", "CSS", "React(Next.js)", "Tailwind CSS", "Typescript", "Javascript","Vue.js" ];
const serverTools = ["C#", ".NET", "Python (Django)", "Docker + PostgreSQL + Express", "Node.js"];

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

function openModal() {
    const modal = document.getElementById('pdfModal');
    const pdfViewer = document.getElementById('pdfViewer');
    
    // Set the PDF file path
    pdfViewer.src = 'images/resume.pdf';
    
    modal.classList.add('show');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function closeModal() {
    const modal = document.getElementById('pdfModal');
    const pdfViewer = document.getElementById('pdfViewer');
    
    modal.classList.remove('show');
    pdfViewer.src = ''; // Clear the PDF source to stop loading
    document.body.style.overflow = 'auto'; // Restore scrolling
}

// Close modal when clicking outside the content
document.getElementById('pdfModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeModal();
    }
});

// PDF Read-only restrictions
document.addEventListener('DOMContentLoaded', function() {
    const pdfViewer = document.getElementById('pdfViewer');
    const modal = document.getElementById('pdfModal');
    
    // Disable right-click context menu on PDF iframe
    pdfViewer.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        return false;
    });

    // Disable text selection on PDF iframe
    pdfViewer.style.userSelect = 'none';
    pdfViewer.style.webkitUserSelect = 'none';
    pdfViewer.style.mozUserSelect = 'none';
    pdfViewer.style.msUserSelect = 'none';

    // Disable drag and drop
    pdfViewer.addEventListener('dragstart', function(e) {
        e.preventDefault();
        return false;
    });

    // Disable keyboard shortcuts when modal is open
    document.addEventListener('keydown', function(e) {
        if (modal.classList.contains('show')) {
            // Disable Ctrl+S (Save)
            if (e.ctrlKey && e.key === 's') {
                e.preventDefault();
                alert('Saving is not allowed for this document.');
                return false;
            }
            // Disable Ctrl+P (Print)
            if (e.ctrlKey && e.key === 'p') {
                e.preventDefault();
                alert('Printing is not allowed for this document.');
                return false;
            }
            // Disable Ctrl+A (Select All)
            if (e.ctrlKey && e.key === 'a') {
                e.preventDefault();
                return false;
            }
            // Disable Ctrl+C (Copy)
            if (e.ctrlKey && e.key === 'c') {
                e.preventDefault();
                return false;
            }
            // Disable F12 (Developer Tools)
            if (e.key === 'F12') {
                e.preventDefault();
                return false;
            }
            // Disable Ctrl+Shift+I (Developer Tools)
            if (e.ctrlKey && e.shiftKey && e.key === 'I') {
                e.preventDefault();
                return false;
            }
            // Disable Ctrl+U (View Source)
            if (e.ctrlKey && e.key === 'u') {
                e.preventDefault();
                return false;
            }
            // Disable common PDF shortcuts (zoom, etc.)
            if (e.ctrlKey) {
                switch(e.key) {
                    case '+':
                    case '-':
                    case '=':
                    case '0':
                        e.preventDefault();
                        return false;
                }
            }
        }
        
        // Close modal with Escape key
        if (e.key === 'Escape' && modal.classList.contains('show')) {
            closeModal();
        }
    });

    // Disable printing specifically when modal is open
    window.addEventListener('beforeprint', function(e) {
        if (modal.classList.contains('show')) {
            e.preventDefault();
            alert('Printing is not allowed for this document.');
            return false;
        }
    });

    // Additional security: Disable common browser shortcuts
    document.addEventListener('keydown', function(e) {
        if (modal.classList.contains('show')) {
            // Disable Ctrl+Shift+J (Console)
            if (e.ctrlKey && e.shiftKey && e.key === 'J') {
                e.preventDefault();
                return false;
            }
            // Disable Ctrl+Shift+C (Inspect Element)
            if (e.ctrlKey && e.shiftKey && e.key === 'C') {
                e.preventDefault();
                return false;
            }
        }
    });

    // Disable right-click on the entire modal
    modal.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        return false;
    });
});

// function openModal() {
//     const modal = document.getElementById('pdfModal');
//     const pdfViewer = document.getElementById('pdfViewer');
    
//     // Set the PDF file path
//     pdfViewer.src = 'images/resume.pdf';
    
//     modal.classList.add('show');
//     document.body.style.overflow = 'hidden'; // Prevent background scrolling
// }

// function closeModal() {
//     const modal = document.getElementById('pdfModal');
//     const pdfViewer = document.getElementById('pdfViewer');
    
//     modal.classList.remove('show');
//     pdfViewer.src = ''; // Clear the PDF source to stop loading
//     document.body.style.overflow = 'auto'; // Restore scrolling
// }

// // Close modal when clicking outside the content f(n).
// document.getElementById('pdfModal').addEventListener('click', function(e) {
//     if (e.target === this) {
//         closeModal();
//     }
// });

// // Close modal with Escape key f(n).
// document.addEventListener('keydown', function(e) {
//     if (e.key === 'Escape') {
//         closeModal();
//     }
// });