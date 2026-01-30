# 🎯 Guía de Usuario - Ahorcado Nivel Dios

## 🚀 Inicio Rápido

1. **Abre el juego**: Ve a `index.html` o visita https://oktubr3.github.io/ahorcado/
2. **Click en "🎮 Jugar"**: Comenzarás el juego
3. **Selecciona dificultad**: Elige entre Fácil, Normal, Difícil o Imposible
4. **Selecciona categoría**: Elige tu categoría favorita o "🎲 ALEATORIO"
5. **¡Juega!**: Adivina la palabra antes de que se acabe el tiempo

---

## 🎮 Cómo Jugar

### Controles
- **Click**: Haz click en las letras del alfabeto
- **Teclado**: O simplemente escribe con tu teclado físico
- **Pista**: Click en "💡 PISTA" para revelar una letra (costo: 20 pts)

### Objetivo
Adivina la palabra completa antes de:
- Perder todas tus vidas ❤️
- Que se acabe el tiempo ⏱️

### Puntuación
- **+10 puntos** por cada letra correcta (×multiplicador de dificultad)
- **Bonus de tiempo**: 5 puntos × segundos restantes al ganar
- **-20 puntos** por cada pista usada

---

## 🎯 Niveles de Dificultad

### 🟢 FÁCIL
- **Vidas**: 10
- **Tiempo**: 120 segundos (2 minutos)
- **Palabras**: 4-6 letras
- **Multiplicador**: ×1
- **Ideal para**: Principiantes, niños, aprender vocabulario

### 🔵 NORMAL
- **Vidas**: 8
- **Tiempo**: 90 segundos (1.5 minutos)
- **Palabras**: 7-10 letras
- **Multiplicador**: ×1.5
- **Ideal para**: Jugadores casuales, práctica regular

### 🟠 DIFÍCIL
- **Vidas**: 6
- **Tiempo**: 60 segundos (1 minuto)
- **Palabras**: 11-15 letras
- **Multiplicador**: ×2
- **Ideal para**: Expertos, desafío intenso

### 🔴 IMPOSIBLE
- **Vidas**: 4
- **Tiempo**: 45 segundos
- **Palabras**: 16+ letras
- **Multiplicador**: ×3
- **Ideal para**: Maestros del ahorcado, records

---

## 📚 Categorías Disponibles

| Categoría | Ícono | Ejemplos |
|-----------|-------|----------|
| Frutas | 🍎 | Manzana, Papaya, Carambola |
| Animales | 🦁 | León, Hipopótamo, Colibrí |
| Países | 🌍 | Argentina, Islandia, Madagascar |
| Deportes | ⚽ | Fútbol, Paracaidismo, Halterofilia |
| Profesiones | 👨‍💼 | Arquitecto, Programador, Arqueólogo |
| Tecnología | 💻 | Computadora, Algoritmo, Inteligencia Artificial |
| Ciudades | 🏙️ | Buenos Aires, Tokio, San Francisco |
| Colores | 🎨 | Turquesa, Magenta, Esmeralda |
| Instrumentos | 🎸 | Guitarra, Didgeridoo, Theremin |
| Alimentos | 🍕 | Pizza, Empanada, Mantequilla de Maní |

---

## 💡 Sistema de Pistas

### ¿Cómo funcionan?
1. Cada partida comienza con **3 pistas**
2. Click en el botón "💡 PISTA"
3. Se revelará automáticamente una letra oculta
4. **Costo**: -20 puntos por pista

### Estrategia
- Usa pistas en palabras largas
- Guarda pistas para el final si es posible
- En modo Imposible, úsalas estratégicamente

---

## 📊 Estadísticas

### Qué se rastrea
- **Partidas jugadas**: Total de juegos completados
- **Victorias**: Juegos ganados
- **Derrotas**: Juegos perdidos
- **% Victoria**: Porcentaje de juegos ganados
- **Mejor Puntuación**: Tu récord personal
- **Racha**: Victorias consecutivas actuales

### Dónde se guardan
- Las estadísticas se guardan en **localStorage**
- Persisten entre sesiones
- No se pierden al cerrar el navegador
- Son específicas de cada dispositivo

