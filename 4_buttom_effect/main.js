const btn = document.querySelector(".btn");

btn.addEventListener("mouseover", (e) => {
  const X = e.pageX - btn.offsetLeft;
  const Y = e.pageY - btn.offsetTop;

  btn.style.setProperty("--xPos", X + "px");
  btn.style.setProperty("--yPos", Y + "px");
});

// ==============  Hold Button  ===============

const catchBtn = document.querySelector(".catchMe");

catchBtn.addEventListener("mouseover", () => {
  const random = Math.floor(Math.random() * (0, 600 + 2));
  const random2 = Math.floor(Math.random() * (0, 400 + 2));
  catchBtn.style.top = random + "px";
  catchBtn.style.left = random2 + "px";
});
