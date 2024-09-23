// Add this to your JavaScript file
const slideshow = document.querySelector('.slideshow');
const images = slideshow.querySelectorAll('img');
let currentImageIndex = 0;

function nextImage() {
  images[currentImageIndex].classList.remove('active');
  currentImageIndex = (currentImageIndex + 1) % images.length;
  images[currentImageIndex].classList.add('active');
}

setInterval(nextImage, 3000); // change the interval time as needed