import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe('Prueba 08-imp-exp.test.js',()=>{

    test('Debe de retornar por ID', () => {
        const id = 1;
        const heroe = getHeroeById(id);

        const heroesData = heroes.find( h => h.id === id);

        expect(heroesData).toEqual(heroe);
        
    })

    test('Debe Retornar Undefined si no existe el Héroe', () => {
        const id = 11;
        const heroe = getHeroeById(id);

        const heroesData = heroes.find( h => h.id === id);

        expect(heroesData).toBe(undefined);
        
    })

    /*Tarea
    Retornar un arreglo con los héroes de DC
    ~toEqual al arreglo filtrado */

    test('Retorna un arreglo con los héroes de DC ', () => {
        const owner = 'DC';
        const arrHero = getHeroesByOwner(owner);

        const arrHeroData = heroes.filter(h => h.owner === owner);

        console.log(arrHeroData)
        /expect(arrHero).toEqual(arrHeroData);
    })

    test('Retorna un arreglo con los héroes de Marvel ', () => {
        const owner = 'Marvel';
        const heroes = getHeroesByOwner(owner);

       
        expect(heroes.length).toEqual(2);
    })
    
    
})



