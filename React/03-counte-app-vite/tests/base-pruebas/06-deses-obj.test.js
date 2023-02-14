import { usContext } from "../../src/base-pruebas/06-deses-obj";

describe('Pruebas en 06-deses-obj', () => {

	test('usContext debe de retornar un objecto', () => {

		const key = "Prueba Test";
		const age = 21;
	

		const uscontext = usContext({clave:key, edad:age});

		console.log(uscontext);

		expect(uscontext).toEqual({
			nombreClave: key,
			anios: age,
			latlng: {
				lat: 14.1232,
				lng: -12.3232
			}
		})

	})

})