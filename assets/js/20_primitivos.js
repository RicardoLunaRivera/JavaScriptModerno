/* Hay 6 tipos de datos primitivos: 
 - string 
 - number,
 - bigint, 
 - boolean, 
 - undefined 
 - symbol

  También hay null, que aparentemente es primitivo, 
  pero de hecho es un caso especial para cada Object: 
  y cualquier tipo estructurado se deriva de null por 
  la Cadena de prototipos.
*/

let name = "Ricardo";
console.log(typeof name);

let age = 28;
console.log(typeof age);

let isMarried = false;
console.log(typeof isMarried);

let status;
console.log(typeof status);

let tipeOfBlood = Symbol("o");
console.log(tipeOfBlood);

let isNull = null;
console.log(isNull);
