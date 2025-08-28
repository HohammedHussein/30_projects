const container = document.querySelector(".testimonial_container");

const data = [
  {
    img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "I would recommend apple for anyone trying to get the word out about their business. It has saved me so much time!",
    author: "Cherise G",
  },
  {
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
    text: "If you are a business owner, and you don't have meta in your toolkit just yet, I highly recommend that you check it out.",
    author: "Mohammed H",
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
    text: "Meta has helped my team and I stay on the same page. Previously, we were all over the board. Using meta has definitely saved us time and money.",
    author: "Hussein M",
  },
  {
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "The service is fantastic! I couldn't be happier with the results.",
    author: "John D",
  },
  {
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "A wonderful experience from start to finish. Highly recommended.",
    author: "Emily R",
  },
  {
    img: "https://randomuser.me/api/portraits/men/65.jpg",
    text: "Support was quick and helpful. My issue was resolved in minutes.",
    author: "Michael S",
  },
  {
    img: "https://randomuser.me/api/portraits/women/68.jpg",
    text: "I love how easy it is to use. The interface is very intuitive.",
    author: "Sarah T",
  },
  {
    img: "https://randomuser.me/api/portraits/men/21.jpg",
    text: "I've tried many products, but this one stands out for its quality.",
    author: "David P",
  },
  {
    img: "https://randomuser.me/api/portraits/women/12.jpg",
    text: "Fast, reliable, and affordable. What more could you ask for?",
    author: "Jessica L",
  },
  {
    img: "https://randomuser.me/api/portraits/men/77.jpg",
    text: "The team really cares about their customers. Five stars!",
    author: "Chris B",
  },
];

const image = container.querySelector(".image");
const textEL = container.querySelector(".text");
const authorEL = container.querySelector(".username");
let index = 0;
function updateCard() {
  const { img, text, author } = data[index];
  image.src = img;
  textEL.innerText = text;
  authorEL.innerText = author;
  index++;
  if (index == data.length) {
    index = 0;
  }
  setTimeout(() => {
    updateCard();
  }, 3000);
}
updateCard();
