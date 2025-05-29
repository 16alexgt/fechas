// Mostrar la navbar
fetch('navar.html')
.then(response => {
    if (!response.ok) {
        throw new Error('No se pudo cargar el navbar');
    }
    return response.text();
})
.then(data => {
    document.getElementById('navbar-placeholder').innerHTML = data;

    // Inicializar funcionalidades del navbar
    const toggler = document.getElementById('navbarToggler');
    const navbarCollapse = document.getElementById('navbarNav');
    
    if (toggler && navbarCollapse) {
        toggler.addEventListener('click', () => {
            if (navbarCollapse.classList.contains('show')) {
                $('#navbarNav').collapse('hide');
            } else {
                $('#navbarNav').collapse('show');
            }
        });
    }

    // Activar el item activo y cerrar el menú responsive
    const currentPath = window.location.pathname.split('/').pop(); // Obtener el nombre del archivo actual
    document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
        const linkPath = link.getAttribute('href'); // Obtener la ruta del enlace
        
        // Comparar la ruta del enlace con la ruta actual
        if (linkPath === currentPath) {
            link.parentElement.classList.add('active'); // Agregar clase active al elemento padre
        }
        
        link.addEventListener('click', function () {
            document.querySelectorAll('.navbar-nav .nav-item').forEach(item => item.classList.remove('active'));
            this.parentElement.classList.add('active');
            if (navbarCollapse.classList.contains('show')) {
                $('#navbarNav').collapse('hide');
            }
        });
    });
})
.catch(error => {
    console.error('Error al cargar el navbar:', error);
});


//enviar la informacion
$(document).ready(function() {
    $('#dateForm').on('submit', function(event) {
        event.preventDefault(); // Evitar el envío del formulario

        // Obtener la fecha ingresada
        const fechaIngresada = $('#fecha').val();
        const fecha = new Date(fechaIngresada + 'T12:00:00'); // Establecer la hora a mediodía

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
