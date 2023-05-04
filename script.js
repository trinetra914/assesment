// code for handling the contact form submission
const form = document.getElementById('contact-form');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // prevent the form from being submitted
  const formData = new FormData(form);

  // send the form data to the server
  fetch('/submit-form', {
    method: 'POST',
    body: formData
  })
  .then(response => {
    // handle the response from the server
    console.log(response);
    alert('Your message has been sent.');
  })
  .catch(error => {
    console.error(error);
    alert('There was an error sending your message. Please try again later.');
  });
});