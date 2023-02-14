import React from 'react';
import PropTypes from 'prop-types';


const getSaludo = () => {
	return 'Hola a todo el mundo';
}

const newMessage = {
	message: 'Hola Mundo',
	nombre: 'Joan Pons Sanchis'
};

export const FirstApp = ({title, subTitle, name}) => {

	return (
		<>
			<h1 data-testid="test-title">{title}</h1>
			<code>{JSON.stringify(newMessage)}</code>
			<p>{subTitle}</p>
			<p>{name}</p>
		</>
	)
}


FirstApp.propTypes = {
	title: PropTypes.string.isRequired,
	subTitle: PropTypes.string
}

FirstApp.defaultProps = {
	name:'Joan Pons Sanchis',
	subTitle:'No hay subtítulo',
	title: 'No hay titulo',
}