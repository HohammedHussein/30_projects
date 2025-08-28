let loadMore = document.querySelector(".btn");
let container = document.querySelector(".image_container");

loadMore.addEventListener("click", () => {
  showImage();
});

function showImage() {
  container.innerHTML += `
      <img src="https://picsum.photos/200/300?random=${Math.floor(
        Math.random() * 2000
      )}" />
      <img onerror="this.onerror=null;this.src='./ZiClJf-1920w.jpg" src="https://picsum.photos/200/300?random=${Math.floor(
        Math.random() * 2000
      )}" />
      <img onerror="this.onerror=null;this.src='./ZiClJf-1920w.jpg" src="https://picsum.photos/200/300?random=${Math.floor(
        Math.random() * 2000
      )}" />
      <img onerror="this.onerror=null;this.src='./ZiClJf-1920w.jpg" src="https://picsum.photos/200/300?random=${Math.floor(
        Math.random() * 2000
      )}" />
      <img onerror="this.onerror=null;this.src='./ZiClJf-1920w.jpg" src="https://picsum.photos/200/300?random=${Math.floor(
        Math.random() * 2000
      )}" />
      <img onerror="this.onerror=null;this.src='./ZiClJf-1920w.jpg" src="https://picsum.photos/200/300?random=${Math.floor(
        Math.random() * 2000
      )}" />
  `;
}
showImage();
