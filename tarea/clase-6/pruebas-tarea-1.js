function probarValidarInputIntegrantes() {
    console.assert(
        validarInputIntegrante('') === 'Este campo debe tener al menos 1 caracter',
        'Validar InputIntegrante no validó que el nombre no sea vacío',
    );
  
    console.assert(
        validarInputIntegrante('513') === 'Este campo debe tener menos de 3 caracteres',
        'Validar InputIntegrante no validó que el nombre sea menor a 3 caracteres',
    );
  }

  function probarValidarEdadIntegrante() {
    console.assert(
        validarEdadIntegrante('') === 'Este campo debe tener al menos 1 caracter',
        'Validar EdadIntegrante no validó que el nombre no sea vacío',
    );
  
    console.assert(
        validarEdadIntegrante('5213') === 'Este campo debe tener menos de 3 caracteres',
        'Validar EdadIntegrante no validó que el nombre sea menor a 3 caracteres',
    );
  }
probarValidarInputIntegrantes();
probarValidarEdadIntegrante();

