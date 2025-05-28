<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtener la fecha ingresada
    $fechaIngresada = $_POST['fecha'];
    
    // Convertir la fecha a un objeto DateTime
    $fecha = DateTime::createFromFormat('Y-m-d', $fechaIngresada);

    if ($fecha) {
        // Calcular las fechas
        $fecha100Dias = clone $fecha;
        $fecha100Dias->modify('+100 days');

        $fecha80Dias = clone $fecha;
        $fecha80Dias->modify('+85 days');

        $fechaParto = clone $fecha;
        $fechaParto->modify('+114 days');

        // Función para traducir días y meses a español
        function formatearFechaEnEspañol($fecha) {
            $dias = [
                'Sunday' => 'domingo',
                'Monday' => 'lunes',
                'Tuesday' => 'martes',
                'Wednesday' => 'miércoles',
                'Thursday' => 'jueves',
                'Friday' => 'viernes',
                'Saturday' => 'sábado'
            ];

            $meses = [
                'January' => 'enero',
                'February' => 'febrero',
                'March' => 'marzo',
                'April' => 'abril',
                'May' => 'mayo',
                'June' => 'junio',
                'July' => 'julio',
                'August' => 'agosto',
                'September' => 'septiembre',
                'October' => 'octubre',
                'November' => 'noviembre',
                'December' => 'diciembre'
            ];

            $diaSemana = $dias[$fecha->format('l')];
            $diaMes = $fecha->format('d');
            $mes = $meses[$fecha->format('F')];
            $año = $fecha->format('Y');

            return "$diaSemana, $diaMes de $mes de $año";
        }

        // Mostrar los resultados
        echo '<li class="list-group-item result-item">Fecha Purga 100 días: ' . formatearFechaEnEspañol($fecha100Dias) . '</li>';
        echo '<li class="list-group-item result-item">Fecha Coli: ' . formatearFechaEnEspañol($fecha80Dias) . '</li>';
        echo '<li class="list-group-item result-item">Fecha de parto: ' . formatearFechaEnEspañol($fechaParto) . '</li>';
    } else {
        echo '<li class="list-group-item list-group-item-danger">La fecha ingresada no es válida.</li>';
    }
}
?>
