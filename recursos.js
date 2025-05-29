// Función para cargar un archivo CSS
function cargarCSS(url) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = url;
    document.head.appendChild(link);
}

// Función para cargar un archivo JS
function cargarJS(url, callback) {
    const script = document.createElement('script');
    script.src = url;
    script.async = false;
    script.onload = callback; 
    document.body.appendChild(script);
}

// Cargar los recursos
cargarCSS('https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css');
cargarCSS('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css');
cargarCSS('estilos.css');

cargarJS('funcionalidad.js');
