document.querySelector('#siguiente-paso').onclick = function (event) {
  borrarErrores();
  borrarIntegrantes();

  const $cantidadIntegrantes = Number(
    document.querySelector('#cantidad-familiares').value
  );

  const validarInput = validarInputIntegrante($cantidadIntegrantes);

  if (validarInput) {
    document.querySelector('#cantidad-familiares').className = 'error';
    const $errores = document.querySelector('#errores');
    const $error = document.createElement('li');
    $error.innerText = validarInputIntegrante(
      document.querySelector('#cantidad-familiares').value
    );
    $errores.appendChild($error);
  } else {
    document.querySelector('#cantidad-familiares').className = '';
    crearIntegrantes($cantidadIntegrantes);
    mostrarBotonCalculo();
    mostrarBotonReset();
  }

  event.preventDefault();
};

document.querySelector('#boton-calculo').onclick = function (event) {
  event.preventDefault();
  const edades = obtenerEdades();

  borrarErrores();

  const esExito = validarEdades(edades) === 0;
  if (esExito) {
    mostrarEdad('mayor', calcularMayorEdad(edades));
    mostrarEdad('menor', calcularMenorEdad(edades));
    mostrarEdad('promedio', calcularPromedio(edades));
    mostrarResultados();
  }
};

document.querySelector('#boton-reset').onclick = function (event) {
  borrarIntegrantes();
  borrarErrores();
  ocultarBotonCalculo();
  ocultarResultados();
  ocultarBotonReset();
  event.preventDefault();
};

function borrarIntegrantes() {
  const $integrante = document.querySelectorAll('#integrante');

  for (let i = 0; i < $integrante.length; i++) {
    $integrante[i].remove();
  }
}

function borrarErrores() {
  const $errores = document.querySelector('#errores');
  while ($errores.hasChildNodes()) {
    $errores.removeChild($errores.firstChild);
  }

  ocultarResultados();
}

function crearIntegrantes(cantidadIntegrantes) {
  const $divIntegrantes = document.querySelector('#integrantes');

  for (let i = 0; i < cantidadIntegrantes; i++) {
    const $div = document.createElement('div');
    $div.id = `integrante`;
    const $label = document.createElement('label');
    $label.textContent = `Edad Integrante #${i + 1}`;
    const $input = document.createElement('input');
    $input.name = `integrante ${i + 1}`;
    $input.type = 'number';
    $input.min = '0';

    $div.appendChild($label);
    $div.appendChild($input);
    $divIntegrantes.appendChild($div);
  }
}

function mostrarBotonCalculo() {
  $botonCalculo = document.querySelector('#boton-calculo');
  $botonCalculo.className = '';
}

function ocultarBotonCalculo() {
  $botonCalculo = document.querySelector('#boton-calculo');
  $botonCalculo.className = 'oculto';
}

function mostrarResultados() {
  $resultados = document.querySelector('#resultado');
  $resultados.className = '';
}

function ocultarResultados() {
  $resultados = document.querySelector('#resultado');
  $resultados.className = 'oculto';
}

function mostrarBotonReset() {
  $botonReset = document.querySelector('#boton-reset');
  $botonReset.className = '';
}

function ocultarBotonReset() {
  $botonReset = document.querySelector('#boton-reset');
  $botonReset.className = 'oculto';
}

function mostrarEdad(tipo, valor) {
  document.querySelector(
    `#${tipo}-edad`
  ).textContent = `La edad ${tipo} es: ${valor}`;
}

function obtenerEdades() {
  const $edadesIntegrantes = document.querySelectorAll('#integrante input');
  const edades = {};

  for (let i = 0; i < $edadesIntegrantes.length; i++) {
    if ($edadesIntegrantes[i].value > 0) {
      edades[`integrante ${i + 1}`] = $edadesIntegrantes[i].value;
    } else {
      edades[`integrante ${i + 1}`] = '';
    }
  }

  return edades;
}

function calcularMayorEdad(edadIntegrantes) {
  const values = Object.values(edadIntegrantes);

  let edadMayor = Number(values[0]);

  for (let i = 1; i < values.length; i++) {
    if (Number(values[i]) > edadMayor) {
      edadMayor = Number(values[i]);
    }
  }
  return edadMayor;
}

function calcularMenorEdad(edadIntegrantes) {
  const values = Object.values(edadIntegrantes);

  let edadMenor = Number(values[0]);

  for (let i = 0; i < values.length; i++) {
    if (Number(values[i]) < edadMenor) {
      edadMenor = Number(values[i]);
    }
  }
  return edadMenor;
}

function calcularPromedio(edadIntegrantes) {
  const values = Object.values(edadIntegrantes);

  let suma = 0;

  for (let i = 0; i < values.length; i++) {
    suma += Number(values[i]);
  }

  return (suma / values.length).toFixed(2);
}

const $form = document.querySelector('#grupo-familiar');
const $cantidadIntegrantes = $form['cantidad-familiares'].value;

function validarInputIntegrante(input) {
  if (input <= 0) {
    return 'Este campo debe tener al menos 1 numero mayor a cero';
  } else if (!/^[0-9]{1,2}$/.test(input)) {
    return 'El campo solo acepta numeros enteros y no mas de 2 caracteres';
  } else {
    return '';
  }
}

function validarEdades(edades) {
  const keys = Object.keys(edades);
  const $errores = document.querySelector('#errores');

  let cantidadErrores = 0;

  keys.forEach(function (key) {
    const error = validarInputIntegrante(edades[key]);

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
