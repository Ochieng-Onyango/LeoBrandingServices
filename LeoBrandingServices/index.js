// Add basic interactivity for the contact form
document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Thank you for reaching out! We will get back to you soon.');
});

// Add interactivity if needed, such as smooth scrolling
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      document.querySelector(link.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  
