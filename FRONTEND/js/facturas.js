
//FUNCIONES PARA MOSTRAR LOS BOTONES, FORM, Y DIV PARA FACTURAS GUARDADAS EN EL INDEX.HTML
function mostrarBtnFactura () { //MUESTRA LOS BOTONES EN LA CABECERA EN EL LADO DERECHO DEL INDEX.HTML
 const btnCabecera = document.getElementById("btn-cabecera"); //obtiene el div donde se encuentran los botones
 btnCabecera.innerHTML = `
 <button type="button" id="agregar_factura" onclick="mostrarForm()"> Nueva Factura</button>
 <button type="button" id="ver-facturas">Facturas</button>
 <button type="button" id="eliminarFactura"><i class="fa-solid fa-trash-can"></i></button>
 <button type="button" id="editarFactura"> <i class="fa-regular fa-square-pen"></i></button>
 <button type="button" id="importar"> <i class="fa-solid fa-gear"></i></button>
 `;
}

document.addEventListener('DOMContentLoaded', function() {
  //click para mostar el formulario
document.getElementById('agregar_factura').addEventListener('click', mostrarForm);
});


function mostrarForm(){// MUESTRA EL FORMULARIO CUANDO SE HACE CLICK EN NUEVO
    const formFactura = document.getElementById("formFactura");
    formFactura.innerHTML = ` 
    
    <form>
    <div class="factura-columna">
      <label for="idFactura">Factura Número</label>
      <input type="number"id="idFactura">
    </div>

    <div class="encabezado">
      <div class="datos_cliente">
        <div class="cliente">
          <label  for="cliente">Cliente:</label>
          <select  id="cliente" name="cliente">
            <option selected > Click y selecciona el cliente</option>
          </select>
      </div>

      <div class="direccion">
        <label  for="direccion">Direccion:</label>
        <input  type="text"  id="direccion">
      </div>
      </div>
        <!-- //seccion derecha  -->
      <div class="datos_factura">
      <div class="fecha">
        <label for="fecha">Factura Fecha:</label>
        <input type="date" id="fecha" required>
      </div>

      <div class="referencia">
        <label   for="referencia">Referencia de Pago:</label>
        <input  type="text" id="referencia">
      </div>

      <div class="vencimiento">
        <label for="fecha_vencimiento">Fecha de vencimiento:</label>
        <input type="date" id="fecha_vencimiento"  required>
     </div>
     </div>
     </div>
     <!-- cuerpo de la factura -->
      <div class="detalleFactura">
        <span class="contenedor-encabezado" >Servicio</span>
        <span class="contenedor-encabezado" >Descripción</span>
        <span class="contenedor-encabezado" >Cantidad</span>
        <span class="contenedor-encabezado" >Precio</span>
        <span class="contenedor-encabezado">IVA %</span>
        </div>

        <div class="btn-agregarLinea"> <!-- crea el boton para agregar una linea -->
        <span id="agregarLinea"><i class="fa-solid fa-plus"></i> Agregar linea</span>
        </div>

        <div class="calculo">  <!--div para mostrar el calculo de la factura -->
        <div id="nuevosCampos"></div>
        <div class="total">
        <div>Base imponible : <span id="subtotal">0,00€</span></div>
        <div>IVA(21%): <span id="impuesto">0</span></div>
        <div>Total: <span id="total">0,00€</span></div>
        </div>
        </div>

      <div class="botones_guardarFactura"> <!-- div para los botones de guardar, imprimir y volver -->
        <button type="button" id="GuardarFactura" onclick="guardarFacturaCliente()">
          <i class="fa-solid fa-cloud-arrow-up"></i> Guardar
        </button>

        <button type="button" id="imprimir">
          <i class="fa-solid fa-print"></i>Imprimir
        </button>

        <button type="button" id="volver">
          <i class="fa-solid fa-arrow-rotate-left"></i>Volver
        </button>   
      </div>
    </form>
    <div id="mensajes"></div> <!--div para manejar los mensajes de error -->
    `;
// evento click al botón agregar línea
    document.getElementById('agregarLinea').addEventListener('click', agregarNuevaLinea);
}

