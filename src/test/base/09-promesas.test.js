import { getHeroeByIdAsync } from "../../base/09-promesas";
import heroes from "../../data/heroes";

describe('Pruebas con Promesas',()=>{

    test('getHeroeByIdAsync Retornar un Heroe async', (done) => {
        const id = 1;
         getHeroeByIdAsync(id)
                            .then(resolve => {
                                expect(resolve).toBe(heroes[0]);
                                done();
                            });
        
    });
    
    test('Debe de obtener un error si el héroe por id no exite', (done) => {
         const id = 10;
         getHeroeByIdAsync(id)
                              .then(resolve =>{
                                  expect(resolve).toBe(heroes[10]);
                                  done();
                              })
                              .catch(err =>{
                                  expect(err).toBe('No se pudo encontrar el héroe');
                                  done();
                              })
    });
    


});