
//Para entender que hace el async
/* const getImagenPromesa = () => {
	const promesa = new Promise( (resolve, reject) => {
		resolve('https://asddasdadwdasdsd.com');
	} )

	return promesa;
}

getImagenPromesa().then( console.log ) */

const getImagen = async () => {

	try {
		const apiKey = 'MBkSSN88W3tJhDNpFfEDNY8M1idZmgMp';
		const respuesta = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
		const { data } = await respuesta.json();
		const { url } = data.images.original;

		const img = document.createElement('img');
		img.src = url;

		document.body.append(img);

		console.log(data);
	} catch (error) {
		console.error( error );
	}


}

getImagen();
