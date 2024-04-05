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

const botonGuardarFactura = document.querySelector("#GuardarFactura");
const mensajes = document.querySelector("#mensajes");
//crear una factura
botonGuardarFactura.addEventListener("click", () => {
    const idCliente = document.querySelector("#cliente").value;
    const idFactura = document.querySelector("#id").value;
    const direccion = document.querySelector("#direccion").value;
    const fecha = document.querySelector("#fecha").value;
    const referenciaPago = document.querySelector("#referencia").value;
    const fechaVencimiento = document.querySelector("#fecha_vencimiento").value;
    const servicio = document.querySelector("#servicio").value;
    const cantidad = document.querySelector("#cantidad").value;
    const precio = document.querySelector("#precio").value;
    const impuesto = document.querySelector("#impuesto").value;
    const total = document.querySelector("#total").value;
    // Enviar datos al servidor
    const url = "http://localhost:4000/api/v1/facturas";
    fetch(url, {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            idCliente: idCliente,
            idFactura: idFactura,
            direccion: direccion,
            fecha: fecha,
            referenciaPago: referenciaPago,
            fechaVencimiento: fechaVencimiento,
            servicio: servicio,
            cantidad: cantidad,
            precio: precio,
            impuesto: impuesto,
            total: total
        })
    })
    .then((res) => res.json())
    .then((mensaje) => {
        mensajes.innerHTML = "Factura creada correctamente.";
        setTimeout(() => {
            location.reload(); // Refresca la página después de 3 segundos
        }, 3000);
    })
    .catch((error) => {
        mensajes.innerHTML = "Error al crear la factura: " + error;
    });
});

//obtener las facturas

function obtenerTodasLasFacturas() {
    fetch('http://localhost:4000/api/v1/facturas')
      .then(response => {
        if (!response.ok) {
          throw new Error('Error al obtener las facturas');
        }
        return response.json();
      })
      .then(data => {
        console.log('Facturas obtenidas:', data);
        // Aquí puedes realizar acciones adicionales con los datos de las facturas, si es necesario
      })
      .catch(error => {
        console.error('Error al obtener las facturas:', error);
      });
  }


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

obtenerTodasLasFacturas();
  
// Actualizar una factura
function actualizarFactura(id, datosActualizados) {
    fetch(`http://localhost:4000/api/v1/facturas/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datosActualizados)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Error al actualizar la factura');
        }
        return response.json();
    })
    .then(data => {
        console.log('Factura actualizada:', data);
        // Aquí puedes realizar acciones adicionales después de la actualización, si es necesario
    })
    .catch(error => {
        console.error('Error:', error);
    });
}


// Borrar una factura
function borrarFactura(id) {
    fetch(`http://localhost:4000/api/v1/facturas/${id}`, {
        method: 'DELETE'
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Error al borrar la factura');}
        });

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
//document.addEventListener('DOMContentLoaded', mostrarBotonesFactura);

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

//         console.log('Factura borrada correctamente');
//         // Aquí puedes realizar acciones adicionales después de borrar la factura, si es necesario
//     })
//     .catch(error => {
//         console.error('Error:', error);
//     });
// }





// Agregar eventos de entrada para calcular el total automáticamente
cantidadInput.addEventListener('input', calcularTotal);
precioInput.addEventListener('input', calcularTotal);
impuestoInput.addEventListener('input', calcularTotal);


const botonGuardarFactura = document.querySelector("#GuardarFactura");
const mensajes = document.querySelector("#mensajes");
//crear una factura
botonGuardarFactura.addEventListener("click", () => {
   const idCliente = document.querySelector("#cliente").value;
   const idFactura = document.querySelector("#id").value;
   const direccion = document.querySelector("#direccion").value;
   const fecha = document.querySelector("#fecha").value;
   const referenciaPago = document.querySelector("#referencia").value;
   const fechaVencimiento = document.querySelector("#fecha_vencimiento").value;
   const servicio = document.querySelector("#servicio").value;
   const cantidad = document.querySelector("#cantidad").value;
   const precio = document.querySelector("#precio").value;
   const impuesto = document.querySelector("#impuesto").value;
   const total = document.querySelector("#total").value;
   // Enviar datos al servidor
   const url = "http://localhost:4000/api/v1/facturas";
   fetch(url, {
       method: "post",
       headers: { "Content-Type": "application/json" },
       body: JSON.stringify({
           idCliente: idCliente,
           idFactura: idFactura,
           direccion: direccion,
           fecha: fecha,
           referenciaPago: referenciaPago,
           fechaVencimiento: fechaVencimiento,
           servicio: servicio,
           cantidad: cantidad,
           precio: precio,
           impuesto: impuesto,
           total: total
        })
    })
    .then((res) => res.json())
    .then((mensaje) => {
        mensajes.innerHTML = "Factura creada correctamente.";
        setTimeout(() => {
            location.reload(); // Refresca la página después de 3 segundos
        }, 3000);
    })
    .catch((error) => {
        mensajes.innerHTML = "Error al crear la factura: " + error;
    });
 });
 
// Obtener los elementos del formulario
const cantidadInput = document.getElementById('cantidad');
const precioInput = document.getElementById('precio');
const impuestoInput = document.getElementById('impuesto');
const totalInput = document.getElementById('total');

// Calcular el total
function calcularTotal() {
  const cantidad = parseFloat(cantidadInput.value) || 0;
  const precio = parseFloat(precioInput.value) || 0;
  const impuesto = parseFloat(impuestoInput.value) || 0;

  const total = (cantidad * precio) + impuesto;
  totalInput.value = total.toFixed(2); // Redondear a 2 decimales
}


        



    



   
    