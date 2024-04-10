document.addEventListener('DOMContentLoaded', function() {
  const enlacefacturas = document.getElementById('facturas'); 
  const btnagregarfactura = document.getElementById('agregar_factura');
  const btncabecera = document.querySelector('.btn-cabecera'); // Cambiado a querySelector
  const formfactura = document.getElementById('formFactura'); // Cambiado a formFactura
  
  enlacefacturas.addEventListener('click', function() { // Cambiado a addEventListener
    // mostrar botones de facturas y ocultar otros
    btncabecera.classList.remove('hide'); // Cambiado a classList.remove
    formfactura.classList.add('hide'); // Cambiado a classList.add
  });
});


function toggleMenu() {
  var seccionIzquierda = document.getElementById("seccion_izquierda");
  if (seccionIzquierda.style.display === "none") {
      seccionIzquierda.style.display = "flex";
  } else {
      seccionIzquierda.style.display = "none";
  }
}

