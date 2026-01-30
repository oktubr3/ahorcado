// ============================================================
// JUEGO DEL AHORCADO - NIVEL DIOS 🔥
// ============================================================

// Referencias al DOM
const letters = document.querySelector("#letters");
const alph = document.getElementById('alphabet');
const lives = document.getElementById('nro-vidas');
const image = document.getElementById('image');
const playAgain = document.getElementById('play-again');
const history = document.getElementById('history');

// Estado del juego
const gameState = {
    vidas: 8,
    maxVidas: 8,
    historyArr: [],
    wordSelected: '',
    wordArr: [],
    guionesArr: [],
    score: 0,
    streak: 0,
    hints: 3,
    category: '',
    difficulty: 'normal',
    timeLimit: 0,
    timeRemaining: 0,
    timerInterval: null,
    gamesPlayed: 0,
    gamesWon: 0,
    gamesLost: 0,
    totalScore: 0,
    bestScore: 0,
    keyboardEnabled: true
};

// Cargar estadísticas desde localStorage
function loadStats() {
    const stats = localStorage.getItem('ahorcadoStats');
    if (stats) {
        const parsed = JSON.parse(stats);
        gameState.gamesPlayed = parsed.gamesPlayed || 0;
        gameState.gamesWon = parsed.gamesWon || 0;
        gameState.gamesLost = parsed.gamesLost || 0;
        gameState.totalScore = parsed.totalScore || 0;
        gameState.bestScore = parsed.bestScore || 0;
        gameState.streak = parsed.streak || 0;
    }
}

// Guardar estadísticas en localStorage
function saveStats() {
    const stats = {
        gamesPlayed: gameState.gamesPlayed,
        gamesWon: gameState.gamesWon,
        gamesLost: gameState.gamesLost,
        totalScore: gameState.totalScore,
        bestScore: gameState.bestScore,
        streak: gameState.streak
    };
    localStorage.setItem('ahorcadoStats', JSON.stringify(stats));
}

// Alfabeto español completo
const alphabet = 'abcdefghijklmnñopqrstuvwxyz'.split('');

// Precarga de audio
const audioWin = new Audio('./assets/audios/youwin.mp3');
const audioLose = new Audio('./assets/audios/gameover.mp3');
const audioFail = new Audio('./assets/audios/wrong.mp3');
const audioRight = new Audio('./assets/audios/right.mp3');

// ============================================================
// FUNCIONES DE INICIALIZACIÓN
// ============================================================

function initGame() {
    loadStats();
    showDifficultySelector();
}

function showDifficultySelector() {
    const difficultyHTML = `
        <div class="text-center p-6 space-y-6">
            <h2 class="text-4xl font-bold text-white mb-8 amatic-font">Selecciona Dificultad</h2>
            <div class="grid grid-cols-2 gap-4">
                <button onclick="selectDifficulty('facil')" 
                    class="bg-green-500 hover:bg-green-600 text-white font-semibold py-6 px-6 rounded-lg text-2xl transition-all transform hover:scale-105 amatic-font">
                    FÁCIL<br><span class="text-base font-normal">10 vidas • 4-6 letras</span>
                </button>
                <button onclick="selectDifficulty('normal')" 
                    class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-6 px-6 rounded-lg text-2xl transition-all transform hover:scale-105 amatic-font">
                    NORMAL<br><span class="text-base font-normal">8 vidas • 7-10 letras</span>
                </button>
                <button onclick="selectDifficulty('dificil')" 
                    class="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-6 px-6 rounded-lg text-2xl transition-all transform hover:scale-105 amatic-font">
                    DIFÍCIL<br><span class="text-base font-normal">6 vidas • 11-15 letras</span>
                </button>
                <button onclick="selectDifficulty('imposible')" 
                    class="bg-red-500 hover:bg-red-600 text-white font-semibold py-6 px-6 rounded-lg text-2xl transition-all transform hover:scale-105 amatic-font">
                    IMPOSIBLE<br><span class="text-base font-normal">4 vidas • 16+ letras</span>
                </button>
            </div>
            <div class="mt-8 text-white text-lg space-y-2">
                <p class="font-semibold">Estadísticas</p>
                <p>Partidas: ${gameState.gamesPlayed} | Ganadas: ${gameState.gamesWon} | Perdidas: ${gameState.gamesLost}</p>
                <p>Mejor Puntuación: ${gameState.bestScore} | Racha: ${gameState.streak}</p>
            </div>
        </div>
    `;
    alph.innerHTML = difficultyHTML;
}

function selectDifficulty(difficulty) {
    gameState.difficulty = difficulty;
    showCategorySelector();
}

