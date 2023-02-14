import { getHeroeById } from "./bases/08-imp-exp";

/*const promesa = new Promise((resolve, reject) => {
	setTimeout(() => {
		//Tarea
		// Importen la función del archivo 08-imp-exp.js
		const heroe = getHeroeById(2);
		resolve( heroe );
		reject('No se pudo encontrar el héroe');
	}, 2000);
});


promesa.then( (heroe) => {
console.log('Heroe', heroe);
})
.catch( err => console.warn( err ));

 */

const getHeroeByIdAsync = (id) => {

	return new Promise((resolve, reject) => {
		setTimeout(() => {
			//Tarea
			// Importen la función del archivo 08-imp-exp.js
			const heroe = getHeroeById(id);
			
			if(heroe){
				resolve(heroe);
			}else{
				reject('No se pudo encontrar el héroe');
			}
		}, 2000);
	});

	
}

getHeroeByIdAsync(5)
	.then(console.log)
	.catch( err => console.error( err ));