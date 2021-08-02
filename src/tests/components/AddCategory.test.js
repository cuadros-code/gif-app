import React from 'react';
import { shallow } from 'enzyme'
import '@testing-library/jest-dom'
import { AddCategory } from '../../components/AddCategory'

describe('test component AddCategory', () => {
    
    const categories = jest.fn(); // simula la funcion con jest

    let wrapper = shallow(<AddCategory  categories={categories} />);

    beforeEach( () => {

        jest.clearAllMocks();
        wrapper = shallow(<AddCategory  categories={categories} />);


    } )

    test('render component', () => {
     
        expect( wrapper ).toMatchSnapshot();

    })

    // test('change in input text', () => {
        
    //     const input = wrapper.find('input');

    //     const value = 'hola' 

    //     input.simulate('change', { target: { value } });


    // })

    // test('no postear la informacion con submit ', () => {
        
    //     // forma corta de definir una funcion preventDefault(){};
    //     wrapper.find('form').simulate('submit', { preventDefault: () => {} });

    //     expect( categories ).not.toHaveBeenCalled();

    // })
    

    test('debe de llamar setcategories y limpiar la caja ', () => {
      
        
        const input = wrapper.find('input');
        const value = 'goku'

        input.simulate('change', { target: { value } });

        wrapper.find('form').simulate('submit', { preventDefault(){} } );
        
        expect( categories ).toHaveBeenCalled();
        expect( categories ).toHaveBeenCalledWith( expect.any(Function) ); // espera una funcion

        const valueInput = input.text();
        
        expect( valueInput ).toBe('');

    })
    
    
    

})
