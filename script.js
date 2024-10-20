// Load Navbar
fetch('navbar.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('navbar-placeholder').innerHTML = data;
  });

// Load Footer
fetch('footer.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('footer-placeholder').innerHTML = data;
  });
