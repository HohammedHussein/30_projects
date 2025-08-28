const btn = document.querySelector(".btn");

btn.addEventListener("mouseover", (e) => {
  const X = e.pageX - btn.offsetLeft;
  const Y = e.pageY - btn.offsetTop;

  btn.style.setProperty("--xPos", X + "px");
  btn.style.setProperty("--yPos", Y + "px");
});

// ==============  Hold Button  ===============

const catchBtn = document.querySelector(".catchMe");

catchBtn.addEventListener("mouseenter", () => {
  const random = Math.floor(Math.random() * (0, 400 + 1));
  catchBtn.style.top = random + "px";
  catchBtn.style.left = random + "px";
});
