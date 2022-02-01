const letters = document.querySelector("#letters"); // letras en el tablero
const alph = document.getElementById('alphabet'); // letras del alfabeto
let lives = document.getElementById('nro-vidas'); // vidas
const image = document.getElementById('image'); // imagen


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
image.innerHTML = `<img class="mx-auto md:w-96 md:h-96 w-64 h-64 opacity-0" src="./assets/images/ahorc8v.webp"></img>`;


// Dibujo el alfabeto en el tablero
alphabet.forEach((letter) => {
    const span = document.createElement('span');   // Creamos un elemento span
    span.innerHTML = letter.toUpperCase() + ' ';   // Agregamos la letra mas un espacio
    alph.appendChild(span).classList.add('hover:text-gray-600', 'cursor-pointer', 'md:p-5','p-2', 'text-center', 'md:text-6xl', 'text-3xl', 'font-bold', 'text-gray-800'); // Agregamos el elemento al padre
    alph.appendChild(span).id = letter;
    // Agregamos el evento click a cada letra del alfabeto
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
                , 1000);
        } else {
            span.classList.add('text-green-600');
            setTimeout(() => {
                alph.removeChild(span).id;
            }
                , 1000);
        }
        
        const elementoImg = `<img class="mx-auto md:w-96 md:h-96 w-64 h-64" src="./assets/images/ahorc${vidas}v.webp"></img>`;
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
        // Si se quedó sin vidas pierde
        if (vidas === 0) {
            alph.innerHTML = 'Perdiste!!! La palabra era: ' + wordSelected.toUpperCase();
            alph.classList.add('text-red-600');
        }
        // Si se ganó
        if (guionesArr.join('') === arrWord.join('')) {
            alph.innerHTML = '';
            alph.innerHTML = 'Ganaste!!!';
            alph.classList.add('text-green-600');
        }
        
    });
});










