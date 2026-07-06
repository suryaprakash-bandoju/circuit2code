document.addEventListener("DOMContentLoaded", () => {
    
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