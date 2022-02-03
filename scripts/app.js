const letters = document.querySelector("#letters"); // letras en el tablero
const alph = document.getElementById('alphabet'); // letras del alfabeto
const lives = document.getElementById('nro-vidas'); // vidas
const image = document.getElementById('image'); // imagen
const playAgain = document.getElementById('play-again'); // boton de jugar de nuevo
const history = document.getElementById('history'); // historial de letras

// variables globales
const words = ['manzana', 'banana', 'pera', 'perro', 'gato', 'rinoceronte', 'bicicleta', 'escopeta', 'canario'];
const alphabet = 'abcdefghijklmnñopqrstuvwxyz'.split('');  // Transformo el alfabeto en un array
let vidas = 8;
lives.innerHTML = vidas; // muestro las vidas en el html
let historyArr = []; // array para guardar las letras que se han usado

// Precargo los archivos de audio
const audioWin = new Audio('./assets/audios/youwin.mp3');
const audioLose = new Audio('./assets/audios/gameover.mp3');
const audioFail = new Audio('./assets/audios/wrong.mp3');
const audioRight = new Audio('./assets/audios/right.mp3');

const wordSelected = words[Math.floor(Math.random() * words.length)]; // Seleccionamos una palabra al azar multiplicando el numero aleatorio por la longitud del array
const wordArr = wordSelected.split(''); // Separamos la palabra en un array

console.log(wordSelected);
console.log(wordArr);

// Dibujo un array de guiones bajos
let guionesArr = [];
wordArr.forEach((letter) => {
    guionesArr.push('_');
}
);
letters.innerHTML = guionesArr.join(' ');

// Imagen por defecto
image.innerHTML = `<img class="mx-auto md:w-96 md:h-96 w-64 h-64" src="./assets/images/ahorc8v.webp" alt="Imagen Vida 8"></img>`;

// Dibujo el alfabeto en el tablero
alphabet.forEach((letter) => {
    const span = document.createElement('span');   // Creamos un elemento span
    span.innerHTML = letter.toUpperCase() + ' ';   // Agregamos la letra mas un espacio
    alph.appendChild(span).classList.add('cursor-pointer', 'md:p-5', 'p-2', 'text-center', 'md:text-6xl', 'text-3xl', 'font-bold', 'text-white', 'text-opacity-80'); // Agregamos el elemento al padre
    alph.appendChild(span).id = letter;

    // Agregamos el evento click a cada letra del alfabeto
    span.addEventListener('click', (e) => logicaFunc(e));

    // Funcion para el evento click
    const logicaFunc = (e) => {
        let letterClicked = e.target.id;
        let letterIndex = wordArr.indexOf(letterClicked);

        // Si la letra esta en el array
        for (let i = 0; i < wordArr.length; i++) {
            if (wordArr[i] === letterClicked) {
                guionesArr[i] = letterClicked;
                letters.innerHTML = guionesArr.join(' ').toUpperCase();
            }
        }

        // Si la letra no esta en la palabra
        if (letterIndex === -1) {
            vidas--;
            lives.innerHTML = vidas;
            span.classList.add('text-red-600');
            // reproducir audio de error
            audioFail.play().catch(e => console.log(e));

            setTimeout(() => {
                alph.removeChild(span).id;
            }
                , 1000);
        } else { // Si la letra esta en la palabra
            span.classList.add('text-green-600');
            // reproducir audio
            audioRight.play().catch(e => console.log(e));

            setTimeout(() => {
            alph.removeChild(span).id;
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
            // reproducir audio
            audioLose.play().catch(e => console.log(e));
        }
        // Si se ganó
        if (guionesArr.join('') === wordArr.join('')) {
            alph.innerHTML = '';
            alph.innerHTML = 'Ganaste!!!';
            alph.classList.add('text-green-600', 'text-opacity-80');
            playAgainButton();
            // reproducir audio
            audioWin.play().catch((e) => console.log(e));
        }
        
        // Historial de letras
        historyArr.unshift(letterClicked);
        console.log(historyArr);
        history.innerHTML = `<span class="text-4xl text-opacity-80">${historyArr.join(' - ').toUpperCase()}</span>`;
    }

});