function showCategorySelector() {
    const categoriesHTML = `
        <div class="text-center p-6 space-y-6">
            <h2 class="text-4xl font-bold text-white mb-8 amatic-font">Selecciona Categoría</h2>
            <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
                ${Object.keys(gameData.categories).map(catKey => {
                    const cat = gameData.categories[catKey];
                    return `
                        <button onclick="selectCategory('${catKey}')" 
                            class="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-4 px-6 rounded-lg text-xl transition-all transform hover:scale-105">
                            ${cat.name}
                        </button>
                    `;
                }).join('')}
                <button onclick="selectCategory('random')" 
                    class="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-4 px-6 rounded-lg text-xl transition-all transform hover:scale-105 col-span-2 md:col-span-3">
                    Aleatorio
                </button>
            </div>
        </div>
    `;
    alph.innerHTML = categoriesHTML;
}

function selectCategory(category) {
    if (category === 'random') {
        const categories = Object.keys(gameData.categories);
        category = categories[Math.floor(Math.random() * categories.length)];
    }
    gameState.category = category;
    startGame();
}

function startGame() {
    // Configurar dificultad
    const difficulty = gameData.difficulties[gameState.difficulty];
    gameState.maxVidas = difficulty.lives;
    gameState.vidas = difficulty.lives;
    gameState.timeLimit = difficulty.timeLimit;
    gameState.timeRemaining = difficulty.timeLimit;
    
    // Seleccionar palabra según dificultad y categoría
    const categoryWords = gameData.categories[gameState.category].words;
    const filteredWords = categoryWords.filter(word => 
        word.length >= difficulty.minLength && word.length <= difficulty.maxLength
    );
    
    if (filteredWords.length === 0) {
        // Si no hay palabras en ese rango, usar todas
        gameState.wordSelected = categoryWords[Math.floor(Math.random() * categoryWords.length)];
    } else {
        gameState.wordSelected = filteredWords[Math.floor(Math.random() * filteredWords.length)];
    }
    
    gameState.wordArr = gameState.wordSelected.split('');
    gameState.guionesArr = gameState.wordArr.map(() => '_');
    gameState.historyArr = [];
    gameState.score = 0;
    gameState.hints = 3;
    
    // Renderizar interfaz
    renderGame();
    startTimer();
}

function renderGame() {
    // Mostrar palabra
    letters.innerHTML = gameState.guionesArr.join(' ').toUpperCase();
    
    // Mostrar vidas
    lives.innerHTML = gameState.vidas;
    
    // Mostrar imagen
    updateImage();
    
    // Dibujar alfabeto
    drawAlphabet();
    
    // Mostrar info del juego
    updateGameInfo();
}

function updateImage() {
    const imgSrc = `./assets/images/ahorc${gameState.vidas}v.webp`;
    image.innerHTML = `<img class="mx-auto md:w-96 md:h-96 w-64 h-64 transition-all duration-300 ease-in" src="${imgSrc}" alt="Vida ${gameState.vidas}"></img>`;
}

function drawAlphabet() {
    alph.innerHTML = '';
    alphabet.forEach((letter) => {
        const button = document.createElement('button');
        button.innerHTML = letter.toUpperCase();
        button.id = letter;
        button.classList.add('cursor-pointer', 'md:p-5', 'p-2', 'text-center', 'md:text-6xl', 'text-3xl', 'font-bold', 'text-white', 'text-opacity-80', 'transition-all', 'hover:scale-110');
        
        button.addEventListener('click', () => handleLetterClick(letter));
        alph.appendChild(button);
    });
}

function updateGameInfo() {
    const categoryInfo = gameData.categories[gameState.category];
    const difficultyInfo = gameData.difficulties[gameState.difficulty];
    
    history.innerHTML = `
        <div class="flex flex-col md:flex-row justify-center items-center gap-3 text-base md:text-lg">
            <span class="text-white bg-purple-600 px-3 py-1 rounded font-medium">${categoryInfo.name}</span>
            <span class="text-white bg-${difficultyInfo.color}-600 px-3 py-1 rounded font-medium">${difficultyInfo.name}</span>
            <span class="text-white bg-yellow-600 px-3 py-1 rounded font-medium">${gameState.score} puntos</span>
            <span class="text-white bg-blue-600 px-3 py-1 rounded font-medium">${Math.floor(gameState.timeRemaining)}s</span>
            <span class="text-white bg-green-600 px-3 py-1 rounded font-medium">${gameState.hints} pistas</span>
            <button onclick="useHint()" class="bg-orange-500 hover:bg-orange-600 text-white px-4 py-1 rounded font-medium transition-all">
                Usar Pista
            </button>
        </div>
    `;
}

// ============================================================
// TEMPORIZADOR
// ============================================================

