// Seleccionar la opción "Calculadora Fechas"
const calculadoraLink = document.querySelector('.navbar-nav .nav-link[href="calculadora.html"]');

if (calculadoraLink) {
    // Simular un clic en el enlace
    calculadoraLink.click();
}

// Agregar el evento de clic a todos los enlaces del menú
document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
    link.addEventListener('click', function () {
        // Quitar active de todas
        document.querySelectorAll('.navbar-nav .nav-item').forEach(item => item.classList.remove('active'));
        // Poner active al padre del link clickeado
        this.parentElement.classList.add('active');
        // Cerrar menú responsive si está abierto
        const navbarCollapse = document.getElementById('navbarNav');
        if (navbarCollapse.classList.contains('show')) {
            // Usamos jQuery collapse para cerrar
            $('#navbarNav').collapse('hide');
        }
    });
});

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

});

//enviar la informacion
$(document).ready(function() {
    $('#dateForm').on('submit', function(event) {
        event.preventDefault(); // Evitar el envío del formulario

        // Obtener la fecha ingresada
        const fechaIngresada = $('#fecha').val();
        const fecha = new Date(fechaIngresada);

        if (!isNaN(fecha.getTime())) {
            // Calcular las fechas
            const fechaRepeticion = new Date(fecha);
            fechaRepeticion.setDate(fechaRepeticion.getDate() + 21);

            const fecha100Dias = new Date(fecha);
            fecha100Dias.setDate(fecha100Dias.getDate() + 100);

            const fecha80Dias = new Date(fecha);
            fecha80Dias.setDate(fecha80Dias.getDate() + 85);

            const fechaParto = new Date(fecha);
            fechaParto.setDate(fechaParto.getDate() + 114);

            // Función para formatear la fecha en español
            function formatearFechaEnEspañol(fecha) {
                const dias = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];
                const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];

                const diaSemana = dias[fecha.getDay()];
                const diaMes = fecha.getDate();
                const mes = meses[fecha.getMonth()];
                const año = fecha.getFullYear();

                return `${diaSemana}, ${diaMes} de ${mes} de ${año}`;
            }

            // Mostrar los resultados en el modal
            $('#resultList').html('');
            $('#resultList').append(`<li class="list-group-item result-item">Fecha posible repetición: ${formatearFechaEnEspañol(fechaRepeticion)}</li>`);
            $('#resultList').append(`<li class="list-group-item result-item">Fecha Purga 100 días: ${formatearFechaEnEspañol(fecha100Dias)}</li>`);
            $('#resultList').append(`<li class="list-group-item result-item">Fecha Coli: ${formatearFechaEnEspañol(fecha80Dias)}</li>`);
            $('#resultList').append(`<li class="list-group-item result-item">Fecha de parto: ${formatearFechaEnEspañol(fechaParto)}</li>`);
            $('#resultModalLabel').text(`Resultados - ${formatearFechaEnEspañol(fecha)}`);
            $('#resultModal').modal('show');
        } else {
            alert('La fecha ingresada no es válida.');
        }
    });
});