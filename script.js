// Simple script to log form submissions
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const message = document.querySelector('#message').value;
    console.log(`Message from ${name} (${email}): ${message}`);
    alert('Thank you for your message!');
});
