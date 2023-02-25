// Change the background color of the page when a button is clicked
const changeBackgroundColor = () => {
  document.body.style.backgroundColor = 'orange';
}

const button = document.getElementById('change-color-button');
button.addEventListener('click', changeBackgroundColor);

// Show and hide a section when a button is clicked
const toggleSection = () => {
  const section = document.getElementById('my-section');
  if (section.style.display === 'none') {
    section.style.display = 'block';
  } else {
    section.style.display = 'none';
  }
}

const toggleButton = document.getElementById('toggle-section-button');
toggleButton.addEventListener('click', toggleSection);

// Show a message when the user hovers over an element
const showMessage = (event) => {
  const message = document.createElement('div');
  message.textContent = 'Hello!';
  message.style.position = 'absolute';
  message.style.top = `${event.clientY}px`;
  message.style.left = `${event.clientX}px`;
  document.body.appendChild(message);
}

const element = document.getElementById('hover-element');
element.addEventListener('mouseover', showMessage);

// Get all navigation links
const navLinks = document.querySelectorAll('.nav-link');

// Attach click event listener to each navigation link
navLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault(); // prevent default link behavior

    // Get the ID of the section to scroll to
    const sectionId = link.getAttribute('href');

    // Use smooth scrolling to scroll to the section
    document.querySelector(sectionId).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
