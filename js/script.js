function simuladorCompras() {
  const productos = [];
  let total = 0;
  let detalleCompra = "Detalle de la compra:\n";

  let agregarProducto = true;
  while (agregarProducto) {
    const nombreProducto = prompt("Ingresa el nombre del producto:");
    const precioProducto = parseFloat(
      prompt("Ingresa el precio del producto:")
    );

    productos.push({
      nombre: nombreProducto,
      precio: precioProducto,
    });

    agregarProducto = confirm("¿Deseas agregar otro producto?");
  }

  for (let i = 0; i < productos.length; i++) {
    total += productos[i].precio;
    detalleCompra += `${productos[i].nombre}: $${productos[i].precio}\n`;
  }

  detalleCompra += `\nTotal de la compra: $${total}`;

  alert(detalleCompra);
  console.log(detalleCompra);
}

simuladorCompras();
