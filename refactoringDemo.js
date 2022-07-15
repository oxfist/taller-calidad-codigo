// Esta función...
function imprimirCuota(boleta) {
  imprimirEncabezado();
  let cuota = calcularCuota();

  // imprimir detalles
  console.log(`nombre: ${boleta.cliente}`);
  console.log(`monto: ${cuota}`);
}

// ...se transforma en 👇
function imprimirCuota(boleta) {
  imprimirEncabezado();
  let cuota = calcularCuota();
  imprimirDetalles(cuota);

  function imprimirDetalles(cuota) {
    console.log(`nombre: ${boleta.cliente}`);
    console.log(`monto: ${cuota}`);
  }
}


