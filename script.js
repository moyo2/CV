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



// Get all the links with an ID starting with 'nav-' (the navigation links)
const navLinks = document.querySelectorAll('a[href^="#nav-"]');

// Loop through each navigation link
navLinks.forEach(function(link) {
  // Add a click event listener to the link
  link.addEventListener('click', function(event) {
    // Prevent the default link behavior
    event.preventDefault();

    // Get the section ID from the link href attribute (excluding the leading '#nav-')
    const sectionId = this.getAttribute('href').slice(5);

    // Scroll to the corresponding section using a smooth scroll effect
    document.getElementById(sectionId).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

