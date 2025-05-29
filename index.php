<?php include 'recursos.html'; ?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculadora de Fechas para la Granja</title>
    
</head>
<body>

    <!-- navar -->
     <?php include 'navar.html'; ?>

    <div class="container">
        <!-- Cerdo -->
        <div class="piggy-wrapper">
            <div class="piggy-wrap">
                <div class="piggy"> 
                    <div class="nose"></div>
                    <div class="mouth"></div>
                    <div class="ear"></div>
                    <div class="tail">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div class="eye"></div>
                    <div class="hole"></div>
                </div>
            </div>
            <div class="legs"></div>
            <div class="legs back"></div>
        </div>

        <!-- consejos -->
        <div class="consejos" id="consejos">
            
            <div class="row">
                <div class="col-md-6">
                    <div class="card">
                        <img src="img/cerdos precebo.jpg"  class="card-img-top">
                        <div class="card__content">
                            <b class="card__description">Mantén un ambiente limpio y seco en el corral para prevenir enfermedades en los cerdos.</b>
                        </div>
                    </div>
                </div>

                <div class="col-md-6">
                    <div class="card">
                        <img src="img/comida.jpg"  class="card-img-top">
                        <div class="card__content">
                            <b class="card__description">Proporciona una dieta balanceada y adecuada para asegurar el crecimiento saludable de los cerdos.</b>
                        </div>
                    </div>
                </div>

                <div class="col-md-6">
                    <div class="card">
                        <img src="img/vacuna.jpg"  class="card-img-top">
                        <div class="card__content">
                            <b class="card__description">Realiza chequeos veterinarios regulares para detectar y tratar enfermedades a tiempo.</b>
                        </div>
                    </div>
                </div>

                <div class="col-md-6">
                    <div class="card">
                        <img src="img/limpieza.jpg"  class="card-img-top">
                        <div class="card__content">
                            <b class="card__description">Realiza una limpieza regular de los corrales y áreas de alimentación para evitar la acumulación de desechos.</b>
                        </div>
                    </div>
                </div>
            </div>
        </div>

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

        <br><br>

        <div class="footer" id="footer">
            <p>&copy; 2025 Calculadora de Fechas para la Granja</p>
        </div>

    </div>

    <script>
        // Marcar opción activa
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
    </script>

</body>
</html>
