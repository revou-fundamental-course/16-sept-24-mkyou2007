
// Get the slideshow element
const slideshow = document.getElementById('slideshow');

// Get the images in the slideshow
const images = slideshow.children;

// Set the current image index
let currentIndex = 0;

// Set the slideshow interval (in milliseconds)
const interval = 3000; // 3 seconds

// Function to show the next image
function nextImage() {
  // Hide the current image
  images[currentIndex].style.display = 'none';

  // Increment the current index
  currentIndex++;

  // If we've reached the end of the slideshow, go back to the start
  if (currentIndex >= images.length) {
    currentIndex = 0;
  }

  // Show the next image
  images[currentIndex].style.display = 'block';
}
// Start the slideshow
setInterval(nextImage, interval);

const form = document.getElementById('myForm');
const nameInput = document.getElementById('input-name');
const dateInput = document.getElementById('input-date');
const genderSelect = document.getElementById('input-gender');
const messageTextarea = document.getElementById('input-message');
const infoBox = document.getElementById('info-box');
const infoName = document.getElementById('info-name');
const infoDate = document.getElementById('info-date');
const infoGender = document.getElementById('info-gender');
const infoMessage = document.getElementById('info-message');

// Add event listener to the form submit button
form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Validate the form fields
  if (nameInput.value === '' || dateInput.value === '' || genderSelect.value === '' || messageTextarea.value === '') {
    alert('Please fill in all the fields');
  } else {
    // Display the info box
    infoBox.style.display = 'block';

    // Display the form data in the info box
    infoName.textContent = `Name: ${nameInput.value}`;
    infoDate.textContent = `Date of Birth: ${dateInput.value}`;
    infoGender.textContent = `Gender: ${genderSelect.value}`;
    infoMessage.textContent = `Message: ${messageTextarea.value}`;
  }
});

// Add event listener to the reset button
document.getElementById('reset').addEventListener('click', () => {
  // Reset the form fields
  nameInput.value = '';
  dateInput.value = '';
  genderSelect.value = '';
  messageTextarea.value = '';

  // Hide the info box
  infoBox.style.display = 'none';

  // Clear the info box text
  infoName.textContent = '';
  infoDate.textContent = '';
  infoGender.textContent = '';
  infoMessage.textContent = '';
});

//Add event listener to the submit button for userename
// Get the span element and the form field
const usernameSpan = document.getElementById('username');


// Add an event listener to the form submission
document.getElementById('myForm').addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent the default form submission behavior

  // Update the username span with the input value
  usernameSpan.textContent = nameInput.value;

  // You can also add additional logic here, such as displaying a success message or resetting the form
});

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('myForm');
  const usernameSpan = document.getElementById('username');
  const nameInput = document.getElementById('input-name');

  if (!form || !usernameSpan || !nameInput) {
    console.error('One or more elements not found in the HTML document');
    return;
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    try {
      usernameSpan.textContent = nameInput.value;
    } catch (error) {
      console.error('Error updating username span:', error);
    }
  });
});


// <!-- JavaScript to handle slider logic -->

  const sliderContainer = document.querySelector('.slider-container');
  const sliderNav = document.querySelector('.slider-nav');
  const slides = document.querySelectorAll('.slide');

  sliderNav.addEventListener('click', (e) => {
    if (e.target.tagName === 'LABEL') {
      const slideId = e.target.getAttribute('for');
      const slide = document.querySelector(`#${slideId}-content`);
      slides.forEach((slide) => slide.style.display = 'none');
      slide.style.display = 'block';
    }
  });
