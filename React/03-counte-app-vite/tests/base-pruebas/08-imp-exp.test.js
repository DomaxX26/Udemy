import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";

describe('Prueba 08-imp-exp', () => {

	test('getHeroeById debe retornar un héroe por ID', () => {

		const id = 1;
		const hero = getHeroeById(id);

		expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' });


	});

	test('getHeroeById debe retornar undefine si no existe un héroe por ID', () => {

		const id = 100;
		const hero = getHeroeById(id);

		expect(hero).toBeFalsy();

	});

	//Tarea:
	//Debe de retornar un arreglo con los héroes de DC
	//Length === 3
	//toEqual al arreglo filtrado

	//debe de retornar un arreglo con los héroes de Marvel
	//length === 2

	test('getHeroByOwner debe retornar un arreglo con los héroes de DC', () => {

		const owner = 'DC';
		const hero = getHeroesByOwner(owner)

		expect(hero.length).toBe(3);

		//expect( hero ).toEqual( [{id:1, name:'Batman' , owner:'DC'},{id:3, name:'Superman' , owner:'DC'},{id:4, name:'Flash' , owner:'DC'} ] );
		//expect( hero ).toEqual( expect.arrayContaining(hero) );
		expect(hero).toEqual(heroes.filter((heroe) => heroe.owner === owner));
	});

	test('getHeroByOwner debe retornar un arreglo con los héroes de Marvel', () => {

		const owner = 'Marvel';
		const hero = getHeroesByOwner(owner);
		expect(hero.length).toBe(2);

		expect(hero).toEqual(expect.arrayContaining(hero));


	})

});