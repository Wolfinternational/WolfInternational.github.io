const images = [
  "images/slide1.jpg",
  "images/slide2.jpg",
  "images/slide3.jpg"
];

let index = 0;
const slideImage = document.getElementById("slideImage");

setInterval(() => {
  index = (index + 1) % images.length;
  slideImage.src = images[index];
}, 3000);
