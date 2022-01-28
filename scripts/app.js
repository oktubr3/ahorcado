// Conectores:
const letters = document.querySelector("#letters"); // letras en el tablero
const alph = document.getElementById('alphabet'); // letras del alfabeto
let lives = document.getElementById('nro-vidas'); // vidas


const words = [ 'manzana', 'banana', 'pera', 'perro', 'gato', 'rinoceronte', 'bicicleta', 'escopeta', 'canario' ];
console.log(Math.floor(Math.random() * words.length));
const alphabet = 'abcdefghijklmnñopqrstuvwxyz'.split('');
let vidas = 10;
lives.innerHTML = vidas;

const wordSelected = words[Math.floor(Math.random() * words.length)]; // Seleccionamos una palabra al azar multiplicando el numero aleatorio por la longitud del array
console.log(wordSelected);


const arrWord = wordSelected.split(''); // Separamos la palabra en un array
console.log(arrWord);

// Dibujo un array de guiones bajos
let guionesArr = [];

arrWord.forEach((letter) => {
    guionesArr.push('_');
    }
);
letters.innerHTML = guionesArr.join(' ');

alphabet.forEach((letter) => {
    const span = document.createElement('span');   // Creamos un elemento span
    span.innerHTML = letter.toUpperCase() + ' ';   // Agregamos la letra mas un espacio
    alph.appendChild(span).classList.add('hover:text-blue-800', 'cursor-pointer');
    alph.appendChild(span).id = letter;
    span.addEventListener('click', (e) => {
        let letterClicked = e.target.id;
        let letterIndex = arrWord.indexOf(letterClicked);
        for (let i = 0; i < arrWord.length; i++) {
            if (arrWord[i] === letterClicked) {
                guionesArr[i] = letterClicked;
                letters.innerHTML = guionesArr.join(' ').toUpperCase();
            }
        }
        if (letterIndex === -1) {
            vidas--;
            lives.innerHTML = vidas;
            span.classList.add('text-red-600');
            setTimeout(() => {
                alph.removeChild(span).id;
            }
            , 1500);
        }
        if (vidas === 0) {
            alert('Perdiste, seguí intentando, la palabra era: ' + wordSelected);
        }
        if (guionesArr.join('') === arrWord.join('')) {
            alph.innerHTML = '';
            alph.innerHTML = 'Ganaste!!!';
        }
    });
});





