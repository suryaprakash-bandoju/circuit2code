document.addEventListener("DOMContentLoaded", () => {
    
    // Change this to use the root path of your repository
    const repo = "/circuit2code"; 

    fetch(`${repo}/assets/components/sidebar.html`)
        .then(response => response.text())
        .then(data => {
            document.getElementById('sidebar-container').innerHTML = data;
        })
        .catch(error => console.error('Error loading sidebar:', error));

    fetch(`${repo}/assets/components/navbar.html`)
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar-container').innerHTML = data;
        })
        .catch(error => console.error('Error loading navbar:', error));
});
