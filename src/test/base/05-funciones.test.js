import {getUser,getUsuarioActivo} from '../../base/05-funciones.js';

describe('Prueba en 03-funciones.js',()=>{

    test('getUser Debe de retornar un objeto',()=>{
        const userTest={
            uid:'ABC123',
            username:'El_Papi1502'
        }

        const objUser = getUser();
        
        expect(objUser).toStrictEqual(userTest);
    })

    //Tarea
    //getUsuarioActivo debe de retornar un objeto

    test('getUsuarioActivo debe de retornar un objeto',()=>{

        const nombre = 'Jonathan';
        const userActivo = getUsuarioActivo(nombre);
        expect(userActivo).toEqual({
            uid:'ABC567',
            username:nombre
        })

    })

})