const text = document.querySelectorAll('.text-animation span');
// This script handles the typing effect for the frontend and server tools sections
const frontendTools = ["HTML", "CSS", "NextJS", "Tailwind CSS"];
const serverTools = ["C#", ".NET", "Python (Django)"];

function typeText(elementId, words, speed = 150) {
  let i = 0, j = 0, current = '';
  const element = document.getElementById(elementId);

  function type() {
    if (j === words[i].length) {
      setTimeout(() => erase(), 1000);
    } else {
      current += words[i][j];
      element.setAttribute("data-text", current);
      j++;
      setTimeout(type, speed);
    }
  }

  function erase() {
    if (j === 0) {
      i = (i + 1) % words.length;
      setTimeout(type, speed);
    } else {
      current = current.slice(0, -1);
      element.setAttribute("data-text", current);
      j--;
      setTimeout(erase, speed / 2);
    }
  }

  type();
}

typeText("frontend-text", frontendTools);
typeText("server-text", serverTools);

