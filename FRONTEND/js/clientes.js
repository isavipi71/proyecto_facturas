document.addEventListener('DOMContentLoaded', function() { 
  // Agregar evento de clic al botón "Guardar Cliente"
  document.getElementById('agregar_cliente').addEventListener('click', guardarCliente);
});

function guardarCliente() {
  const cliente = {
      nombre: document.querySelector("#nombre").value,
      nif: document.querySelector("#nif").value,
      calle: document.querySelector("#calle").value,
      provincia: document.querySelector("#provincia").value,
      ciudad: document.querySelector("#ciudad").value,
      codigoPostal: document.querySelector("#codigo-postal").value,
      pais: document.querySelector("#pais").value,
      telefono: document.querySelector("#telefono").value,
      movil: document.querySelector("#movil").value,
      correoElectronico: document.querySelector("#correo-electronico").value
  };

  fetch('http://localhost:4000/api/v1/clientes', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(cliente)
  })
  .then(response => response.json())
  .then(data => {
      console.log(data); // Aquí puedes manejar la respuesta del servidor
      alert('Cliente guardado correctamente');
  })
  .catch(error => {
      console.error('Error:', error);
      alert('Ocurrió un error al guardar el cliente');
  });
}





// function cargarClientes() {
//   const url = "http://localhost:4000/api/v1/clientes"; // La ruta para obtener los clientes desde el servidor
//   fetch(url)
//     .then((res) => res.json())
//     .then((data) => {
//       const selectCliente = document.querySelector("#cliente");
//       data.forEach((cliente) => {
//         const option = document.createElement("option");
//         option.value = cliente.Nombre;
//         option.text = cliente.Nombre;
//         selectCliente.appendChild(option);
//       });
//     })
//     .catch((error) => {
//       console.error("Error al cargar los clientes:", error);
//     });
// }

// // Llamamos a la función para cargar los clientes 
// window.onload = cargarClientes;