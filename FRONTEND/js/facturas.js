
//FUNCIONES PARA MOSTRAR LOS BOTONES, FORM, Y DIV PARA FACTURAS GUARDADAS EN EL INDEX.HTML
function mostrarBtnFactura () { //MUESTRA LOS BOTONES EN LA CABECERA EN EL LADO DERECHO DEL INDEX.HTML
 const btnCabecera = document.getElementById("btn-cabecera");
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
//click para guardar la factura
document.getElementById('GuardarFactura').addEventListener('click', guardarFactura);
});


function mostrarForm(){// MUESTRA EL FORMULARIO CUANDO SE HACE CLICK EN NUEVO
    const formFactura = document.getElementById("formFactura");
    formFactura.innerHTML = ` 
    
    <form>
    <div class="factura-columna">
        <label class="form-label" for="id">Factura Número:</label>
        <input class="form-control" type="text" id="id">
        </div>

    <div class="encabezado">
      <div class="datos_cliente">
      <div class="cliente">
        <label class="form-label" for="cliente">Cliente:</label>
        <select class="form-select" id="cliente" name="cliente">
          <option selected > Click y selecciona el cliente</option>
        </select>
      </div>

      <div class="direccion">
        <label class="form-label" for="direccion">Direccion:</label>
        <input class="form-control" type="text"  id="direccion">
      </div>
      </div>
        <!-- //seccion derecha  -->
      <div class="datos_factura">
      <div class="fecha">
        <label class="form-label" for="fecha">Factura Fecha:</label>
        <input class="form-control" type="date" id="fecha" required>
      </div>

      <div class="referencia">
        <label class="form-label"   for="referencia">Referencia de Pago:</label>
        <input class="form-control" type="text" id="referencia">
      </div>

      <div class="vencimiento">
        <label class="form-label" for="fecha_vencimiento">Fecha de vencimiento:</label>
        <input class="form-control" type="date" id="fecha_vencimiento"  required>
     </div>
     </div>
     </div>
     <!-- //cuerpo de la factura -->
      <div class="detalleFactura">
        <span class="contenedor-encabezado"> Servicio</span>
        <span class="contenedor-encabezado">Descripción</span>
        <span class="contenedor-encabezado">Cantidad</span>
        <span class="contenedor-encabezado">Precio</span>
        <span class="contenedor-encabezado">IVA %</span>
        </div>

        <div class="btn-agregarLinea">
        <span id="agregarLinea"><i class="fa-solid fa-plus"></i> Agregar linea</span>
        </div>

        <div class="calculo">
        <div id="nuevosCampos"></div>
        <div class="total">
        <div>Base imponible : <span id="subtotal">0,00€</span></div>
        <div>IVA(21%): <span id="impuesto">0</span></div>
        <div>Total: <span id="total">0,00€</span></div>
        </div>
        </div>

      <div class="botones_guardarFactura">
        <button type="button" id="GuardarFactura">
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
    <div id="mensajes"></div>
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
      <input type="text" placeholder="Servicio">
      <input type="text" placeholder="Descripción">
      <input type="number" placeholder="Cantidad">
      <input type="number" placeholder="Precio">
      <input type="number" placeholder="Precio sin IVA %" onchange="calcularImporteTotal(this)">
  `;
  
  nuevosCampos.appendChild(nuevaLinea);
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
  

// Función para guardar la factura en la base de datos
function guardarFactura() {
   const mensajes = document.querySelector("#mensajes");

   
   const idFactura = document.querySelector("#id").value;
   const idCliente = document.querySelector("#cliente").value;
   const direccion = document.querySelector("#direccion").value;
   const fecha = document.querySelector("#fecha").value;
   const referenciaPago = document.querySelector("#referencia").value;
   const fechaVencimiento = document.querySelector("#fecha_vencimiento").value;
   const servicio = document.querySelector("#servicio").value;
   const cantidad = document.querySelector("#cantidad").value;
   const precio = document.querySelector("#precio").value;
   const impuesto = document.querySelector("#impuesto").value;
   const total = document.querySelector("#total").value;
   //comprobar que los camapos no esten vacios
   if(
    direccion.length === 0 ||
    fecha.length === 0 ||
    referenciaPago.length === 0 ||
    fechaVencimiento.length === 0 ||
    servicio.length === 0 ||
    cantidad.length === 0 ||
    precio.length === 0 ||
    impuesto.length === 0 ||
    total.length === 0 
  ){
    mensajes.innerHTML = "Campos vacios ... <i class='fa-solid fa-ban fa-beat-fade'></i>";
    return;
   }
   // Enviar datos al servidor
   const url = "http://localhost:4000/api/v1/facturas";
   fetch(url, {
       method: "post",
       headers: { "Content-Type": "application/json" },
       body: JSON.stringify({
        
           Servicio: servicio,
           Cantidad: cantidad,
           Precio: precio,
           Impuesto: impuesto,
           Fecha_factura: fecha,
          Referencia_pago: referenciaPago,
          Fecha_vencimiento: fechaVencimiento,
          Total: total
       
        })
    })
    .then((res) => res.json())
    .then((mensaje) => {
        mensajes.innerHTML = "Factura creada correctamente.";
    
        const contenedorFacturasCreadas= document.getElementById("contenedorFacturasCreadas");
        contenedorFacturasCreadas.innerHTML = "";

        setTimeout(() => {
            location.reload(); // Refresca la página después de 3 segundos
        }, 3000);
    })
    .catch((error) => {
        mensajes.innerHTML = "Error al crear la factura: " + error;
    });
  }
  
// Evento click del botón Imprimir
document.getElementById('imprimir').addEventListener('click', () => {
  // Aquí puedes agregar el código para generar la factura en formato HTML
  const facturaHTML = generarFacturaHTML(); // Esta función debería retornar el HTML de la factura

  // Crear un objeto jsPDF
  const pdf = new jsPDF();

  // Agregar el contenido HTML a la página del PDF
  pdf.html(facturaHTML, {
      callback: function (pdf) {
          // Guardar o mostrar el PDF
          pdf.save('factura.pdf'); // Guarda el PDF con el nombre 'factura.pdf'
          // pdf.output('dataurlnewwindow'); // Abre una nueva ventana con el PDF
      }
  });
});

// Función para generar el HTML de la factura
function generarFacturaHTML() {
  // Aquí deberías generar el HTML de la factura utilizando los datos de la factura guardada en la interfaz
  // Puedes recorrer los elementos de la factura y generar el HTML correspondiente
  // Retorna el HTML generado
}



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


