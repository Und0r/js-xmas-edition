document.querySelector('#agregar-integrante').onclick = function (event) {
  crearInput();
  borrarErrores();
  mostrarBotonCalculo();
  event.preventDefault();
};

document.querySelector('#quitar-integrante').onclick = function (event) {
  const $divInputs = document.querySelectorAll('#input-salario');
  borrarErrores();
  ocultarResultados();
  borrarInput();
  if ($divInputs.length === 1) {
    ocultarBotonCalculo();
  }
  event.preventDefault();
};

document.querySelector('#boton-calculo').onclick = function () {
  borrarResultados();
  borrarErrores();
  const salarios = obtenerSalarios();

  const esExito = validarSalarios(salarios) === 0;
  if (esExito) {
    calcularSalarios(salarios);
    mostrarResultados();
  }
};

function crearInput() {
  const $inputsTotales = document.querySelectorAll('#input-salario');
  const $formSalarios = document.querySelector('#form-salarios');
  const $div = document.createElement('div');
  $div.id = 'input-salario';
  const $label = document.createElement('label');
  $label.textContent = `Salario anual integrante ${$inputsTotales.length + 1}`;
  const $input = document.createElement('input');
  $input.type = 'number';
  $input.name = `salario ${$inputsTotales.length + 1}`;
  $input.min = '0';

  $label.appendChild($input);
  $div.appendChild($label);
  $formSalarios.appendChild($div);
}

function borrarInput() {
  const $divInputs = document.querySelectorAll('#input-salario');
  if ($divInputs.length > 0) {
    $divInputs[$divInputs.length - 1].remove();
  }
}

function borrarResultados() {
  const $mayorSalarioAnual = document.querySelector('#salario-anual-max');
  const $menorSalarioAnual = document.querySelector('#salario-anual-min');
  const $salarioAnualProm = document.querySelector('#salario-anual-prom');
  const $salarioMensualProm = document.querySelector('#salario-mensual-prom');

  $mayorSalarioAnual.textContent = '';
  $menorSalarioAnual.textContent = '';
  $salarioAnualProm.textContent = '';
  $salarioMensualProm.textContent = '';
}

function borrarErrores() {
  const $errores = document.querySelector('#errores');
  while ($errores.hasChildNodes()) {
    $errores.removeChild($errores.firstChild);
  }
}

function mostrarBotonCalculo() {
  document.querySelector('#boton-calculo').className = '';
}

function ocultarBotonCalculo() {
  document.querySelector('#boton-calculo').className = 'oculto';
}

function mostrarResultados() {
  document.querySelector('#resultados').className = '';
}

function ocultarResultados() {
  document.querySelector('#resultados').className = 'oculto';
}

function obtenerSalarios() {
  const $salarios = document.querySelectorAll('#input-salario input');
  const salarios = {};

  for (let i = 0; i < $salarios.length; i++) {
    if ($salarios[i].value !== '') {
      salarios[`salario ${i + 1}`] = Number($salarios[i].value);
    } else {
      salarios[`salario ${i + 1}`] = '';
    }
  }

  return salarios;
}

function validarSalarios(salario) {
  const keys = Object.keys(salario);
  const $errores = document.querySelector('#errores');

  let cantidadErrores = 0;

  keys.forEach(function (key) {
    const error = validarSalarioIntegrante(salario[key]);

    if (error) {
      cantidadErrores++;
      $form[key].className = 'error';

      const $error = document.createElement('li');
      $error.innerText = error;
      $errores.appendChild($error);
    } else {
      $form[key].className = '';
    }
  });

  return cantidadErrores;
}

function calcularSalarios(salarios) {
  const $mayorSalarioAnual = document.querySelector('#salario-anual-max');
  const $menorSalarioAnual = document.querySelector('#salario-anual-min');
  const $salarioAnualProm = document.querySelector('#salario-anual-prom');
  const $salarioMensualProm = document.querySelector('#salario-mensual-prom');

  $mayorSalarioAnual.textContent =
    'El mayor salario anual es ' + calcularMayorSalarioAnual(salarios);
  $menorSalarioAnual.textContent =
    'El menor salario anual es ' + calcularMenorSalarioAnual(salarios);
  $salarioAnualProm.textContent =
    'El salario anual promedio es ' + calcularSalarioAnualPromedio(salarios);
  $salarioMensualProm.textContent =
    'El salario mensual promedio es ' +
    calcularSalarioMensualPromedio(salarios);
}

function calcularMayorSalarioAnual(salarios) {
  const values = Object.values(salarios);

  let salarioMayor = values[0];

  for (let i = 1; i < values.length; i++) {
    if (values[i] > salarioMayor) {
      salarioMayor = values[i];
    }
  }

  return salarioMayor;
}

function calcularMenorSalarioAnual(salarios) {
  const values = Object.values(salarios);

  let salarioMenor = values[0];

  for (let i = 1; i < values.length; i++) {
    if (values[i] < salarioMenor) {
      salarioMenor = values[i];
    }
  }

  return salarioMenor;
}

function calcularSalarioAnualPromedio(salarios) {
  const values = Object.values(salarios);

  let suma = 0;

  for (let i = 0; i < values.length; i++) {
    suma += values[i];
  }

  return (suma / values.length).toFixed(2);
}

function calcularSalarioMensualPromedio(salarios) {
  let salariosMensuales = convertirSalariosAnualesEnMensuales(salarios);
  let suma = 0;

  for (let i = 0; i < salariosMensuales.length; i++) {
    suma += salariosMensuales[i];
  }

  return (suma / salariosMensuales.length).toFixed(2);
}

function convertirSalariosAnualesEnMensuales(salarios) {
  const values = Object.values(salarios);
  const salariosMensuales = [];
  const mesesEnUnAnio = 12;

  for (let i = 0; i < values.length; i++) {
    salariosMensuales.push(values[i] / mesesEnUnAnio.toFixed(2));
  }

  return salariosMensuales;
}

function validarSalarioIntegrante(inputSalario) {
  if (inputSalario.length === 0) {
    return 'Este campo debe tener al menos un número';
  } else if (inputSalario.length >= 20) {
    return 'Este campo debe tener menos de 20 números';
  } else {
    return '';
  }
}

const $form = document.querySelector('#form-salarios');
