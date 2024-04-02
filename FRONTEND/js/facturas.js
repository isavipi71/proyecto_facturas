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
    const facturasLink = document.getElementById('facturas');

    //  evento de clic al enlace de Facturas
    facturasLink.addEventListener('click', function (event) {
        event.preventDefault(); 
        cargarYMostrarBotonesFactura(); // Mostrar los botones de añadir factura y ver facturas creadas
    });
});

// Función para cargar el contenido de facturas.html y mostrar los botones
function cargarYMostrarBotonesFactura() {
    fetch('facturas.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('seccion_derecha').innerHTML = data;
            cargarFacturasEventListeners(); // Agregar event listeners para los botones de facturas
        });
}
// Event listeners de facturas
function cargarFacturasEventListeners() {
    // Evento de clic al botón "Crear Factura" para mostrar el formulario de creación de factura
    document.getElementById('crear_factura').addEventListener('click', function (event) {
        event.preventDefault();
        mostrarFormularioFactura();
    });

    // Evento de clic al botón "Ver Facturas" para mostrar las facturas creadas
    document.getElementById('ver_facturas').addEventListener('click', function (event) {
        event.preventDefault();
        mostrarFacturas();
    });
}

// Función para mostrar los botones de factura
function mostrarBotonesFactura() {
     const seccionDerecha = document.getElementById("seccion_derecha");
    seccionDerecha.innerHTML = "";
    
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
    // event listeners a los botones
    cargarFacturasEventListeners();
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

// Funcion para guardar la factura


function guardarFactura() {
    console.log("Guardar factura");

    const id = document.getElementById('id').value;
    const cliente = document.getElementById('cliente').value;
   
}

// Función para ver las facturas existentes
function verFacturas() {
   
console.log("Mostrar facturas existentes");

}

// Cuando el DOM esté cargado, mostrar los botones de factura
document.addEventListener('DOMContentLoaded', mostrarBotonesFactura);

// Event listeners de facturas
  
//  document.addEventListener('DOMContentLoaded', function() {
//      // Obtener referencia al botón "Añadir Factura"
//     const agregarFacturaBtn = document.getElementById('agregar-factura-btn');
//         if (agregarFacturaBtn) {
//             agregarFacturaBtn.addEventListener('click', mostrarFormularioFactura);
//         } else {
//             console.error('No se encontró el botón "Añadir Factura" en el DOM.');
//         }
// // Obtener referencia al botón "Guardar"
// const guardarBtn = document.getElementById('agregar_factura');
// if (guardarBtn) {
//     guardarBtn.addEventListener('click', guardarFactura);
// } else {
//     console.error('No se encontró el botón "Guardar" en el DOM.');
// }

//  // Obtener referencia al botón "Ver Facturas"
//         const verFacturasBtn = document.getElementById('ver-facturas-btn');
//         if (verFacturasBtn) {
//             verFacturasBtn.addEventListener('click', verFacturas);
//         } else {
//             console.error('No se encontró el botón "Ver Facturas" en el DOM.');
//         }
//     });  






   
    