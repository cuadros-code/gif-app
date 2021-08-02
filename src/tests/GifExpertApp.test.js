import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import { GifExpertApp } from '../GifExpertApp';

describe('test component GifExpertApp', () => {
    
    test('renderer component', () => {
        
        const wrapper = shallow( <GifExpertApp /> )
        expect( wrapper ).toMatchSnapshot();

    })
    
    test('debe de mostrar lista de categorias ', () => {
        
        const categories = ['goku', 'homero'];
        const wrapper = shallow( <GifExpertApp defaultCategories={ categories } /> );

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('GifGrid').length ).toBe( categories.length );


    })
    

})
