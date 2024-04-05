function toggleMenu() {
  var seccionIzquierda = document.getElementById("seccion_izquierda");
  if (seccionIzquierda.style.display === "none") {
      seccionIzquierda.style.display = "flex";
  } else {
      seccionIzquierda.style.display = "none";
  }
}

document.addeventlistener('domcontentloaded', function() {
  const enlacefacturas = document.getelementbyid('facturas'); 
  const btnagregarfactura = document.getelementbyid('agregar_factura');
  const btncabecera = document.queryselector('.btn-cabecera');
  const contenedorFacturasCreadas = document.getelementbyid('contenedorFacturasCreadas');
  const formfactura = document.getelementbyid('formfactura');
  
  enlacefacturas.addeventlistener('click', function() {
    // mostrar botones de facturas y ocultar otros
    btncabecera.classlist.remove('hide');
    formfactura.classlist.add('hide');
  });
  
  btnagregarfactura.addeventlistener('click', function() {
// mostrar formulario y ocultar contenedor de facturas creadas 

    formfactura.classlist.remove('hide');
});
 });
 

 


 
  
  