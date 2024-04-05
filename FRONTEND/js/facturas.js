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
        const contenedorFacturasCreadas= document.getElementById("contenedorFacturasCreadas");
        contenedorFacturasCreadas.innerHTML =

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
//FUNCIONES PARA MOSTRAR LOS BOTONES, FORM, Y DIV PARA FACTURAS GUARDADAS EN EL INDEX.HTML
function mostrarBtnFactura () { //MUESTRA LOS BOTONES EN LA CABECERA EN EL LADO DERECHO DEL INDEX.HTML
 const btnCabecera = document.getElementById("btn-cabecera");
 btnCabecera.innerHTML = `
 <button type="button" id="agregar_factura" onclick="mostrarForm()"> Nuevo</button>
 <button type="button" id="ver-facturas">Facturas</button>
 <button type="button" id="eliminarFactura"><i class="fa-solid fa-trash-can"></i></button>
 <button type="button" id="editarFactura"> <i class="fa-regular fa-square-pen"></i></button>
 <button type="button" id="importar"> <i class="fa-solid fa-gear"></i></button>
` 
}

function mostrarForm(){// MUESTRA EL FORMULARIO CUANDO SE HACE CLICK EN NUEVO
    const formFactura = document.getElementById("formFactura");
    formFactura.innerHTML = ` 
    <form>
      <label class="form-label" for="id">Factura Número:</label>
      <input class="form-control" type="text" id="id">
     
      <label class="form-label" for="cliente">Cliente:</label>
      <select class="form-select form-select-lg mb-3" id="cliente" name="cliente">
        <option selected > Click y selecciona el cliente</option>
      </select>
    

      <label class="form-label" for="direccion">Direccion:</label>
      <input class="form-control" type="text"  id="direccion">
<!-- //seccion derecha  -->
      <label class="form-label" for="fecha">Factura Fecha:</label>
      <input class="form-control" type="date" id="fecha" required>

      <label class="form-label"   for="referencia">Referencia de Pago:</label>
      <input class="form-control" type="text" id="referencia">

      <label class="form-label" for="fecha_vencimiento">Fecha de vencimiento:</label>
      <input class="form-control" type="date" id="fecha_vencimiento"  required>
<!-- //seccion abajo  -->
      <label class="form-label" for="servicio">Servicio:</label>
      <input class="form-control" type="text" id="servicio"  required>
    
      <label class="form-label" for="cantidad">Cantidad:</label>
      <input class="form-control" type="number" id="cantidad" required>
      
      <label class="form-label" for="precio">Precio:</label>
      <input class="form-control" type="number" id="precio" required>

      <label class="form-label" for="impuesto">Impuesto:</label>
      <input class="form-control" type="number" id="impuesto">

      <label class="form-label" for="total">Total:</label>
      <input class="form-control" type="number" id="total">

      <div class="botones_guardarFactura">
        <button type="button" id="GuardarFactura">
          <i class="fa-solid fa-cloud-arrow-up"></i> Guardar
      </button>
        <i class="fa-solid fa-arrow-rotate-left"></i>
        </div>

      <div id="mensajes"></div>
    </form>
`
}

// CUANDO SE HACE CLICK EN EL BOTON DE GUARDAR SE GUARDA LA FACTURA EN EL CONTENEDOR
// function mostrarBtnFactura () {
//  const seccionDerecha = document.getElementById("seccion_derecha");
//  seccionDerecha.innerHTML = `<div class="btn-cabecera" >
//  <button type="button" id="agregar_factura" onclick="mostrarForm()"> Nuevo</button>
//  <button type="button" id="ver-facturas">Facturas</button>
//  <button type="button" id="eliminarFactura"><i class="fa-solid fa-trash-can"></i></button>
//  <button type="button" id="editarFactura"> <i class="fa-regular fa-square-pen"></i></button>
//  <button type="button" id="importar"> <i class="fa-solid fa-gear"></i></button>
// </div>` 

// }

// FUNCION CUANDO SE HACE CLICK EN VER FACTURAS, MUESTRA EL DIV CONTENEDOR DE LAS FACTURAS


// CLICK EN EL BOTON DE ELIMINAR , TIENE QUE ELIMINAR UNA FACTURA



    



   
    