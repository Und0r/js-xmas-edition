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
}

function probarValidarCiudad(){
    console.assert(
        validarCiudad('') === 'Debe seleccionar una ciudad',
        'Validar ciudad no validó que la ciudad no este vacia',
    );
}

function probarValidarDescripcionRegalo(){
    console.assert(
        validarDescripcionRegalo('') === 'Este campo debe tener al menos 1 caracter',
        'Validar DescripcionRegalo no valido que la descripcion no esta vacia',
    )

    console.assert(
        validarDescripcionRegalo('1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111') ===
        'Este campo debe tener menos de 100 caracteres', 
        'Validar DescripcionRegalo no valido que la descripcion no sea menor a 100 caracteres',
    )
}

probarValidarNombre();
probarValidarCiudad();
probarValidarDescripcionRegalo();
