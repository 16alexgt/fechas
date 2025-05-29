// Función para cargar un archivo CSS
function cargarCSS(url) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = url;
    document.head.appendChild(link);
}

// Función para cargar un archivo JS
function cargarJS(url) {
    const script = document.createElement('script');
    script.src = url;
    script.async = false; // Asegura que se cargue en el orden correcto
    document.body.appendChild(script);
}

// Cargar los recursos
cargarCSS('https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css');
cargarCSS('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css');
cargarCSS('estilos.css');

cargarJS('https://code.jquery.com/jquery-3.5.1.min.js');
cargarJS('https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js');
cargarJS('https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js');
cargarJS('funcionalidad.js');
