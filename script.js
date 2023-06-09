// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function() {
  var signupOverlay = document.getElementById('signup-overlay');
  var loginOverlay = document.getElementById('login-overlay');

  // Show the sign-up overlay when the sign-up link is clicked
  var signupLink = document.getElementById('signup-link');
  signupLink.addEventListener('click', function(event) {
    event.preventDefault();
    signupOverlay.style.display = 'block';
    loginOverlay.style.display = 'none';
  });

  // Show the login overlay when the login link is clicked
  var loginLink = document.getElementById('login-link');
  loginLink.addEventListener('click', function(event) {
    event.preventDefault();
    signupOverlay.style.display = 'none';
    loginOverlay.style.display = 'block';
  });

  // Hide both overlays initially
  signupOverlay.style.display = 'none';
  loginOverlay.style.display = 'none';
});