// Función para agregar  campos de entrada al hacer click en agregar linea
function agregarNuevaLinea() {
  const nuevosCampos = document.getElementById('nuevosCampos');
  const nuevaLinea = document.createElement('div');
  nuevaLinea.classList.add('nuevaLinea');

  nuevaLinea.innerHTML = `
      <input type="text" id="servicio" placeholder="Servicio">
      <input type="text" id="descripcion" placeholder="Descripción">
      <input type="number" id="cantidad" placeholder="Cantidad">
      <input type="number" id="precio" placeholder="Precio">
      <input type="number" id= "impuesto" placeholder="Precio sin IVA %" onchange="calcularImporteTotal(this)">
  `;
  
  nuevosCampos.appendChild(nuevaLinea);
}
// Obtener el contenedor de las facturas creadas
const contenedorFacturasCreadas = document.getElementById("contenedorFacturasCreadas");

// Función para mostrar las facturas en el contenedor
function mostrarFacturas(facturas) {
  // Limpiar el contenedor
  contenedorFacturasCreadas.innerHTML = "";

  // Recorrer las facturas y crear elementos para mostrarlas
  facturas.forEach(factura => {
    const facturaElement = document.createElement("div");
    facturaElement.classList.add("factura");
    facturaElement.innerHTML = `
      <p>ID: ${factura.id}</p>
      <p>Cliente: ${factura.cliente}</p>
      <p>Fecha: ${factura.fecha}</p>
      <p>Referencia de Pago: ${factura.referenciaPago}</p>
      <p>Fecha de Vencimiento: ${factura.fechaVencimiento}</p>
      <p>Servicio: ${factura.servicio}</p>
      <p>Cantidad: ${factura.cantidad}</p>
      <p>Precio: ${factura.precio}</p>
      <p>Impuesto: ${factura.impuesto}</p>
      <p>Total: ${factura.total}</p>
    `;

    // Agregar la factura al contenedor
    contenedorFacturasCreadas.appendChild(facturaElement);
  });
}

