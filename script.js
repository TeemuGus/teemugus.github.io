// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function() {
  var loginOverlay = document.getElementById('login-overlay');

  // Hide the login overlay when the login form is submitted
  var loginForm = document.querySelector('#login-overlay form');
  loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form submission

    // Perform login validation and handle success/failure

    // Example: If login is successful, hide the overlay
    loginOverlay.style.display = 'none';
  });
});
