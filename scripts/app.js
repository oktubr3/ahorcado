const letters = document.querySelector("#letters"); // letras en el tablero
const alph = document.getElementById('alphabet'); // letras del alfabeto

const words = [ 'manzana', 'banana', 'pera', 'perro', 'gato', 'rinoceronte', 'bicicleta', 'escopeta', 'canario' ]
console.log(Math.floor(Math.random() * words.length));
const alphabet = 'abcdefghijklmnñopqrstuvwxyz'.split('');

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

alphabet.forEach((letter) => {
    const span = document.createElement('span');
    span.innerHTML = letter.toUpperCase() + ' ';  // Agregamos un espacio despues de cada letra
    alph.appendChild(span).classList.add('hover:text-blue-700', 'focus:ring', 'text-center', 'cursor-pointer');
    alph.appendChild(span).id = letter;
});