// Función para guardar la factura
function guardarFacturaCliente() {
  // Obtener los valores de los campos
  const idFactura = document.getElementById("idFactura").value;
  const idCliente = document.getElementById("cliente").value;
  const fecha = document.getElementById("fecha").value;
  const referenciaPago = document.getElementById("referencia").value;
  const fechaVencimiento = document.getElementById("fecha_vencimiento").value;
  const servicio = document.getElementById("servicio").value;
  const cantidad = document.getElementById("cantidad").value;
  const precio = document.getElementById("precio").value;
  const impuesto = document.getElementById("impuesto").value;
  const total = document.getElementById("total").value;
  console.log({
    id:  idFactura,
    clientes_id: idCliente,
    Fecha_factura: fecha,
    Referencia_pago: referenciaPago,
    Fecha_vencimiento: fechaVencimiento,
    Servicio: servicio,
    Cantidad: cantidad,
    Precio: precio,
    Impuesto: impuesto,
    Total: total
  });

  // Comprobar que los campos no estén vacíos
  if (
    fecha.length === 0 ||
    referenciaPago.length === 0 ||
    fechaVencimiento.length === 0 ||
    servicio.length === 0 ||
    cantidad === "" ||
    precio === "" ||
    impuesto === "" ||
    total === ""
  ) {
    // Mostrar mensaje de error
    mensajes.innerHTML = "Por favor, complete todos los campos.";
    return;
  }

  // Enviar datos al servidor
  const url = "http://localhost:4000/api/v1/facturas/";
  fetch(url, {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      id: idFactura,
      clientes_id: idCliente,
      Fecha_factura: fecha,
      Referencia_pago: referenciaPago,
      Fecha_vencimiento: fechaVencimiento,
      Servicio: servicio,
      Cantidad: cantidad,
      Precio: precio,
      Impuesto: impuesto,
      Total: total
    })
  })
    .then((res) => res.json())
    .then((factura) => {
      // Mostrar la factura en la interfaz
      const facturaElement = document.createElement("div");
      facturaElement.classList.add("factura");
      facturaElement.innerHTML = `
        <p>ID: ${factura.id}</p>
        <p>Cliente: ${factura.cliente}</p>
        <p>Fecha: ${factura.fecha}</p>
        <p>Referencia de Pago: ${factura.referenciaPago}</p>
        <p>Fecha de Vencimiento: ${factura.fechaVencimiento}</p>
        <p>Servicio: ${factura.servicio}</p>
        <p>Cantidad: ${factura.cantidad}</p>
        <p>Precio: ${factura.precio}</p>
        <p>Impuesto: ${factura.impuesto}</p>
        <p>Total: ${factura.total}</p>
        

      `;

      // Agregar la factura al contenedor
      contenedorFacturasCreadas.appendChild(facturaElement);

      // Limpiar los campos del formulario
      document.getElementById("idFactura").value = "";
      document.getElementById("cliente").value = "";
      document.getElementById("fecha").value = "";
      document.getElementById("referencia").value = "";
      document.getElementById("fecha_vencimiento").value = "";
      document.getElementById("servicio").value = "";
      document.getElementById("cantidad").value = "";
      document.getElementById("precio").value = "";
      document.getElementById("impuesto").value = "";
      document.getElementById("total").value = "";

      // Mostrar mensaje de éxito
      mensajes.innerHTML = "Factura guardada correctamente.";
    })
    .catch((error) => {
      // Mostrar mensaje de error
      mensajes.innerHTML = "Error al guardar la factura.";
    });
}

 
  // Función para calcular el importe total de la línea
  function calcularImporteTotal(input) {
    const cantidad = parseFloat(input.parentElement.querySelector('input:nth-child(3)').value);
    const precio = parseFloat(input.parentElement.querySelector('input:nth-child(4)').value);
    const iva = parseFloat(input.value);
    const importeTotal = (cantidad * precio) * (1 + iva / 100);

    // Mostrar el importe total en la interfaz
    input.parentElement.querySelector('input:nth-child(5)').value = importeTotal.toFixed(2);
  
    // Recalcular el subtotal, el impuesto y el total
    calcularSubtotal();
  } 
// Función para calcular el subtotal, el impuesto y el total
function calcularSubtotal() {
  let subtotal = 0;
  const importes = document.querySelectorAll('.nuevaLinea input:nth-child(5)');
  importes.forEach(importe => {
    subtotal += parseFloat(importe.value);
  });

  const impuesto = subtotal * 0.21;
  const total = subtotal + impuesto;

  // Mostrar el subtotal, el impuesto y el total en la interfaz
  document.getElementById('subtotal').textContent = subtotal.toFixed(2);
  document.getElementById('impuesto').textContent = impuesto.toFixed(2);
  document.getElementById('total').textContent = total.toFixed(2);
}






  
  
// Evento click del botón Imprimir
// document.getElementById('imprimir').addEventListener('click', () => {
//   // Aquí puedes agregar el código para generar la factura en formato HTML
//   const facturaHTML = generarFacturaHTML(); // Esta función debería retornar el HTML de la factura

//   // Crear un objeto jsPDF
//   const pdf = new jsPDF();

//   // Agregar el contenido HTML a la página del PDF
//   pdf.html(facturaHTML, {
//       callback: function (pdf) {
//           // Guardar o mostrar el PDF
//           pdf.save('factura.pdf'); // Guarda el PDF con el nombre 'factura.pdf'
//           // pdf.output('dataurlnewwindow'); // Abre una nueva ventana con el PDF
//       }
//   });
// });
// // Función para generar el HTML de la factura
// function generarFacturaHTML() {
//   // Aquí deberías generar el HTML de la factura utilizando los datos de la factura guardada en la interfaz
//   // Puedes recorrer los elementos de la factura y generar el HTML correspondiente
//   // Retorna el HTML generado
// }



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


