//Funciones en JS

const saludar = function (nombre) {
	return `Hola, ${nombre}`;
}

const saludar2 = (nombre) => {
	return `Hola, ${nombre}`;
}

const saluda3 = (nombre) => `Hola, ${nombre}`;
const saludar4 = () => `Hola Mundo`;

//Funcion con la palabra return
const getUser = () => {
	return {
		uid: 'ABC123',
		username: 'El_Papi1502'
	}
}

//Funcion sin la palabra return, los parebtesis hace de return
const getUser2 = () => ({

	uid: 'ABC123',
	username: 'El_Papi1502'

})

//Ejercicio a realizar
//1. Transformar a un objeto de flecha
//2. Tiene que retornar un objecto implícito
//3. Pruebas

function getUsuarioActivo(nombre) {
	return {
		uid: 'ABC567',
		username: nombre
	}
};

const usuarioActivo = getUsuarioActivo('Fernando');

//Ejercicio relacidado

const getUsuarioActivo2 = (nombre) => (
	{
		uid: 'ABC567',
		username: nombre
	}
);

const usuarioActivo2 = getUsuarioActivo('Fernando');
console.log(usuarioActivo2);