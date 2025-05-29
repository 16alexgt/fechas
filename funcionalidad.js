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