// Escribir una función llamada "transformEmployeeData" que transforma algunos datos de los empleados de un formato a otro.
// El argumento se verá así:
// [
//   [
//     ['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']
//   ],
//   [
//     ['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']
//   ]
// ]
// Dado que la entrada, el valor devuelto debe verse como esto:

// [
//     {firstName: 'Joe', lastName: 'Blow', age: 42, role: 'clerk'},
//     {firstName: 'Mary', lastName: 'Jenkins', age: 36, role: 'manager'}
// ]
// Tenga en cuenta que la entrada puede tener un número diferente de filas o claves diferentes de la muestra dada.
// Por ejemplo, digamos que el departamento de recursos humanos agrega un campo "tshirtSize" a cada registro de empleado. Su código debería acomodarse de manera flexible.

function transformToObject (arreglo) {
  const retorno = [];
  for (let aTransformar of arreglo) {
    const objetoARetornar = {};
    for (let llaveValor of aTransformar) {
      objetoARetornar[llaveValor[0]] = llaveValor[1];
    }
    retorno.push(objetoARetornar);
  }
  return retorno;
}