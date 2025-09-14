// Send request to backend.php with current URL
fetch('backend.php?url=' + encodeURIComponent(window.location.href), {
    method: 'GET',
    credentials: 'same-origin'
}).catch(error => console.error('Error:', error)); 