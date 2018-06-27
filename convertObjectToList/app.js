// Escribir una función llamada "convertObjectToList" que convierte un objeto literal en una array de arrays, como esto:

// Argumento:

// {
//   name: 'Holly',
//   edad: 35,
//   papel: 'productor'
// }
// Valor de retorno:

// [['name', 'Holly'], ['edad', 35], ['rol', 'productor']]
// Tenga en cuenta que su función debe ser capaz de manejar cualquier objeto como este, no sólo la muestra exacta proporcionada anteriormente.

// Por ejemplo, también debería ser capaz de manejar esto, o cualquier otro objeto que contiene pares clave-valor simples.

// {
//   species: 'canino',
//   name: 'Bowser',
//   weight: 45
// }

// const data = { 
//   name: 'Holly', 
//   age: 35, 
//   role: 'producer' 
// };

const convertObjectToList = object => {

  return Object.keys(object).map(element => [element, object[i]]);
};

console.log(convertObjectToList(data));

module.exports = convertObjectToList;