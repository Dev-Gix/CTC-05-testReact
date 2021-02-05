import React from 'react'
import {shallow} from 'enzyme';

//import { render } from '@testing-library/react';
import PrimeraApp from '../PrimeraApp';


describe('Prueba en <PrimerApp />',()=>{

/* test("mostrar mensaje Hola, soy Goku", () => {
        
        const saludo = 'Hola,soyGoku';

        const {getByText} = render(<PrimeraApp saludo={saludo} />)
       
        expect(getByText(saludo)).toBeInTheDocument();
    }); */

    test('debe de mostrar <PrimeraApp /> correctamente ', () => {
        const saludo = 'Hola, Soy Goku';
        const wrapper = shallow(<PrimeraApp saludo={saludo}/>)

        expect(wrapper).toMatchSnapshot();
    })

    test('Debe de mostrar el subtítulos enviado por props', () => {
        const saludo = 'Hola, soy Goky';
        const subtitulo ='Soy un subtitulo'
        const wrapper = shallow(<PrimeraApp  saludo = {saludo} subtitulo={subtitulo}/>);
        
        const textoParrafo = wrapper.find('p').text();
        expect(textoParrafo).toBe(subtitulo);
        
    })
    
    
});