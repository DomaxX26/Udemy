import React from 'react'
import PropTypes from 'prop-types';

export const CounterApp = ({ value }) => {
	return (
		<>
			<h1>CounterApp</h1>
			<h2> {value} </h2>
		</>
	)
}

//Validación de los campos, mandado del padre que hereda el hijo
CounterApp.propTypes = {
	value: PropTypes.number.isRequired
}

