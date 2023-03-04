import { fireEvent, render, screen } from "@testing-library/react";
import { Calculator } from "../../src/components/Calculator";


describe('Tests in Calculator component', () => { 
    
    test('Should match with the snapshoot', () => {
        const { container } = render( <Calculator/> );

        expect( container ).toMatchSnapshot();
    });

    test('Should change the result from the h4 result', () => {

    });

    test('Should change the content from the h1 screen', () => {
        render( <Calculator/> );
        fireEvent.click( screen.getAllByRole('button') );

        expect( screen.getByText('Syntax Error'));
    }); 

    test('Shoul show Syntax Error message if you click = with an empty number', () => {
        render( <Calculator/> );
        fireEvent.click( screen.getByText('=') );

        expect( screen.getByText('Syntax Error') );
    });
 })