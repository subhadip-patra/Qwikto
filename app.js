// app.js
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('privacyLink').addEventListener('click', function (e) {
      e.preventDefault();
      // Load the modal content from external file
      fetch('privacy-modal.html')
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
          }
          return response.text();
        })
        .then(data => {
          document.getElementById('privacyModalContainer').innerHTML = data;
          // Trigger the modal
          let modal = new bootstrap.Modal(document.getElementById('privacyModal'));
          modal.show();
        })
        .catch(error => console.error('Error loading the modal:', error));
    });
  });