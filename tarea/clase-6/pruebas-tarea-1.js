function probarValidarInputIntegrantes() {
    console.assert(
        validarInputIntegrante('') === 'Este campo debe tener al menos 1 numero mayor a cero',
        'Validar InputIntegrante no validó que el campo no sea vacío',
    );
  
    console.assert(
        validarInputIntegrante('513asdas') === 'El campo InputIntegrante solo acepta numeros enteros y no mas de 2 caracteres',
        'Validar InputIntegrante no validó que el campo sea menor a 3 caracteres',
    );
  }

  function probarValidarEdadIntegrante() {
    console.assert(
        validarEdadIntegrante('') === 'Este campo debe tener al menos 1 caracter',
        'Validar EdadIntegrante no validó que el campo no sea vacío',
    );
  
    console.assert(
        validarEdadIntegrante('5213') === 'Este campo debe tener menos de 3 caracteres',
        'Validar EdadIntegrante no validó que el campo sea menor a 3 caracteres',
    );
  }
probarValidarInputIntegrantes();
// probarValidarEdadIntegrante();

