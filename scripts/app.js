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



// Dibujo el alfabeto en el tablero
alphabet.forEach((letter) => {
    const span = document.createElement('span');   // Creamos un elemento span
    span.innerHTML = letter.toUpperCase() + ' ';   // Agregamos la letra mas un espacio
    alph.appendChild(span).classList.add('hover:text-blue-800', 'cursor-pointer');
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
                , 1500);
        }
        switch (vidas) {
            case 8:
                image.innerHTML = '<img class="mx-auto h-80 w-80" src="../assets/images/ahorc7v.png"></img>';
                break;
            case 7:
                image.innerHTML = '<img class="mx-auto h-80 w-80" src="../assets/images/ahorc7v.png"></img>';
                break;
            case 6:
                image.innerHTML = '<img class="mx-auto h-80 w-80" src="../assets/images/ahorc6v.png"></img>';
                break;
            case 5:
                image.innerHTML = '<img class="mx-auto h-80 w-80" src="../assets/images/ahorc5v.png"></img>';
                break;
            case 4:
                image.innerHTML = '<img class="mx-auto h-80 w-80" src="../assets/images/ahorc4v.png"></img>';
                break;
            case 3:
                image.innerHTML = '<img class="mx-auto h-80 w-80" src="../assets/images/ahorc3v.png"></img>';
                break;
            case 2:
                image.innerHTML = '<img class="mx-auto h-80 w-80" src="../assets/images/ahorc2v.png"></img>';
                break;
            case 1:
                image.innerHTML = '<img class="mx-auto h-80 w-80" src="../assets/images/ahorc1v.png"></img>';
                break;
            case 0:
                image.innerHTML = '<img class="mx-auto h-80 w-80" src="../assets/images/ahorc0vxx.png"></img>';
                break;
        }
        // Si se quedó sin vidas pierde
        if (vidas === 0) {
            alph.innerHTML = 'Perdiste, la palabra era: ' + wordSelected;
            alph.classList.add('text-red-600');
        }
        if (guionesArr.join('') === arrWord.join('')) {
            alph.innerHTML = '';
            alph.innerHTML = 'Ganaste!!!';
            alph.classList.add('text-green-600');
        }
        
    });
});










