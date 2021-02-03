import '@testing-library/jest-dom';

import {getSaludo} from '../../base/02-template-string.js'
describe('Prueba en 02-template-string.js',()=>{

    test('Prueba en el metodo getSaludo ', () => {
    
        const nombre = 'Jonathan';
        const saludo = getSaludo(nombre);
        
        expect(saludo).toBe('Hola ' + nombre);
    })

    
    //getSaludo debe retornar Hola Jonathan! si no hay argumentos en la función

    test('Debe retornar Hola Jonathan! si la función no recibe parámetros',()=>{

        const saludo2 = getSaludo();
        expect(saludo2).toBe('Hola ' + 'Jonathan!');
    })
       
})




