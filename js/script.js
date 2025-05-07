const text = document.querySelectorAll('.text-animation span');
// This script handles the typing effect for the frontend and server tools sections
const frontendTools = ["HTML", "CSS", "NextJS", "Tailwind CSS"];
const serverTools = ["C#", ".NET", "Python (Django)"];

function typeText(id, words, speed = 100, pause = 1500) {
  const el = document.getElementById(id);
  let i = 0;

  function typeNextWord() {
    const word = words[i];
    let j = 0;
    el.setAttribute("data-text", "");

    const typing = setInterval(() => {
      el.setAttribute("data-text", word.substring(0, j + 1));
      j++;
      if (j === word.length) {
        clearInterval(typing);
        setTimeout(() => {
          i = (i + 1) % words.length;
          typeNextWord();
        }, pause);
      }
    }, speed);
  }

  typeNextWord();
}

typeText("frontend-text", frontendTools);
typeText("server-text", serverTools);
