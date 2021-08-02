import '@testing-library/jest-dom'
import { getGifs } from '../../helpers/getGifs';


describe('test helpers getGifs', () => {
    
    test('getGifs', async () => {
        
        const category = 'homero';
        const element = await getGifs(category);
        
        expect( element.length ).toBe(20);

    })
    test('getGifs sin enviar category', async () => {
        
        // const category = 'homero';
        const element = await getGifs('');
        
        expect( element.length ).toBe( 0 );

    })

})
