import { fireEvent, render, screen } from "@testing-library/react";
import { Calculator } from "../../src/components/Calculator";


describe('Tests in Calculator component', () => { 
    
    test('Should match with the snapshoot', () => {
        const { container } = render( <Calculator/> );

        expect( container ).toMatchSnapshot();
    });

    test('Should change the result from the h4 result', () => {
        render( <Calculator/> );
        fireEvent.click( screen.getByText('=') );

        expect( screen.getByRole('heading', { level: 4 }).innerHTML ).toBeTruthy();
    });

    test('Should change the content from the h1 screen', () => {
        render( <Calculator/> );
        fireEvent.click( screen.getAllByRole('button')[7] );

        expect( screen.getByRole('heading', { level: 1 }).innerHTML ).toBe('9');
    }); 

    test('Shoul show Syntax Error message if you click = with an empty number', () => {
        render( <Calculator/> );
        fireEvent.click( screen.getByText('=') );

        expect( screen.getByText('Syntax Error') );
    });

    test('Should clear the screen when you click AC', () => {
        render( <Calculator/> );
        fireEvent.click( screen.getByText('AC') );

        expect( screen.getByRole('heading', { level: 1 }).innerHTML ).toBe('');
        expect( screen.getByRole('heading', { level: 4 }).innerHTML ).toBe('0');
    });
 })