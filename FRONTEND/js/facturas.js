function toggleMenu() {
    var seccionIzquierda = document.getElementById("seccion_izquierda");
    if (seccionIzquierda.style.display === "none") {
        seccionIzquierda.style.display = "flex";
    } else {
        seccionIzquierda.style.display = "none";
    }
}

document.addEventListener('DOMContentLoaded', function () {
// Obtener referencia al enlace de Facturas
    const facturasLink = document.querySelector('.contenedor_menu a[href="facturas.html');
    //  evento de clic al enlace de Facturas
    facturasLink.addEventListener('click', function (event) {
        event.preventDefault(); // Prevenir el comportamiento predeterminado del enlace
        mostrarBotonesFactura(); // Mostrar los botones de añadir factura y ver facturas creadas
    });

// Función para mostrar los botones de factura
function mostrarBotonesFactura() {
     const seccionDerecha = document.getElementById("seccion_derecha");
        // seccionDerecha.innerHTML = "";
    if (!seccionDerecha.querySelector('#facturas-buttons')) {
    const facturasButtonsDiv = document.createElement('div');
    facturasButtonsDiv.id = 'facturas-buttons';

        // Botón de añadir factura
    const agregarFacturaBtn = document.createElement('button');
    agregarFacturaBtn.id = 'agregar-factura-btn';
    agregarFacturaBtn.textContent = 'Nuevo';
    agregarFacturaBtn.addEventListener('click', mostrarFormularioFactura);
    facturasButtonsDiv.appendChild(agregarFacturaBtn);

        // Botón de ver facturas creadas
    const verFacturasBtn = document.createElement('button');
    verFacturasBtn.id = 'ver-facturas-btn';
    verFacturasBtn.textContent = 'Facturas';
    facturasButtonsDiv.appendChild(verFacturasBtn);

        // Agregar los botones al DOM
    seccionDerecha.appendChild(facturasButtonsDiv);
    }
}

// Función para mostrar el formulario de agregar factura
function mostrarFormularioFactura() {
    const facturaForm = document.getElementById("formulario-factura");
    if (facturaForm) {
        facturaForm.style.display = 'block'; // Mostrar el formulario
    } else {
     console.error("El elemento formulario-factura no se encontró en el DOM.");
        }
    }
// Función para ver las facturas existentes
function verFacturas() {
        //  lógica para mostrar las facturas existentes
    console.log("Mostrar facturas existentes");
    }
   
 document.addEventListener('DOMContentLoaded', function() {
     // Obtener referencia al botón "Añadir Factura"
    const agregarFacturaBtn = document.getElementById('agregar-factura-btn');
    // Agregar evento de clic al botón "Añadir Factura" para mostrar el formulario
        if (agregarFacturaBtn) {
            agregarFacturaBtn.addEventListener('click', mostrarFormularioFactura);
        } else {
            console.error('No se encontró el botón "Añadir Factura" en el DOM.');
        }
        // Obtener referencia al botón "Ver Facturas"
        const verFacturasBtn = document.getElementById('ver-facturas-btn');
        // Agregar evento de clic al botón "Ver Facturas" para ver las facturas existentes
        if (verFacturasBtn) {
            verFacturasBtn.addEventListener('click', verFacturas);
        } else {
            console.error('No se encontró el botón "Ver Facturas" en el DOM.');
        }
    });  

});



   
    