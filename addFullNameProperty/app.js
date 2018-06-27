// Escribe una función llamada "addFullNameProperty".

// Dado un objeto que tiene una propiedad "firstName" y una propiedad "lastName", "addFullNameProperty" devuelve una propiedad "fullName" cuyo valor es una cadena con el nombre y el apellido separados por un espacio.

// var person = {
//   firstName: 'Jade',
//   lastName: 'Smith'
// };
// addFullNameProperty(person);
// console.log(person.fullName); // --> 'Jade Smith'

const addFullNameProperty = obj => {
  obj.fullName = obj.firstName + ' ' + obj.lastName;
  return obj.fullName;
};

let person = {
  firstName: 'Jade',
  lastName: 'Smith'
};

addFullNameProperty(person);

module.exports = addFullNameProperty;