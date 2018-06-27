// Dado un objeto como parámetro, contar la cantidad de propiedades que este contiene y retornarlo.

// Ejemplo:

// const output = objectPropertiesCounter({ 'name': 'John', 'lastname': 'Doe' });

// console.log(ouput); // -> 2 

const objectPropertiesCounter = (obj) => {
  const output = objectPropertiesCounter({ 'name': 'John', 'lastname': 'Doe' });
      (output.keys(obj).length);
    };

    