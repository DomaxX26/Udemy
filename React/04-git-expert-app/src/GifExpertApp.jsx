import { useState } from "react";

export const GifExpertApp = () => {

	const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);

	const onAddCategory = () => {
		//Valorant
		//setCategories([...categories, 'Valorant'])
		setCategories(categories.concat('Valorant'));
	}

	console.log(categories);


	return (
		<>
			{/* Titulo */}
			<h1>GifExpertApp</h1>

			{/* Input */}

			{/* Listado de Gif */}
			<button onClick={onAddCategory}>Agregar</button>
			<ol>
				{categories.map( category => {
					return <li key={category}>{category}</li>
				})}
			</ol>
				{/* Gif Item */}
		</>
	)
}
