document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Inject the Sidebar
    fetch('./assets/components/sidebar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('sidebar-container').innerHTML = data;
        })
        .catch(error => console.error('Error loading sidebar:', error));

    // 2. Inject the Navbar
    fetch('./assets/components/navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar-container').innerHTML = data;
        })
        .catch(error => console.error('Error loading navbar:', error));
});