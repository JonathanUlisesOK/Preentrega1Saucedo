alert("bienvenidos a la tienda de mascotas Floppy");
alert("Tenemos los mejores articulos para tu mascota");

function calcularPrecioTotal(
  marcaAlimento,
  pesoAlimento,
  cantidadRaton,
  cantidadHueso
) {
  const precioCatChow3kg = 5500;
  const precioCatChow8kg = 9500;
  const precioDogChow3kg = 6000;
  const precioDogChow8kg = 10500;
  const precioGatti3kg = 5000;
  const precioGatti8kg = 9000;
  const precioRaton = 5000;
  const precioHueso = 8500;
  let precioTotal = 0;

  switch (marcaAlimento) {
    case "catchow":
      if (pesoAlimento === 3) {
        precioTotal += precioCatChow3kg * cantidadBolsas;
      } else if (pesoAlimento === 8) {
        precioTotal += precioCatChow8kg * cantidadBolsas;
      } else {
        alert("Peso de alimento no válido");
        return 0;
      }
      break;
    case "dogchow":
      if (pesoAlimento === 3) {
        precioTotal += precioDogChow3kg * cantidadBolsas;
      } else if (pesoAlimento === 8) {
        precioTotal += precioDogChow8kg * cantidadBolsas;
      } else {
        alert("Peso de alimento no válido");
        return 0;
      }
      break;
    case "gatti":
      if (pesoAlimento === 3) {
        precioTotal += precioGatti3kg * cantidadBolsas;
      } else if (pesoAlimento === 8) {
        precioTotal += precioGatti8kg * cantidadBolsas;
      } else {
        alert("Peso de alimento no válido");
        return 0;
      }
      break;
    default:
      alert("Marca de alimento no válida");
      return 0;
  }

  // Para sumar el costo de los juguetes
  precioTotal += cantidadRaton * precioRaton;
  precioTotal += cantidadHueso * precioHueso;

  return precioTotal;
}

let marcaSeleccionada = prompt(
  "Seleccione la marca de alimento: catchow, dogchow o gatti"
).toLowerCase();
let pesoSeleccionado = parseInt(
  prompt("Seleccione el peso del alimento (3 para 3kg, 8 para 8kg):")
);

let cantidadBolsas = parseInt(
  prompt("Ingrese cantidad de bolsas de alimento que desea comprar:")
);

let cantidadRaton = parseInt(
  prompt("Ingrese cantidad de ratones de juguete que desea comprar:")
);
let cantidadHueso = parseInt(
  prompt("Ingrese cantidad de huesos de juguete que desea comprar:")
);

// Validacion de entradas, números válidos
if (isNaN(pesoSeleccionado) || isNaN(cantidadRaton) || isNaN(cantidadHueso)) {
  alert("Debe ingresar números válidos para las cantidades.");
} else {
  // Calcular el precio total sin IVA
  let precioSinIVA = calcularPrecioTotal(
    marcaSeleccionada,
    pesoSeleccionado,
    cantidadRaton,
    cantidadHueso
  );

  // Calcular el IVA (21%)
  const IVA = 0.21;
  let precioConIVA = precioSinIVA * (1 + IVA);

  // Redondear el precio con IVA a dos decimales
  precioConIVA = Math.round(precioConIVA * 100) / 100;

  // Mostrar el precio total al usuario con IVA incluido
  alert("El precio total a pagar (IVA incluido) es: " + precioConIVA);
}