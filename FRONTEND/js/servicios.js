document.addEventListener('DOMContentLoaded', function () {
  //acordeon descripcion
  const acordeonToggle1 = document.getElementById('acordeon-toggle');
  const acordeonBtn1 = document.querySelector('.acordeon-btn');

  acordeonToggle1.addEventListener('change', function () {
      if (this.checked) {
          acordeonBtn1.classList.add('active');
      } else {
          acordeonBtn1.classList.remove('active');
          // Limpiar el textarea cuando se cierra el acordeón
          document.querySelector('.acordeon-contenido textarea').value = '';
      }
  });

  //acordeón Información Adicional
const acordeonToggle2 = document.getElementById('acordeon-toggle2');
const acordeonBtn2 = document.querySelector('.acordeon-btn:nth-of-type(2)');

acordeonToggle2.addEventListener('change', function () {
    const contenidoTextarea2 = this.parentElement.querySelector('.info-adicional textarea');
    
    if (this.checked) {
        acordeonBtn2.classList.add('active');
    } else {
        acordeonBtn2.classList.remove('active');
        // Limpiar el textarea cuando se cierra el acordeón
        contenidoTextarea2.value = '';
    }
});
});


// Solo permitir seleccionar un tipo (Consumible o Servicio)
const checkboxesTipo = document.querySelectorAll('input[name="tipo"]');
checkboxesTipo.forEach(checkbox => {
    checkbox.addEventListener('change', function () {
        if (this.checked) {
            checkboxesTipo.forEach(otherCheckbox => {
                if (otherCheckbox !== this) {
                    otherCheckbox.checked = false;
                }
            });
        }
    });
});



const botonGuardarServicio = document.getElementById('btn-agregar_servicio');
const iconoGuardar = document.querySelector('.fa-cloud-arrow-up');
const divServiciosNuevos = document.querySelector('.servicios_creados');

botonGuardarServicio.addEventListener('click', () =>  {
  // Obtener valores de los elementos de entrada
  const nombreServicio = document.getElementById('servicio').value;
  const tipoServicio = document.querySelector('input[name="tipo"]:checked').value;
  const precioServicio = document.getElementById('precio').value;
  const descripcionServicio = document.querySelector('.acordeon-contenido textarea').value;

  // Creo un nuevo elemento div para almacenar la información del servicio
  const nuevoServicioDiv = document.createElement('div');
  nuevoServicioDiv.classList.add('servicio');

  // Construir la estructura del servicio dentro del nuevo div
  nuevoServicioDiv.innerHTML = `
      <h3>${nombreServicio}</h3>
      <p>Tipo: ${tipoServicio}</p>
      <p>Precio: ${precioServicio}</p>
      <p>Descripción: ${descripcionServicio}</p>
      <button class="editar-servicio" title="Editar"><i class="fas fa-edit"></i></button>
      <button class="eliminar-servicio" title="Eliminar"><i class="fas fa-trash-alt"></i></button>
  `;

  // Agregar el nuevo servicio al div de servicios creados
  divServiciosNuevos.appendChild(nuevoServicioDiv);

  // Limpiar los campos después de guardar el servicio
  document.getElementById('servicio').value = '';
  document.querySelector('input[name="tipo"]:checked').checked = false;
  document.getElementById('precio').value = '';
  document.querySelector('.acordeon-contenido textarea').value = '';

  // Agregar manejadores de eventos para los botones de editar y eliminar
  const editarBoton = nuevoServicioDiv.querySelector('.editar-servicio');
  editarBoton.addEventListener('click', () => {
      // logica para editar el servicio creado
      console.log('Editar servicio:', nombreServicio);
  });

  const eliminarBoton = nuevoServicioDiv.querySelector('.eliminar-servicio');
  eliminarBoton.addEventListener('click', () => {
      //eliminar el servicio
      divServiciosNuevos.removeChild(nuevoServicioDiv);
  });
});