function startTimer() {
    if (gameState.timerInterval) {
        clearInterval(gameState.timerInterval);
    }
    
    gameState.timerInterval = setInterval(() => {
        gameState.timeRemaining -= 0.1;
        updateGameInfo();
        
        if (gameState.timeRemaining <= 0) {
            clearInterval(gameState.timerInterval);
            endGame(false, '¡Se acabó el tiempo!');
        }
    }, 100);
}

// ============================================================
// LÓGICA DEL JUEGO
// ============================================================

function handleLetterClick(letter) {
    if (!gameState.keyboardEnabled) return;
    
    const button = document.getElementById(letter);
    if (button.disabled) return;
    
    button.disabled = true;
    gameState.historyArr.unshift(letter);
    
    // Verificar si la letra está en la palabra
    let found = false;
    for (let i = 0; i < gameState.wordArr.length; i++) {
        if (gameState.wordArr[i] === letter) {
            gameState.guionesArr[i] = letter;
            found = true;
        }
    }
    
    if (found) {
        // Letra correcta
        button.classList.add('text-green-400', 'scale-125');
        gameState.score += 10 * gameData.difficulties[gameState.difficulty].scoreMultiplier;
        audioRight.play().catch(e => console.log(e));
        
        // Efecto de partículas
        createParticles(button, '✓');
    } else {
        // Letra incorrecta
        button.classList.add('text-red-400', 'scale-75');
        gameState.vidas--;
        lives.innerHTML = gameState.vidas;
        audioFail.play().catch(e => console.log(e));
        
        // Efecto shake
        image.classList.add('animate-shake');
        setTimeout(() => image.classList.remove('animate-shake'), 500);
        
        createParticles(button, '✗');
    }
    
    updateImage();
    letters.innerHTML = gameState.guionesArr.join(' ').toUpperCase();
    updateGameInfo();
    
    // Verificar fin del juego
    if (gameState.vidas === 0) {
        endGame(false, '¡Perdiste! La palabra era: ' + gameState.wordSelected.toUpperCase());
    } else if (gameState.guionesArr.join('') === gameState.wordArr.join('')) {
        // Bonus por tiempo restante
        const timeBonus = Math.floor(gameState.timeRemaining * 5);
        gameState.score += timeBonus;
        endGame(true, '¡GANASTE! 🎉');
    }
}

// ============================================================
// SISTEMA DE PISTAS
// ============================================================

function useHint() {
    if (gameState.hints <= 0) {
        alert('¡No tienes más pistas!');
        return;
    }
    
    if (!gameState.keyboardEnabled) return;
    
    gameState.hints--;
    gameState.score -= 20; // Costo de pista
    
    // Revelar una letra aleatoria no descubierta
    const hiddenIndices = [];
    for (let i = 0; i < gameState.guionesArr.length; i++) {
        if (gameState.guionesArr[i] === '_') {
            hiddenIndices.push(i);
        }
    }
    
    if (hiddenIndices.length > 0) {
        const randomIndex = hiddenIndices[Math.floor(Math.random() * hiddenIndices.length)];
        const letter = gameState.wordArr[randomIndex];
        
        // Simular click en la letra
        const button = document.getElementById(letter);
        if (button && !button.disabled) {
            button.click();
        }
    }
    
    updateGameInfo();
}

// ============================================================
// FIN DEL JUEGO
// ============================================================

function endGame(won, message) {
    clearInterval(gameState.timerInterval);
    gameState.keyboardEnabled = false;
    
    // Actualizar estadísticas
    gameState.gamesPlayed++;
    if (won) {
        gameState.gamesWon++;
        gameState.streak++;
        gameState.totalScore += gameState.score;
        if (gameState.score > gameState.bestScore) {
            gameState.bestScore = gameState.score;
        }
        audioWin.play().catch(e => console.log(e));
        
        // Efecto de confeti
        createConfetti();
    } else {
        gameState.gamesLost++;
        gameState.streak = 0;
        audioLose.play().catch(e => console.log(e));
    }
    
    saveStats();
    
    // Mostrar mensaje
    alph.innerHTML = `
        <div class="text-center p-6 space-y-6">
            <h2 class="text-5xl font-bold ${won ? 'text-green-400' : 'text-red-400'} amatic-font">${message}</h2>
            <p class="text-3xl text-white">Puntuación: ${gameState.score}</p>
            <p class="text-2xl text-white">Racha: ${gameState.streak}</p>
            <div class="space-y-3 mt-6">
                <button onclick="location.reload()" 
                    class="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-lg text-2xl transition-all transform hover:scale-105 w-full amatic-font">
                    Jugar de Nuevo
                </button>
                <button onclick="showStats()" 
                    class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg text-2xl transition-all transform hover:scale-105 w-full amatic-font">
                    Ver Estadísticas
                </button>
            </div>
        </div>
    `;
    
    history.innerHTML = '';
}

