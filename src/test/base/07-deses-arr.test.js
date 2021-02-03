import {retornaArreglo} from '../../base/07-deses-arr.js'

describe('Pruebas en 07-deses-arr.js',()=>{

    test('Debe de retornar un string y un numero',()=>{
        const [texto,numero] = retornaArreglo();
        expect(texto).toBe('ABC');
        expect(typeof texto).toBe('string');

        expect(numero).toBe(123);
        expect(typeof numero).toBe('number');
      
    })

    test('Los arreglos deben ser iguales ', () => {
        const arreglo = retornaArreglo();

        expect(arreglo).toEqual(['ABC', 123]);
    })
    
    
})









