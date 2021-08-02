import '@testing-library/jest-dom';
import { renderHook } from '@testing-library/react-hooks';
import { useFetchGifs } from '../../hooks/useFetchGifs';

describe('pruebas en hooks', () => {
    
    test('retornar en estado inicials', async () => {

        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'Goku' ) );

        const { images , loading } = result.current;

        await waitForNextUpdate();
        
        expect( images ).toEqual([])
        // expect( loading ).toBe( true );
        expect( loading ).toBeTruthy();

    })
    
    test('retorna arreglo de imagenes y loading = false', async () => {
        
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'Goku' ) );
        
        await waitForNextUpdate();

        const { images , loading } = result.current;
        
        expect( images.length ).toBe( 20 )
        // expect( loading ).toBe( true );
        expect( loading ).toBeFalsy();

    })
    

})
