import React from 'react';
import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import '@testing-library/jest-dom'
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('test the component GifGrid', () => {
    
    const category = 'Goku';
    
    test('test rederer succeful', () => {

        useFetchGifs.mockReturnValue({
            images:[],
            loading:true
        });

        const wrapper = shallow( <GifGrid category={ category } /> );
        expect( wrapper ).toMatchSnapshot();
        
    });

    test('debe de mostrar item al cargar imagenes con useFetchGifs', () => {
        
        const gifs = [{
            id: 'abc',
            url: 'https://gid.png',
            title: 'hola mundo'
        }];
        
        useFetchGifs.mockReturnValue({
            images: gifs,
            loading:false
        });

        const wrapper = shallow( <GifGrid category={ category } /> );
        
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('p').exists() ).toBe(false);
        expect( wrapper.find('GifGridItem').length ).toBe( gifs.length );


    })
    
    

})
