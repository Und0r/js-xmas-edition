function probarValidarNombre() {
  console.assert(
      validarNombre('') === 'Este campo debe tener al menos 1 caracter',
      'Validar nombre no validó que el nombre no sea vacío',
  );

  console.assert(
      validarNombre(
          '111111111111111111111111111111111111111111111111111111111111111111111111111111111111111') ===
      'Este campo debe tener menos de 50 caracteres',
      'Validar nombre no validó que el nombre sea menor a 50 caracteres',
  );

  console.assert(
    validarNombre('dfs223fff') === 'El campo nombre solo acepta letras',
    'Validar nombre no valido que el nombre solo tenga letras',
  );

  // caso correcto
  console.assert(
    validarNombre('Alejandro') === '',
    'Validar nombre falló con un nombre valido',
  );
}

function probarValidarCiudad(){
    console.assert(
        validarCiudad('') === 'Debe seleccionar una ciudad',
        'Validar ciudad no validó que la ciudad no este vacia',
    );

    console.assert(
        validarCiudad('Buenos Aires') === '',
        'Validar ciudad falló con un nombre de ciudad valido',
    );
}

function probarValidarDescripcionRegalo(){
    console.assert(
        validarDescripcionRegalo('') === 'Este campo debe tener al menos 1 caracter',
        'Validar DescripcionRegalo no valido que la descripcion no esta vacia',
    );

    console.assert(
        validarDescripcionRegalo('1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111') ===
        'Este campo debe tener menos de 100 caracteres', 
        'Validar DescripcionRegalo no valido que la descripcion no sea menor a 100 caracteres',
    );

    console.assert(
        validarDescripcionRegalo('Regalo') === '',
        'Validar descripcion regalo falló con una descripcion correcta',
    );

    console.assert(
        validarDescripcionRegalo(',.,.,.,.,') === 'El campo descripcion solo puede tener numeros y letras',
        'Validar descripcion regalo no valido que fuera solo numeros y letras',
    );
}

probarValidarNombre();
probarValidarCiudad();
probarValidarDescripcionRegalo();
