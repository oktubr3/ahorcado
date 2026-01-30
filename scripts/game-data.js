// ============================================================
// DICCIONARIO EXPANDIDO - 500+ PALABRAS POR CATEGORÍAS
// ============================================================

const gameData = {
    categories: {
        frutas: {
            name: 'Frutas',
            icon: '🍎',
            words: [
                'manzana', 'pera', 'naranja', 'limon', 'sandia', 'uva', 'fresa', 'ciruela', 
                'cereza', 'mango', 'papaya', 'kiwi', 'piña', 'melon', 'durazno', 'damasco',
                'mandarina', 'pomelo', 'granada', 'coco', 'banana', 'platano', 'aguacate',
                'maracuya', 'guayaba', 'chirimoya', 'mamey', 'tamarindo', 'carambola',
                'frambuesa', 'arandano', 'mora', 'grosella', 'higo', 'dátil', 'litchi',
                'rambutan', 'pitaya', 'nispero', 'membrillo', 'acerola', 'feijoa'
            ]
        },
        animales: {
            name: 'Animales',
            icon: '🦁',
            words: [
                'leon', 'tigre', 'caballo', 'cocodrilo', 'camello', 'gato', 'perro', 'pato',
                'oveja', 'gallina', 'vaca', 'cabra', 'elefante', 'jirafa', 'cebra', 'rinoceronte',
                'hipopotamo', 'pantera', 'leopardo', 'guepardo', 'jaguar', 'puma', 'lobo',
                'zorro', 'oso', 'koala', 'canguro', 'murcielago', 'ballena', 'delfin',
                'tiburon', 'pulpo', 'medusa', 'tortuga', 'serpiente', 'lagarto', 'cocodrilo',
                'aguila', 'halcon', 'buho', 'loro', 'pinguino', 'flamenco', 'colibri',
                'mariposa', 'abeja', 'hormiga', 'araña', 'escarabajo', 'libelula'
            ]
        },
        paises: {
            name: 'Países',
            icon: '🌍',
            words: [
                'argentina', 'brasil', 'chile', 'colombia', 'ecuador', 'paraguay', 'peru',
                'venezuela', 'uruguay', 'bolivia', 'mexico', 'españa', 'francia', 'alemania',
                'italia', 'portugal', 'inglaterra', 'escocia', 'irlanda', 'holanda',
                'belgica', 'suiza', 'austria', 'grecia', 'turquia', 'rusia', 'china',
                'japon', 'corea', 'india', 'tailandia', 'vietnam', 'filipinas', 'indonesia',
                'australia', 'canada', 'estados unidos', 'egipto', 'marruecos', 'sudafrica',
                'nigeria', 'kenia', 'madagascar', 'nueva zelanda', 'islandia', 'noruega',
                'suecia', 'finlandia', 'dinamarca', 'polonia', 'republica checa'
            ]
        },
        deportes: {
            name: 'Deportes',
            icon: '⚽',
            words: [
                'futbol', 'baloncesto', 'tenis', 'voleibol', 'natacion', 'atletismo',
                'ciclismo', 'boxeo', 'karate', 'judo', 'taekwondo', 'esgrima', 'tiro con arco',
                'golf', 'hockey', 'rugby', 'beisbol', 'softball', 'cricket', 'badminton',
                'squash', 'escalada', 'surf', 'esqui', 'snowboard', 'patinaje', 'gimnasia',
                'levantamiento de pesas', 'halterofilia', 'lucha libre', 'polo', 'waterpolo',
                'handball', 'lacrosse', 'bowling', 'billar', 'dardos', 'ajedrez', 'remo',
                'vela', 'windsurf', 'parapente', 'paracaidismo', 'buceo', 'equitacion'
            ]
        },
        profesiones: {
            name: 'Profesiones',
            icon: '👨‍💼',
            words: [
                'medico', 'enfermera', 'ingeniero', 'arquitecto', 'abogado', 'profesor',
                'maestro', 'policia', 'bombero', 'chef', 'cocinero', 'carpintero',
                'electricista', 'plomero', 'mecanico', 'piloto', 'azafata', 'marinero',
                'soldado', 'dentista', 'veterinario', 'farmaceutico', 'psicologo',
                'periodista', 'fotografo', 'diseñador', 'programador', 'contador',
                'economista', 'banquero', 'comerciante', 'vendedor', 'secretario',
                'recepcionista', 'gerente', 'director', 'presidente', 'ministro',
                'senador', 'diputado', 'juez', 'fiscal', 'detective', 'cientifico',
                'biologo', 'quimico', 'fisico', 'astronomo', 'geologo', 'arquelogo'
            ]
        },
        tecnologia: {
            name: 'Tecnología',
            icon: '💻',
            words: [
                'computadora', 'ordenador', 'teclado', 'raton', 'monitor', 'impresora',
                'escaner', 'telefono', 'celular', 'tablet', 'laptop', 'servidor',
                'router', 'modem', 'internet', 'wifi', 'bluetooth', 'usb', 'disco duro',
                'memoria', 'procesador', 'placa madre', 'tarjeta grafica', 'ventilador',
                'parlante', 'microfono', 'camara', 'auricular', 'cable', 'software',
                'hardware', 'aplicacion', 'programa', 'sistema operativo', 'navegador',
                'correo electronico', 'contraseña', 'usuario', 'archivo', 'carpeta',
                'documento', 'hoja de calculo', 'presentacion', 'video', 'audio',
                'imagen', 'algoritmo', 'base de datos', 'inteligencia artificial'
            ]
        },
        ciudades: {
            name: 'Ciudades',
            icon: '🏙️',
            words: [
                'buenos aires', 'cordoba', 'rosario', 'mendoza', 'madrid', 'barcelona',
                'valencia', 'sevilla', 'paris', 'marsella', 'lyon', 'roma', 'milan',
                'napoles', 'venecia', 'berlin', 'munich', 'hamburgo', 'londres',
                'manchester', 'liverpool', 'amsterdam', 'bruselas', 'viena', 'zurich',
                'ginebra', 'atenas', 'estambul', 'moscu', 'san petersburgo', 'pekin',
                'shanghai', 'tokio', 'osaka', 'seul', 'bangkok', 'singapur', 'sidney',
                'melbourne', 'toronto', 'vancouver', 'nueva york', 'los angeles',
                'chicago', 'miami', 'san francisco', 'rio de janeiro', 'sao paulo',
                'ciudad de mexico', 'lima', 'santiago', 'bogota', 'caracas'
            ]
        },
        colores: {
            name: 'Colores',
            icon: '🎨',
            words: [
                'rojo', 'azul', 'amarillo', 'verde', 'naranja', 'morado', 'violeta',
                'rosa', 'negro', 'blanco', 'gris', 'marron', 'beige', 'turquesa',
                'celeste', 'fucsia', 'magenta', 'cyan', 'dorado', 'plateado', 'bronce',
                'coral', 'salmon', 'lavanda', 'lila', 'indigo', 'carmesi', 'escarlata',
                'borgoña', 'granate', 'oliva', 'esmeralda', 'jade', 'menta', 'aqua',
                'azul marino', 'azul cielo', 'verde lima', 'amarillo limon'
            ]
        },
        instrumentos: {
            name: 'Instrumentos Musicales',
            icon: '🎸',
            words: [
                'guitarra', 'piano', 'violin', 'flauta', 'trompeta', 'saxofon', 'clarinete',
                'oboe', 'fagot', 'trombon', 'tuba', 'arpa', 'cello', 'contrabajo',
                'bateria', 'bongo', 'tambor', 'pandereta', 'maracas', 'xilofono',
                'marimba', 'triangulo', 'campana', 'gong', 'organo', 'acordeon',
                'armonica', 'banjo', 'mandolina', 'ukelele', 'laud', 'clavecin',
                'clavicordio', 'sintetizador', 'theremin', 'didgeridoo', 'gaita'
            ]
        },
        alimentos: {
            name: 'Alimentos',
            icon: '🍕',
            words: [
                'pizza', 'hamburguesa', 'pasta', 'arroz', 'pollo', 'carne', 'pescado',
                'ensalada', 'sopa', 'sandwich', 'taco', 'burrito', 'enchilada', 'quesadilla',
                'empanada', 'croissant', 'bagel', 'pretzel', 'donut', 'galleta', 'pastel',
                'tarta', 'helado', 'chocolate', 'caramelo', 'chicle', 'yogur', 'queso',
                'mantequilla', 'huevo', 'jamon', 'salchicha', 'chorizo', 'tocino',
                'pan', 'tortilla', 'cereal', 'avena', 'miel', 'mermelada', 'mantequilla de mani'
            ]
        }
    },

    difficulties: {
        facil: {
            name: 'Fácil',
            lives: 10,
            minLength: 4,
            maxLength: 6,
            timeLimit: 120,
            scoreMultiplier: 1,
            color: 'green'
        },
        normal: {
            name: 'Normal',
            lives: 8,
            minLength: 7,
            maxLength: 10,
            timeLimit: 90,
            scoreMultiplier: 1.5,
            color: 'blue'
        },
        dificil: {
            name: 'Difícil',
            lives: 6,
            minLength: 11,
            maxLength: 15,
            timeLimit: 60,
            scoreMultiplier: 2,
            color: 'orange'
        },
        imposible: {
            name: 'Imposible',
            lives: 4,
            minLength: 16,
            maxLength: 99,
            timeLimit: 45,
            scoreMultiplier: 3,
            color: 'red'
        }
    }
};

// Exportar para uso en otros archivos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = gameData;
}
