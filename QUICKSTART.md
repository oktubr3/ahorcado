# 🚀 CÓMO VER EL JUEGO EN ACCIÓN

## ⚡ Opción 1: Ver Online (MÁS RÁPIDO) 

### 🌐 Juega Ahora Mismo - Sin Instalación

👉 **[CLICK AQUÍ PARA JUGAR](https://oktubr3.github.io/ahorcado/)** 👈

1. Click en el enlace de arriba
2. ¡Listo! El juego se abrirá en tu navegador
3. Click en "🎮 Jugar" para comenzar

**🎯 Enlace directo al juego:**
```
https://oktubr3.github.io/ahorcado/
```

---

## 💻 Opción 2: Ejecutar Localmente

### Método A: Doble Click (Más Simple)

1. **Descarga el repositorio:**
   ```bash
   git clone https://github.com/oktubr3/ahorcado.git
   cd ahorcado
   ```

2. **Abre el archivo:**
   - Ve a la carpeta del proyecto
   - Haz **doble click** en `index.html`
   - El juego se abrirá en tu navegador predeterminado

### Método B: Servidor Local (Recomendado)

#### Con Python (si lo tienes instalado):

```bash
# 1. Clona el repositorio
git clone https://github.com/oktubr3/ahorcado.git
cd ahorcado

# 2. Inicia el servidor
python3 -m http.server 8000

# 3. Abre tu navegador en:
# http://localhost:8000
```

#### Con Node.js:

```bash
# 1. Clona el repositorio
git clone https://github.com/oktubr3/ahorcado.git
cd ahorcado

# 2. Instala el servidor (solo la primera vez)
npm install -g http-server

# 3. Inicia el servidor
http-server -p 8000

# 4. Abre tu navegador en:
# http://localhost:8000
```

#### Con PHP:

```bash
# 1. Clona el repositorio
git clone https://github.com/oktubr3/ahorcado.git
cd ahorcado

# 2. Inicia el servidor
php -S localhost:8000

# 3. Abre tu navegador en:
# http://localhost:8000
```

---

## 📱 Ver en Móvil

### Desde GitHub Pages:
1. Abre tu navegador móvil
2. Ve a: `https://oktubr3.github.io/ahorcado/`
3. ¡Juega desde tu teléfono!

### Desde Red Local:
1. Inicia el servidor en tu computadora (ver Método B arriba)
2. Encuentra la IP de tu computadora:
   - Windows: `ipconfig`
   - Mac/Linux: `ifconfig` o `ip addr`
3. En tu móvil, abre: `http://[TU-IP]:8000`
   - Ejemplo: `http://192.168.1.100:8000`

---

## 🎮 Guía de Inicio Rápido del Juego

### Paso 1: Página de Inicio
![Homepage](https://github.com/user-attachments/assets/01044bbb-e2b8-4b9a-a32d-c7edf4e36bc4)
- Click en el botón **"🎮 Jugar"**

### Paso 2: Selecciona Dificultad
![Difficulty Selector](https://github.com/user-attachments/assets/48e19e7d-5e4f-4fa3-bd50-8fe425ef80c8)
- Elige entre:
  - 🟢 **Fácil**: 10 vidas, palabras cortas
  - 🔵 **Normal**: 8 vidas, palabras medianas
  - 🟠 **Difícil**: 6 vidas, palabras largas
  - 🔴 **Imposible**: 4 vidas, palabras muy largas

### Paso 3: Selecciona Categoría
![Category Selector](https://github.com/user-attachments/assets/535c908b-f39e-4761-b879-30f69fd010b3)
- Elige tu categoría favorita:
  - 🍎 Frutas
  - 🦁 Animales
  - 🌍 Países
  - ⚽ Deportes
  - Y más...
- O selecciona **🎲 ALEATORIO**

### Paso 4: ¡Juega!
![Gameplay Start](https://github.com/user-attachments/assets/eb7d7c83-824a-4ab4-9cd1-d6b2aecb1419)
- Click en las letras o usa tu teclado
- Usa pistas si las necesitas (💡 PISTA)
- ¡Adivina la palabra antes de que se acabe el tiempo!

### Paso 5: Juego en Progreso
![Gameplay Progress](https://github.com/user-attachments/assets/fc32a492-ae61-4355-a145-56866558a60e)
- Puntuación en tiempo real
- Temporizador descendente
- Vidas actualizándose
- Efectos visuales en cada jugada

---

## 🔧 Solución de Problemas

### El juego no se ve bien / No carga
**Problema:** Tailwind CSS no carga (CDN bloqueado)

**Solución:**
1. Verifica tu conexión a internet
2. Desactiva bloqueadores de anuncios temporalmente
3. Usa el método de servidor local (Método B)

### No hay sonido
**Problema:** El navegador bloquea audio automático

**Solución:**
1. Verifica el volumen de tu dispositivo
2. Click en la página antes de jugar
3. Algunos navegadores requieren interacción del usuario primero

### El teclado no funciona
**Problema:** El foco no está en el juego

**Solución:**
1. Click en cualquier parte de la página del juego
2. Asegúrate de que no haya popups abiertos
3. Usa Chrome, Firefox o Safari actualizado

---

## ❓ Preguntas Frecuentes

### ¿Necesito instalar algo?
**No.** Si usas la versión online (Opción 1), solo necesitas un navegador web.

### ¿Funciona en mi teléfono?
**Sí.** El juego es totalmente responsive y funciona en móviles y tablets.

### ¿Necesito internet?
- **Online (GitHub Pages):** Sí, necesitas internet
- **Local (Método A/B):** Solo para la primera descarga, después funciona sin internet

### ¿Mis estadísticas se guardan?
**Sí.** Todas las estadísticas se guardan en tu navegador usando localStorage y persisten entre sesiones.

### ¿Puedo personalizar el juego?
**Sí.** Edita el archivo `scripts/config.js` para cambiar:
- Cantidad de pistas
- Puntuación
- Colores
- Efectos visuales
- Y mucho más

---

## 🎯 Demo Rápida en 30 Segundos

```bash
# Opción más rápida con Python
git clone https://github.com/oktubr3/ahorcado.git && cd ahorcado && python3 -m http.server 8000 &
# Luego abre: http://localhost:8000
```

O simplemente:

**👉 [JUEGA ONLINE AHORA](https://oktubr3.github.io/ahorcado/) 👈**

---

## 📊 Requisitos del Sistema

### Navegadores Soportados:
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Opera 76+

### Dispositivos:
- ✅ Desktop (Windows, Mac, Linux)
- ✅ Tablets (iPad, Android)
- ✅ Smartphones (iOS, Android)

### Requisitos Mínimos:
- Navegador web moderno
- JavaScript habilitado
- Conexión a internet (para versión online)

---

## 🎉 ¡Eso es Todo!

Ya puedes ver y jugar el **Ahorcado Nivel Dios** 🔥

### Enlaces Rápidos:
- 🌐 **Jugar Online:** https://oktubr3.github.io/ahorcado/
- 📚 **Guía Completa:** Ver `USER_GUIDE.md`
- 🔧 **Documentación Técnica:** Ver `FEATURES.md`
- 💬 **Reportar Problemas:** https://github.com/oktubr3/ahorcado/issues

**¡Diviértete jugando!** 🎮🎉