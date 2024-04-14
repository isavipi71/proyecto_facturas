document.addEventListener("DOMContentLoaded", function() {
    const btnAgregarServicio = document.getElementById("btn-agregar_servicio");

    btnAgregarServicio.addEventListener("click", function() {
        // Obtener los valores de los campos del formulario
        const nombreServicio = document.getElementById("servicio").value;
        const tipoServicio = document.querySelector('input[name="tipo"]:checked').nextElementSibling.textContent;
        const precioServicio = document.getElementById("precio").value;
        const descripcionServicio = document.getElementById("descripcion").value;
        const infoAdicionalServicio = document.getElementById("info_adicional").value;

        // Crear una nueva fila en la tabla de servicios creados
        const tbody = document.querySelector(".servicios_creados tbody");
        const newRow = tbody.insertRow(tbody.rows.length);

        // Insertar celdas con los datos del servicio
        const cells = [
            newRow.insertCell(0),
            newRow.insertCell(1),
            newRow.insertCell(2),
            newRow.insertCell(3),
            newRow.insertCell(4)
        ];

        cells[0].textContent = nombreServicio;
        cells[1].textContent = tipoServicio;
        cells[2].textContent = precioServicio;
        cells[3].textContent = descripcionServicio;
        cells[4].innerHTML = 
        '<button type="button" class="btn-editar">Editar</button> <button type="button" class="btn-eliminar">Eliminar</button>';

        // Limpiar los campos del formulario después de agregar el servicio
        nombreServicio.value = "";
        tipoServicio.checked = false;
        precioServicio.value = "";
        descripcionServicio.value = "";
        infoAdicionalServicio.value = "";
    });
});

document.getElementById("btn-guardar-servicios").addEventListener("click", function() {
    console.log("Guardando servicio...");
        const nombreServicio = document.getElementById("servicio").value;
        const precioServicio = document.getElementById("precio").value;
        const descripcionServicio = document.getElementById("descripcion").value;
        const infoAdicionalServicio = document.getElementById("info_adicional").value;

        const datos = {
            "Nombre del Servicio" : nombreServicio,
            "Precio": precioServicio,
            "Descripcion": descripcionServicio,
            "Informacion Adicional": infoAdicionalServicio
        };
        fetch('http://localhost:4000/api/v1/servicios/crearServicios', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(datos),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Servicio guardado exitosamente:', data);
        })
        .catch((error) => {
            console.error('Error al guardar el servicio:', error);
        });
});
