
test('Deben de ser iguales los string', () => {
   
    //Inicializacion
    const mensaje = 'Hola Mundo';

    //Estimulo
    const mensaje2 = `Hola Mundo`;

    // Observar el comportamiento
    expect(mensaje).toBe(mensaje2);

})
