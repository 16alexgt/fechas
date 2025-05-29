<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculadora de Fechas para la Granja</title>
    
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
    <link rel="stylesheet" href="estilos.css">
    
</head>
<body>
    <!-- navar -->
     <?php include 'navar.html'; ?>
     
    <div class="container">
        <h1><i class="fas fa-piggy-bank"></i> Calculadora de Fechas</h1>

        <form id="dateForm">
            <div class="form-group">
                <label for="fecha">Ingrese una fecha:</label>
                <input type="date" id="fecha" name="fecha" class="form-control" required>
            </div>
            <button type="submit" class="btn btn-primary btn-block">Calcular</button>
        </form>

        <!-- Modal -->
        <div class="modal fade" id="resultModal" tabindex="-1" role="dialog" aria-labelledby="resultModalLabel" aria-hidden="true" data-backdrop="static" data-keyboard="false">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="resultModalLabel">Resultados</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <ul class="list-group" id="resultList">
                            <!-- Resultados se insertarán aquí -->
                        </ul>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="footer">
            <p>&copy; 2025 Calculadora de Fechas para la Granja</p>
        </div>
    </div>

    <!-- Incluir Bootstrap JS y dependencias (opcional) -->
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <script src="funcionalidad.js"></script>


</body>
</html>