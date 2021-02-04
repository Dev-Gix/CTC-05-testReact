import { getImagen } from "../../base/11-async-await"

describe('Prueba de 11-async-await.test.js',()=>{
        test('Debe retornar una url de una imagen', (done) => {
            getImagen()
                        .then(resolve =>{
                            expect(resolve.includes('https://')).toBe(true);
                            done();
                        })
        })
        
})

