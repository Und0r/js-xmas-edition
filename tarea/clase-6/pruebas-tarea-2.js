function probarValidarSalarioIntegrante(){

    console.assert(
        validarSalarioIntegrante('') === 'Este campo debe tener al menos un número',
        'Validar SalarioIntegrante no valido que el campo este vacio',
    );

    console.assert(
        validarSalarioIntegrante('0000000000000000000000000000') === 'Este campo debe tener menos de 20 números',
        'Validar SalarioIntegrante no valido que el campo sea menor a 20 caracteres',
    );
}

probarValidarSalarioIntegrante();