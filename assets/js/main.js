document.addEventListener("DOMContentLoaded", () => {
<<<<<<< HEAD
    
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
=======
    // 1. Get the base path of the current page
    // If the path is '/circuit2code/python/index.html', base will be '/circuit2code/'
    const pathArray = window.location.pathname.split('/');
    const basePath = '/' + pathArray[1] + '/'; 

    // 2. Load the components using the calculated base path
    const loadComponent = (path, elementId) => {
        fetch(basePath + path)
            .then(response => {
                if (!response.ok) throw new Error(`Could not load ${path}`);
                return response.text();
            })
            .then(data => {
                document.getElementById(elementId).innerHTML = data;
            })
            .catch(error => console.error(error));
    };

    loadComponent('assets/components/sidebar.html', 'sidebar-container');
    loadComponent('assets/components/navbar.html', 'navbar-container');
});
>>>>>>> 06f4d33803a3ac5e3464829386a7c4068e48a5c7
