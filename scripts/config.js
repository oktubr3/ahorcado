// ============================================================
// CONFIGURACIÓN GOD-LEVEL
// ============================================================
// Este archivo permite personalizar fácilmente el juego
// sin modificar el código principal

const gameConfig = {
    // ============================================================
    // CONFIGURACIÓN DE AUDIO
    // ============================================================
    audio: {
        enabled: true,
        volume: 0.7,
        paths: {
            win: './assets/audios/youwin.mp3',
            lose: './assets/audios/gameover.mp3',
            fail: './assets/audios/wrong.mp3',
            right: './assets/audios/right.mp3'
        }
    },

    // ============================================================
    // CONFIGURACIÓN DE PISTAS
    // ============================================================
    hints: {
        startingAmount: 3,      // Pistas iniciales por juego
        cost: 20,               // Costo en puntos
        enabled: true
    },

    // ============================================================
    // CONFIGURACIÓN DE PUNTUACIÓN
    // ============================================================
    scoring: {
        letterCorrect: 10,      // Puntos por letra correcta
        timeBonus: 5,           // Puntos por segundo restante
        hintPenalty: 20,        // Penalización por usar pista
        streakBonus: 50,        // Bonus cada 5 victorias seguidas
        perfectGameBonus: 100   // Bonus por juego perfecto (sin errores)
    },

    // ============================================================
    // CONFIGURACIÓN VISUAL
    // ============================================================
    visual: {
        animations: {
            enabled: true,
            particleCount: 5,       // Partículas por evento
            confettiCount: 50,      // Confeti al ganar
            shakeDuration: 500      // ms
        },
        colors: {
            primary: '#4ecdc4',
            success: '#4ade80',
            error: '#f87171',
            warning: '#fb923c',
            info: '#60a5fa'
        }
    },

    // ============================================================
    // CONFIGURACIÓN DE DIFICULTAD (PERSONALIZABLE)
    // ============================================================
    customDifficulties: {
        // Puedes añadir nuevos niveles aquí
        principiante: {
            name: 'Principiante',
            lives: 12,
            minLength: 3,
            maxLength: 5,
            timeLimit: 150,
            scoreMultiplier: 0.5,
            color: 'cyan'
        }
        // Descomenta para añadir:
        // experto: {
        //     name: 'Experto',
        //     lives: 3,
        //     minLength: 20,
        //     maxLength: 99,
        //     timeLimit: 30,
        //     scoreMultiplier: 5,
        //     color: 'purple'
        // }
    },

    // ============================================================
    // CONFIGURACIÓN DE CATEGORÍAS PERSONALIZADAS
    // ============================================================
    customCategories: {
        // Puedes añadir nuevas categorías aquí
        // ejemplo: {
        //     name: 'Ejemplo',
        //     icon: '🎯',
        //     words: ['palabra1', 'palabra2', 'palabra3']
        // }
    },

    // ============================================================
    // CONFIGURACIÓN DE GAMEPLAY
    // ============================================================
    gameplay: {
        showWordLength: true,       // Mostrar longitud de palabra
        allowKeyboard: true,        // Permitir teclado físico
        autoSaveStats: true,        // Guardar automáticamente
        showTimer: true,            // Mostrar temporizador
        showHistory: true,          // Mostrar historial de letras
        vibrateOnError: true        // Vibrar en móvil al fallar (si disponible)
    },

    // ============================================================
    // EASTER EGGS Y PALABRAS ESPECIALES
    // ============================================================
    easterEggs: {
        enabled: true,
        specialWords: {
            'oktubr3': {
                message: '🎉 ¡Has encontrado al creador!',
                bonus: 500,
                effect: 'confetti-gold'
            },
            'ahorcado': {
                message: '🎮 ¡Meta-ahorcado!',
                bonus: 200,
                effect: 'rainbow'
            },
            'dios': {
                message: '⚡ ¡Poder divino desbloqueado!',
                bonus: 1000,
                effect: 'lightning'
            }
        }
    },

    // ============================================================
    // CONFIGURACIÓN EXPERIMENTAL
    // ============================================================
    experimental: {
        aiHints: false,             // Pistas generadas por IA (futuro)
        voiceRecognition: false,    // Reconocimiento de voz (futuro)
        multiplayer: false,         // Modo multijugador (futuro)
        dailyChallenge: false       // Desafío diario (futuro)
    },

    // ============================================================
    // CONFIGURACIÓN DE DESARROLLO
    // ============================================================
    debug: {
        enabled: false,             // Modo debug
        showWord: false,            // Mostrar palabra en consola
        logEvents: false,           // Log de todos los eventos
        skipTimers: false           // Desactivar temporizadores
    }
};

// Exportar configuración
if (typeof module !== 'undefined' && module.exports) {
    module.exports = gameConfig;
}
