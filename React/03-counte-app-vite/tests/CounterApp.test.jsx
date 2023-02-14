/** * @jest-environment jsdom */
import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";


describe('Pruebas en el <CounterApp />', () => {

	const value = 10;

	test('debe de hacer match con el snapshot', () => {

		const { container } = render(<CounterApp value={value} />);
		expect(container).toMatchSnapshot();

	});


	test('debe de mostrar el valor inicial de 100', () => {

		render(<CounterApp value={100} />);
		//screen.debug(); Para ver el objeto
		expect(screen.getByText(100)).toBeTruthy();

	});

	test('debe de incrementar con el botón +1', () => {

		render(<CounterApp value={value} />);
		fireEvent.click(screen.getByText('+1'));
		expect( screen.getByText('11')).toBeTruthy();
	});

	test('debe de decrementar con el botón -1', () => {

		render(<CounterApp value={value} />);
		fireEvent.click(screen.getByText('-1'));
		expect( screen.getByText('9')).toBeTruthy();
	});

	test('debe de funcionar el botón de reset', () => {

		render(<CounterApp value={value} />);
		fireEvent.click(screen.getByText('+1'));
		fireEvent.click(screen.getByText('+1'));
		fireEvent.click(screen.getByText('+1'));
		//fireEvent.click(screen.getByText('Reset'));
		//Hay que ponerle el aria-label para coger el nombre en el test
		fireEvent.click(screen.getByRole('button', {name: 'btn-reset'}));
		//expect( screen.getByText('10')).toBeTruthy();
	});

});