const textArea = document.querySelector("textarea");

const totalCharter = document.querySelector(".total");
const remaining = document.querySelector(".remaining");

textArea.addEventListener("keyup", () => {
  updateCounter();
});

function updateCounter() {
  totalCharter.textContent = textArea.value.length;
  remaining.textContent =
    textArea.getAttribute("maxLength") - textArea.value.length;
}
updateCounter();
