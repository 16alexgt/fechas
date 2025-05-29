//mostrar la navar
fetch('navar.html')
.then(response => {
    if (!response.ok) {
    throw new Error('No se pudo cargar el navbar');
    }
    return response.text();
})
.then(data => {
    document.getElementById('navbar-placeholder').innerHTML = data;

    // Inicializar funcionalidades del navbar, por ejemplo toggler personalizado, active links, etc.
    // Puedes copiar aquí el código JS que controla el navbar sincronizado

    // Ejemplo para el toggler personalizado:
    const toggler = document.getElementById('navbarToggler');
    const navbarCollapse = document.getElementById('navbarNav');
    if(toggler && navbarCollapse) {
    toggler.addEventListener('click', () => {
        if(navbarCollapse.classList.contains('show')) {
        $('#navbarNav').collapse('hide');
        } else {
        $('#navbarNav').collapse('show');
        }
    });
    }

    // Ejemplo para activar item activo y cerrar menu responsive
    document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
    link.addEventListener('click', function () {
        document.querySelectorAll('.navbar-nav .nav-item').forEach(item => item.classList.remove('active'));
        this.parentElement.classList.add('active');
        if(navbarCollapse.classList.contains('show')) {
        $('#navbarNav').collapse('hide');
        }
    });
    });

})