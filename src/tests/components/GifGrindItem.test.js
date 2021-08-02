import React from 'react';
import { GifGridItem } from '../../components/GifGridItem';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme';

describe('pruebas de componente', () => {

    const parameters = {
        title: 'dad',
        url:'dadad'
    } 

    const wrapper = shallow(<GifGridItem {...parameters} />);

    test('Test Component', () => {

        expect(wrapper).toMatchSnapshot();

    })

    test('parrafo con title', () => {
        
        const p = wrapper.find('p');
        expect( p.text().trim() ).toBe( parameters.title );
        
    })

    test('test imagen ', () => {
        
        const img = wrapper.find('img').prop('src');
        const alt = wrapper.find('img').prop('alt');
        expect( img ).toBe( parameters.url );
        expect( alt ).toBe( parameters.title );

    })

    test('validar clase de div', () => {
        
        const div = wrapper.find('div');
        expect( div.hasClass('animate__fadeIn') ).toBe(true);

    })
    
})

