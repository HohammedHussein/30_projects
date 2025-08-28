let input = document.querySelector(".input");
const bodyEl = document.querySelector("body");

input.checked = JSON.parse(localStorage.getItem("mode"));

updateBody();
function updateBody() {
  if (input.checked) {
    bodyEl.style.backgroundColor = "black";
  } else {
    bodyEl.style.backgroundColor = "white";
  }
}
input.addEventListener("change", () => {
  updateBody();
  saveMode();
});
console.log(JSON.parse(localStorage.getItem("mode")));

// ====== save Mode In Local Storage =======
function saveMode() {
  localStorage.setItem("mode", JSON.stringify(input.checked));
}
