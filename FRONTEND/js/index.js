<<<<<<< HEAD
<<<<<<< HEAD
document.addEventListener('DOMContentLoaded', function () {
  // Obtener referencia al enlace de Facturas
  const facturasLink = document.getElementById('facturas');
  //  evento de clic al enlace de Facturas
  facturasLink.addEventListener('click', function (event) {
      event.preventDefault(); 
      cargarYMostrarBotonesFactura(); // función para cargar y mostrar los botones de facturas
  });
});


//Función para cargar el contenido de facturas.html y mostrar los botones
function cargarYMostrarBotonesFactura() {
  fetch('facturas.html')
      .then(response => response.text())
      .then(data => {
          document.getElementById('seccion_derecha').innerHTML = data;
          mostrarBotonesFactura(); // función para mostrar los botones de facturas
      });
}

// Función para crear y mostrar los botones de factura
function mostrarBotonesFactura() {
  const seccionDerecha = document.getElementById("seccion_derecha");
  // Limpiar la sección antes de agregar los botones
  seccionDerecha.innerHTML = "";

  const facturasButtonsDiv = document.createElement('div');
  facturasButtonsDiv.id = 'facturas-buttons';

  // Botón de crear factura
  const crearFacturaBtn = document.createElement('button');
  crearFacturaBtn.id = 'crear_factura';
  crearFacturaBtn.textContent = 'Nuevo';
  facturasButtonsDiv.appendChild(crearFacturaBtn);

  // Botón de ver facturas creadas
  const verFacturasBtn = document.createElement('button');
  verFacturasBtn.id = 'ver_facturas';
  verFacturasBtn.textContent = 'Facturas';
  facturasButtonsDiv.appendChild(verFacturasBtn);

  // Agregar los botones al DOM
  seccionDerecha.appendChild(facturasButtonsDiv);
}

// Función para mostrar el formulario de agregar factura
function mostrarFormularioFactura() {
  const formularioFactura = document.getElementById("formulario-factura");
  if (formularioFactura) {
      formularioFactura.style.display = 'block'; // Mostrar el formulario
  } else {
      console.error("El elemento formulario-factura no se encontró en el DOM.");
  }
}

// Cuando el DOM esté cargado, cargar y mostrar los botones de factura
document.addEventListener('DOMContentLoaded', cargarYMostrarBotonesFactura);
=======
=======
 
>>>>>>> a02aa4b (commitabril4)
//  document.addEventListener('DOMContentLoaded', function() {
//   const enlaceFacturas = document.getElementById('facturas'); 
//   const btnAgregarFactura = document.getElementById('agregar_factura');
//   const btnCabecera = document.querySelector('.btn-cabecera');
//   const contenedorFacturasCreadas = document.getElementById('contenedorFacturasCreadas');
//   const formFactura = document.getElementById('formFactura');
        
//   enlaceFacturas.addEventListener('click', function() {
//     // Mostrar botones de facturas y ocultar otros
//     btnCabecera.classList.remove('hide');
//     formFactura.classList.add('hide');
//   });
  
// btnAgregarFactura.addEventListener('click', function() {
// // Mostrar formulario y ocultar contenedor de facturas creadas
//   btnCabecera.classList.add('hide');
//   formFactura.classList.remove('hide');
//   });
//  });
<<<<<<< HEAD
        
>>>>>>> 4a37cf8 (commit)
=======
       
>>>>>>> a02aa4b (commitabril4)
