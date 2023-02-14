import heroes from '../data/heroes';

//Metodo find, solo busca un elemento
export const getHeroeById = (id) => {
	return heroes.find(element => element.id === id);
}
// console.log(getHeroeById(2));


//Metodo filter, devuelte todos los elementos que tenga para buscar
export const getHeroeByOwner = (owner) => {
	return heroes.filter(heroes => heroes.owner === owner);
}

console.log(getHeroeByOwner('Marvel'));

