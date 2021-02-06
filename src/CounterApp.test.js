import React from 'react'
import {shallow} from 'enzyme';
import CounterApp from './CounterApp';

describe('Prueba de CounterApp',()=>{
  let  wrapper ;

      beforeEach(() => {
        wrapper = shallow(<CounterApp />);
      })

    test('Match con snapshot ', () => {
        expect(wrapper).toMatchSnapshot();
       
    });
    test('Debe de mostrar el valor por defecto de 100 ', () => {
      
          expect(wrapper).toMatchSnapshot();
         
      });

      test('deve de mostrar el valor por defecto de 100 ',()=>{

        const  wrapper = shallow(<CounterApp value={100}/>);

        const counterText=wrapper.find('h2').text().trim();

        expect(counterText).toBe('100');

      })
    
      test('Debe de incrementar con el boton de +1',()=>{
           wrapper.find('button').at(0).simulate('click');
           const counterText=wrapper.find('h2').text().trim();

           expect(counterText).toBe('11');
      })

      test('Debe de Decrementar con el boton de -1',()=>{
       
        wrapper.find('button').at(2).simulate('click');
        const counterText=wrapper.find('h2').text().trim();

        expect(counterText).toBe('9');
   })
})