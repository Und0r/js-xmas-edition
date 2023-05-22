document.querySelector('#siguiente-paso').onclick = function (event) {
  const $cantidadIntegrantes = Number(
    document.querySelector('#cantidad-familiares').value
  );

  borrarIntegrantes();
  if ($cantidadIntegrantes > 0) {
    crearIntegrantes($cantidadIntegrantes);
    mostrarBotonCalculo();
    mostrarBotonReset();
  }

  event.preventDefault();
};

document.querySelector('#boton-calculo').onclick = function (event) {
  const edades = obtenerEdades();

  mostrarEdad('mayor', calcularMayorEdad(edades));
  mostrarEdad('menor', calcularMenorEdad(edades));
  mostrarEdad('promedio', calcularPromedio(edades));
  mostrarResultados();

  event.preventDefault();
};

document.querySelector('#boton-reset').onclick = function (event) {
  borrarIntegrantes();
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

function crearIntegrantes(cantidadIntegrantes) {
  const $divIntegrantes = document.querySelector('#integrantes');

  for (let i = 0; i < cantidadIntegrantes; i++) {
    const $div = document.createElement('div');
    $div.id = 'integrante';
    const $label = document.createElement('label');
    $label.textContent = `Edad Integrante #${i + 1}`;
    const $input = document.createElement('input');
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
  document.querySelector(`#${tipo}-edad`).textContent = `La edad ${tipo} es: ${valor}`;
}

function obtenerEdades() {
  const $edadesIntegrantes = document.querySelectorAll('#integrante input');
  edades = [];

  for (let i = 0; i < $edadesIntegrantes.length; i++) {
    if(Number($edadesIntegrantes[i].value) > 0){
    edades.push(Number($edadesIntegrantes[i].value));
  }
  }


  return edades;
}

function calcularMayorEdad(edadIntegrantes) {
  let edadMayor = edadIntegrantes[0];

  for (let i = 1; i < edadIntegrantes.length; i++) {
    if (edadIntegrantes[i] > edadMayor) {
      edadMayor = edadIntegrantes[i];
    }
  }
  return edadMayor;
}

function calcularMenorEdad(edadIntegrantes) {
  let edadMenor = edadIntegrantes[0];

  for (let i = 1; i < edadIntegrantes.length; i++) {
    if (edadIntegrantes[i] < edadMenor) {
      edadMenor = edadIntegrantes[i];
    }
  }
  return edadMenor;
}

function calcularPromedio(edadIntegrantes) {
  let suma = 0;

  for (let i = 0; i < edadIntegrantes.length; i++) {
    suma += edadIntegrantes[i];
  }

  return (suma / edadIntegrantes.length).toFixed(2);
}

//Tarea extra clase 7
const $form = document.querySelector('#grupo-familiar');
const $cantidadIntegrantes = $form['cantidad-familiares'].value




function validarInputIntegrante(input){
  if(input.length === 0){
      return 'Este campo debe tener al menos 1 caracter';
  }else if (input.length >= 3){
      return 'Este campo debe tener menos de 3 caracteres';
  } else {
  return '';
}
}



function validarEdadIntegrante(inputEdad){
  if(inputEdad.length === 0){
    return 'Este campo debe tener al menos 1 caracter';
}else if (inputEdad.length >= 3){
    return 'Este campo debe tener menos de 3 caracteres'
} else {
return '';
}
}

