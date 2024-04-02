//Función para cargar el contenido de facturas.html y mostrar los botones

function cargarYMostrarBotonesFactura() {
      fetch('facturas.html')
        .then(response => response.text())
        .then(data => {
          document.getElementById('seccion_derecha').innerHTML = data;
          mostrarBotonesFactura(); //  función para mostrar los botones de facturas
            });
    }

//evento de clic al enlace "Facturas" para cargar y mostrar los botones
    document.getElementById('facturas').addEventListener('click', function(event) {
        event.preventDefault(); // Evita el comportamiento predeterminado del enlace
        cargarYMostrarBotonesFactura(); // función para cargar y mostrar los botones de facturas
    });