

const activo = true;

// let mensaje = '';

// if ( activo ) {
// 	mensaje = 'Activo';
// }else { 
// mensaje = 'Inactivo';
// }

// const mensaje = ( activo ) ? 'Activo' : 'Inactivo';

//Manera corta de hacer un if
const mensaje = !activo && 'Activo';

console.log( mensaje );