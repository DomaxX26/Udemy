//Desestruccturación

const persona = {
	nombre:'Tony',
	edad: 45,
	clave:'Ironman',
};

console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.clave); 

//Para substituir los consoles.log anteriores Desestructuraremos el objeto
//Los dos puntos hace renombrar el valor de la izquierda

const {nombre:renombre} = persona;
console.log(renombre);

//Con los dos corchetes {} en los argumentos desestructuramos el objeto directamente
const datosPersona = ({nombre, edad, clave, rango = 'Capitán'}) =>{
	//console.log( nombre, edad, rango);

	return {
		nombreClave:clave,
		anios:edad,
		latlng:{
			lat:14.1232,
			lng:-12.1231
		}
	}
}

const {nombreClave, anios, latlng} = datosPersona(persona);
const {lat,lng} = latlng;

console.log(nombreClave, anios);
console.log(lat,lng);