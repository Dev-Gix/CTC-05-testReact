import React from 'react'
import {shallow} from 'enzyme';
import CounterApp from './CounterApp';

describe('Prueba de CounterApp',()=>{
    test('Match con snapshot ', () => {
      const  wrapper = shallow(<CounterApp />);
        expect(wrapper).toMatchSnapshot();
       
    });
    test('Debe de mostrar el valor por defecto de 100 ', () => {
        const  wrapper = shallow(<CounterApp />);
          expect(wrapper).toMatchSnapshot();
         
      });

      test('deve de mostrar el valor por defecto de 100 ',()=>{

        const  wrapper = shallow(<CounterApp value={100}/>);
        const counterText=wrapper.find('h2').text().trim();
        expect(counterText).toBe('100');

      })
    
})