### Cómo resetear
```javascript
// Abre la consola del navegador (F12) y ejecuta:
localStorage.removeItem('ahorcadoStats');
location.reload();
```

---

## 🎯 Consejos y Estrategias

### Para Principiantes
1. Comienza con **Fácil** para familiarizarte
2. Prueba la categoría **Frutas** o **Animales** (palabras comunes)
3. Empieza con vocales (A, E, I, O, U)
4. Usa el **teclado físico** para ser más rápido

### Para Expertos
1. En **Imposible**, usa pistas temprano
2. Memoriza patrones comunes de palabras largas
3. Categoría **Tecnología** tiene palabras compuestas
4. Practica speed-running para mejores tiempos

### Técnicas Avanzadas
- **Método de frecuencia**: E, A, O son las más comunes en español
- **Consonantes clave**: R, N, S, L aparecen frecuentemente
- **Patrones**: Busca terminaciones comunes (-ción, -dad, -mente)
- **Gestión del tiempo**: Respuestas rápidas = más bonus

---

## 🏆 Desafíos y Metas

### Metas para Principiantes
- [ ] Ganar en modo Fácil
- [ ] Alcanzar 100 puntos
- [ ] Racha de 3 victorias
- [ ] Probar todas las categorías

### Metas Intermedias
- [ ] Ganar en modo Normal sin usar pistas
- [ ] Alcanzar 500 puntos
- [ ] Racha de 10 victorias
- [ ] % victoria sobre 70%

### Metas Expertas
- [ ] Ganar en modo Imposible
- [ ] Alcanzar 1000 puntos en una partida
- [ ] Racha de 25 victorias
- [ ] % victoria sobre 90%

### Metas Legendarias
- [ ] Ganar en Imposible sin errores
- [ ] Puntuación perfecta (sin pistas, tiempo completo restante)
- [ ] Racha de 50 victorias
- [ ] 100% victoria en 50+ partidas

---

## 🐛 Solución de Problemas

### El juego no carga
- Verifica tu conexión a internet (Tailwind CSS es CDN)
- Actualiza la página (F5)
- Limpia la caché del navegador

### No hay sonido
- Verifica el volumen del dispositivo
- Algunos navegadores bloquean autoplay de audio
- Click en la página antes de jugar

### Las estadísticas no se guardan
- Verifica que localStorage esté habilitado
- No uses modo incógnito/privado
- Verifica permisos del navegador

### El teclado no funciona
- Click en la página primero (para focus)
- Verifica que no haya popups abiertos
- Usa Chrome/Firefox/Safari modernos

---

## 🎨 Personalización

### Colores y Temas
Edita `style/style.css` para cambiar colores:
```css
/* Cambia el color principal */
.bg-green-500 { background-color: tu-color; }
```

### Añadir Palabras
Edita `scripts/game-data.js`:
```javascript
frutas: {
    words: [..., 'tu-nueva-palabra']
}
```

### Configuración Avanzada
Edita `scripts/config.js` para personalizar:
- Cantidad de pistas
- Puntuación
- Efectos visuales
- Y mucho más

---

## 📱 Compatibilidad

### Navegadores Soportados
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Opera 76+

### Dispositivos
- ✅ Desktop (Windows, Mac, Linux)
- ✅ Tablets (iPad, Android)
- ✅ Móviles (iOS, Android)
- ⚠️ Mejor experiencia en pantallas 768px+

### Características del Navegador
- ✅ LocalStorage (estadísticas)
- ✅ Audio API (sonidos)
- ✅ CSS3 (animaciones)
- ✅ ES6+ JavaScript

---

## 🎮 ¡Empieza a Jugar!

¿Listo para el desafío? 
👉 https://oktubr3.github.io/ahorcado/

¡Buena suerte alcanzando el nivel DIOS! 🔥

---

## 💬 Feedback

¿Encontraste un bug? ¿Tienes una sugerencia?
- GitHub Issues: https://github.com/oktubr3/ahorcado/issues
- Creado con ❤️ por oktubr3