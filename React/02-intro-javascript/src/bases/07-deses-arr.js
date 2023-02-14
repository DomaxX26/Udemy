
const personajes = ['Goku', 'Vegeta', 'Trunks'];

console.log(personajes[0]);

const [personaje1, personaje2] = personajes;
console.log(personaje1);

const retornaArreglo = () =>{
	return['ABC', 123]
}

const [letter, number] = retornaArreglo();
console.log(letter, number);

//Tarea
//1. El primer nombre del arreglo se llamará nombre
//2. El segundo se llamará setNombre
const funcionTarea = (valor) =>{
	return [valor, ()=>{console.log('Hola Mundo');}]
}

const [nombre, setNombre] = funcionTarea('Goku');
console.log(nombre);
setNombre();
