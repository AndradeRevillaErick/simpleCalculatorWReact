import { fireEvent, render, screen } from "@testing-library/react";
import { Calculator } from "../../src/components/Calculator";


describe('Tests in Calculator component', () => { 
    
    test('Should match with the snapshoot', () => {
        const { container } = render( <Calculator/> );

        expect( container ).toMatchSnapshot();
    });

    test('Should change the result from the result', () => {
        render( <Calculator/> );
        fireEvent.click( screen.getByText('=') );

        expect( screen.getByTestId('test-result').innerHTML ).toBe('Syntax Error');
    });

    test('Should change the content from the display', () => {
        render( <Calculator/> );
        fireEvent.click( screen.getAllByRole('button')[6] );

        expect( screen.getByTestId('test-display').innerHTML ).toBe('9');
    }); 

    test('Shoul show Syntax Error message if you click = with an empty number', () => {
        render( <Calculator/> );
        fireEvent.click( screen.getByText('=') );

        expect( screen.getByText('Syntax Error') );
    });

    test('Should clear the screen when you click AC', () => {
        render( <Calculator/> );
        fireEvent.click( screen.getByText('AC') );

        expect( screen.getByTestId('test-display').innerHTML ).toBe('');
        expect( screen.getByTestId('test-result').innerHTML ).toBe('0');
    });
 })