const letters = document.querySelector("#letters"); // letras en el tablero

const words = [ 'manzana', 'banana', 'pera', 'perro', 'gato', 'rinoceronte', 'bicicleta', 'escopeta', 'canario' ]
console.log(Math.floor(Math.random() * words.length));

const wordSelected = words[Math.floor(Math.random() * words.length)]; // Seleccionamos una palabra al azar multiplicando el numero aleatorio por la longitud del array
console.log(wordSelected);


const arrWord = wordSelected.split(''); // Separamos la palabra en un array
console.log(arrWord);

// Dibujo un array de guiones bajos
let guiones = [];

arrWord.forEach((letter) => {
    guiones.push('_');
    }
);
letters.innerHTML = guiones.join(' ');



