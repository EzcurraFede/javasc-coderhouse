function ingresarGastos() {
  let presupuesto = parseFloat(prompt("Ingresa tu presupuesto:"));
  let gastoAlimentacion = parseFloat(prompt("Ingresa el gasto en comida:"));
  let gastoTransporte = parseFloat(prompt("Ingresa el gasto en transporte:"));
  let gastoEntretenimiento = parseFloat(
    prompt("Ingresa el gasto en entretenimiento:")
  );

  return [
    presupuesto,
    gastoAlimentacion,
    gastoTransporte,
    gastoEntretenimiento,
  ];
}

function calcularTotal(gastos) {
  let totalGastos = gastos[1] + gastos[2] + gastos[3];
  let saldo = gastos[0] - totalGastos;
  return [totalGastos, saldo];
}

function mostrarResultados(totalGastos, saldo) {
  alert("Total de gastos: $" + totalGastos + "\nSaldo: $" + saldo);
}

let gastos = ingresarGastos();
let [totalGastos, saldo] = calcularTotal(gastos);
mostrarResultados(totalGastos, saldo);