function showStats() {
    const winRate = gameState.gamesPlayed > 0 
        ? ((gameState.gamesWon / gameState.gamesPlayed) * 100).toFixed(1) 
        : 0;
    
    alph.innerHTML = `
        <div class="text-center p-6 space-y-6">
            <h2 class="text-4xl font-bold text-white mb-6 amatic-font">Estadísticas</h2>
            <div class="grid grid-cols-2 gap-4 text-lg text-white">
                <div class="bg-blue-600 p-4 rounded-lg">
                    <p class="text-3xl font-bold">${gameState.gamesPlayed}</p>
                    <p class="text-sm">Partidas Jugadas</p>
                </div>
                <div class="bg-green-600 p-4 rounded-lg">
                    <p class="text-3xl font-bold">${gameState.gamesWon}</p>
                    <p class="text-sm">Victorias</p>
                </div>
                <div class="bg-red-600 p-4 rounded-lg">
                    <p class="text-3xl font-bold">${gameState.gamesLost}</p>
                    <p class="text-sm">Derrotas</p>
                </div>
                <div class="bg-purple-600 p-4 rounded-lg">
                    <p class="text-3xl font-bold">${winRate}%</p>
                    <p class="text-sm">Porcentaje Victoria</p>
                </div>
                <div class="bg-yellow-600 p-4 rounded-lg">
                    <p class="text-3xl font-bold">${gameState.bestScore}</p>
                    <p class="text-sm">Mejor Puntuación</p>
                </div>
                <div class="bg-orange-600 p-4 rounded-lg">
                    <p class="text-3xl font-bold">${gameState.streak}</p>
                    <p class="text-sm">Racha Actual</p>
                </div>
            </div>
            <button onclick="location.reload()" 
                class="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-lg text-2xl transition-all transform hover:scale-105 mt-6 amatic-font">
                Volver a Jugar
            </button>
        </div>
    `;
}

// ============================================================
// EFECTOS VISUALES
// ============================================================

function createParticles(element, symbol) {
    const rect = element.getBoundingClientRect();
    for (let i = 0; i < 5; i++) {
        const particle = document.createElement('div');
        particle.textContent = symbol;
        particle.style.position = 'fixed';
        particle.style.left = rect.left + rect.width / 2 + 'px';
        particle.style.top = rect.top + rect.height / 2 + 'px';
        particle.style.fontSize = '24px';
        particle.style.fontWeight = 'bold';
        particle.style.pointerEvents = 'none';
        particle.style.zIndex = '9999';
        particle.style.color = symbol === '✓' ? '#4ade80' : '#f87171';
        
        document.body.appendChild(particle);
        
        const angle = (Math.PI * 2 * i) / 5;
        const velocity = 100;
        const vx = Math.cos(angle) * velocity;
        const vy = Math.sin(angle) * velocity - 50;
        
        let x = 0, y = 0, opacity = 1;
        const animate = () => {
            x += vx * 0.016;
            y += vy * 0.016 + 50 * 0.016; // gravity
            opacity -= 0.02;
            
            particle.style.transform = `translate(${x}px, ${y}px)`;
            particle.style.opacity = opacity;
            
            if (opacity > 0) {
                requestAnimationFrame(animate);
            } else {
                particle.remove();
            }
        };
        animate();
    }
}

function createConfetti() {
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#ffa07a', '#98d8c8', '#f7dc6f'];
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.style.position = 'fixed';
            confetti.style.left = Math.random() * window.innerWidth + 'px';
            confetti.style.top = '-10px';
            confetti.style.width = '10px';
            confetti.style.height = '10px';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.pointerEvents = 'none';
            confetti.style.zIndex = '9999';
            confetti.style.borderRadius = '50%';
            
            document.body.appendChild(confetti);
            
            let y = -10;
            let x = parseFloat(confetti.style.left);
            const velocity = 2 + Math.random() * 3;
            const swing = (Math.random() - 0.5) * 2;
            
            const animate = () => {
                y += velocity;
                x += swing;
                confetti.style.top = y + 'px';
                confetti.style.left = x + 'px';
                
                if (y < window.innerHeight) {
                    requestAnimationFrame(animate);
                } else {
                    confetti.remove();
                }
            };
            animate();
        }, i * 30);
    }
}

// ============================================================
// SOPORTE DE TECLADO FÍSICO
// ============================================================

document.addEventListener('keydown', (e) => {
    if (!gameState.keyboardEnabled) return;
    
    const key = e.key.toLowerCase();
    if (alphabet.includes(key)) {
        const button = document.getElementById(key);
        if (button && !button.disabled) {
            button.click();
        }
    }
});

// ============================================================
// INICIALIZACIÓN
// ============================================================

// Exponer funciones globales necesarias
window.selectDifficulty = selectDifficulty;
window.selectCategory = selectCategory;
window.useHint = useHint;
window.showStats = showStats;

// Iniciar el juego
initGame();
