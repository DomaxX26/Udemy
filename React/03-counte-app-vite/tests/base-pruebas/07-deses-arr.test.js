import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr";

describe('Pruebas 07-deses-arr', () => {

	test('Debe retornar un string y un número', () => {

		const [letters, numbers] = retornaArreglo();
		expect(letters).toBe('ABC');
		expect(numbers).toBe(123);

		expect(typeof letters).toBe('string');
		expect(typeof numbers).toBe('number');

		//Aquí validamos que nos pueda llega cualquier tipo de String
		expect( letters ).toEqual( expect.any(String) )

	});

});