const letters = document.querySelector("#letters"); // letras en el tablero
const alph = document.getElementById('alphabet'); // letras del alfabeto
const lives = document.getElementById('nro-vidas'); // vidas
const image = document.getElementById('image'); // imagen
const playAgain = document.getElementById('play-again'); // boton de jugar de nuevo

// variables globales
const words = ['manzana', 'banana', 'pera', 'perro', 'gato', 'rinoceronte', 'bicicleta', 'escopeta', 'canario'];
console.log(Math.floor(Math.random() * words.length));
const alphabet = 'abcdefghijklmnñopqrstuvwxyz'.split('');
let vidas = 8;
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
image.innerHTML = `<img class="mx-auto md:w-96 md:h-96 w-64 h-64" src="./assets/images/ahorc8v.webp" alt="Imagen Vida 8"></img>`;


// Dibujo el alfabeto en el tablero
alphabet.forEach((letter) => {
    const span = document.createElement('span');   // Creamos un elemento span
    span.innerHTML = letter.toUpperCase() + ' ';   // Agregamos la letra mas un espacio
    alph.appendChild(span).classList.add('cursor-pointer', 'md:p-5', 'p-2', 'text-center', 'md:text-6xl', 'text-3xl', 'font-bold', 'text-white', 'text-opacity-80'); // Agregamos el elemento al padre
    alph.appendChild(span).id = letter;
    // Agregamos el evento click a cada letra del alfabeto
    span.addEventListener('click', (e) => logicaFunc(e));

    const logicaFunc = (e) => {
        let letterClicked = e.target.id;
        let letterIndex = arrWord.indexOf(letterClicked);

        for (let i = 0; i < arrWord.length; i++) {
            if (arrWord[i] === letterClicked) {
                guionesArr[i] = letterClicked;
                letters.innerHTML = guionesArr.join(' ').toUpperCase();
            }
        }

        // Si la letra no esta en la palabra
        if (letterIndex === -1) {
            vidas--;
            lives.innerHTML = vidas;
            span.classList.add('text-red-600');
            setTimeout(() => {
                alph.removeChild(span).id;
                span.classList.add('line-through');
                // insertar letra en el tablero al final
                // alph.appendChild(span).innerHTML = `${letterClicked.toUpperCase()} `;
            }
                , 1000);
        } else {
            span.classList.add('text-green-600');
            setTimeout(() => {
                // alph.removeChild(span).id;
                span.classList.add('line-through');
            }
                , 1000);
        }

        // Switch para cambiar imagen según vida
        const elementoImg = `<img class="mx-auto md:w-96 md:h-96 w-64 h-64" src="./assets/images/ahorc${vidas}v.webp" alt=""></img>`;
        switch (vidas) {
            case 7:
                image.innerHTML = elementoImg;
                break;
            case 6:
                image.innerHTML = elementoImg;
                break;
            case 5:
                image.innerHTML = elementoImg;
                break;
            case 4:
                image.innerHTML = elementoImg;
                break;
            case 3:
                image.innerHTML = elementoImg;
                break;
            case 2:
                image.innerHTML = elementoImg;
                break;
            case 1:
                image.innerHTML = elementoImg;
                break;
            case 0:
                image.innerHTML = elementoImg;
                break;
        }

        // Creo el Boton de jugar de nuevo y le agrego el evento click
        const playAgainButton = () => {
            playAgain.innerHTML = `<button
                        class="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded">
                        JUGAR DE NUEVO
                        </button>`;
            playAgain.addEventListener('click', () => {
                location.reload();
            }
            );
        }

        // Si se quedó sin vidas pierde
        if (vidas === 0) {
            alph.innerHTML = 'Perdiste!!! La palabra era: ' + wordSelected.toUpperCase();
            alph.classList.add('text-red-600', 'text-opacity-80');   // Creamos un elemento button
            playAgainButton();
        }
        // Si se ganó
        if (guionesArr.join('') === arrWord.join('')) {
            alph.innerHTML = '';
            alph.innerHTML = 'Ganaste!!!';
            alph.classList.add('text-green-600', 'text-opacity-80');
            playAgainButton();
        }

    }
});











