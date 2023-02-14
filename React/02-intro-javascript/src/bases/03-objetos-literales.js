
const persona = {
	nombre: 'Joan',
	apellido: 'Pons',
	edad: 21,
	direccion: {
		calle:'Gabriel Miro',
		ciudad: 'Oliva',
		codigoPostal: 46780,
	}
};

//console.table(persona);

console.log(persona);

//No hacer, copia de la referencia no del objeto
//const persona2 = persona;

//...nombreObjeto, los tres puntos sirven para hacer una copia exacta del objeto referenciado
const persona2 = {...persona}
persona2.nombre = "Paco";

console.log(persona2);