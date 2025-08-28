const container = document.querySelector(".container");

const careers = [
  "My name is Mohammed Hussein",
  "I'm a Frontend",
  "My Age Is 20",
];
let careerIndex = 0;
let characterIndex = 0;

function updateText() {
  characterIndex++;
  container.innerHTML = `
  
  <h1>Welcome</h1>
  <p>${careers[careerIndex].slice(0, characterIndex)}</p>
  `;
  if (characterIndex === careers[careerIndex].length) {
    careerIndex++;
    characterIndex = 0;

    if (careerIndex === careers.length) {
      careerIndex = 0;
    }

    setTimeout(updateText, 1000);
  } else {
    setTimeout(updateText, 400);
  }
}

setTimeout(updateText, 1000);
