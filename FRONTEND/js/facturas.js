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
    const facturasLink = document.querySelector('a[href="#facturas"]');

    //  evento de clic al enlace de Facturas
    facturasLink.addEventListener('click', function (event) {
        event.preventDefault(); // Prevenir el comportamiento predeterminado del enlace
        // Mostrar los botones de añadir factura y ver facturas creadas
        mostrarBotonesFactura();
    });

    // Función para mostrar los botones de factura
    function mostrarBotonesFactura() {
        const seccionDerecha = document.getElementById('seccion_derecha');
        seccionDerecha.innerHTML = "";
        const facturasButtonsDiv = document.createElement('div');
        facturasButtonsDiv.id = 'facturas-buttons';

        // Botón de añadir factura
        const agregarFacturaBtn = document.createElement('button');
        agregarFacturaBtn.id = 'agregar-factura-btn';
        agregarFacturaBtn.textContent = 'Añadir Factura';
        agregarFacturaBtn.addEventListener('click', mostrarFormularioFactura);
        facturasButtonsDiv.appendChild(agregarFacturaBtn);

        // Botón de ver facturas creadas
        const verFacturasBtn = document.createElement('button');
        verFacturasBtn.id = 'ver-facturas-btn';
        verFacturasBtn.textContent = 'Facturas';
        // Agregar evento de clic al botón (aquí deberías implementar la funcionalidad)
        facturasButtonsDiv.appendChild(verFacturasBtn);

        // Agregar los botones al DOM
        seccionDerecha.insertBefore(facturasButtonsDiv, seccionDerecha.firstChild);
    }

    // Función para mostrar el formulario de agregar factura
    function mostrarFormularioFactura() {
        console.log("mostrar Formulario Factura");
        const facturaForm = document.getElementById("formulario-factura");
        facturaForm.style.display = 'block'; // Mostrar el formulario
    }
});




   
    