# 🧙‍♂️ RPG CLI Game - Node.js

## 📖 Introducción

Este proyecto es un juego de rol (RPG) por línea de comandos desarrollado en Node.js. Su propósito principal es servir como un ejercicio práctico integral para aplicar y reforzar conocimientos de programación orientada a objetos (POO), manejo de módulos, diseño de clases y desarrollo de aplicaciones interactivas en entorno consola utilizando JavaScript moderno.

En este juego, el jugador podrá encarnar un personaje de fantasía (guerrero, mago o arquero), enfrentarse a enemigos controlados por inteligencia artificial básica, recolectar objetos, gestionar su inventario y progresar a través de múltiples batallas. Cada personaje cuenta con habilidades únicas, y el sistema de combate implementa lógica estratégica que considera el tipo de ataque, el tipo de enemigo y la gestión de salud y maná.

La aplicación está estructurada de forma modular, lo cual permite escalar y mantener el código fácilmente. El motor del juego fue diseñado desde cero utilizando funciones personalizadas para la navegación, entrada/salida del usuario, lógica de combate, almacenamiento de partidas guardadas y generación de enemigos. El proyecto utiliza exclusivamente dependencias compatibles con la versión LTS v22.17.1 de Node.js, asegurando su estabilidad y portabilidad.

Este proyecto representa no solo una base funcional de un videojuego estilo RPG clásico, sino también una plantilla pedagógica que puede ser reutilizada para propósitos académicos, bootcamps, hackathons o incluso como punto de partida para desarrollos más ambiciosos en motores gráficos o servidores web.

## 🎥 Video Demostrativo

¡Mira cómo funciona el juego en acción!  

[![Ver en YouTube](https://img.youtube.com/vi/yAzeBvCreF8/hqdefault.jpg)](https://www.youtube.com/watch?v=yAzeBvCreF8)
> Haz clic en la imagen para ver el video explicativo completo en YouTube.

## 🧠 Motivación del Proyecto

El desarrollo de este RPG en línea de comandos surge como una iniciativa personal y formativa con el objetivo de integrar conocimientos clave en programación moderna con JavaScript y Node.js. En particular, este proyecto fue concebido como una forma de:

- Consolidar los principios de la programación orientada a objetos mediante la implementación de entidades dinámicas como jugadores, enemigos, habilidades, objetos y sistemas de combate.
- Comprender la arquitectura de aplicaciones modulares en Node.js, enfocándose en la separación de responsabilidades, reutilización de código y escalabilidad.
- Desarrollar una aplicación 100% funcional y jugable desde la terminal, sin necesidad de interfaces gráficas ni frameworks externos, priorizando la lógica y la experiencia de usuario en entornos minimalistas.
- Fortalecer las habilidades en estructuras de datos (arrays, objetos, mapas), control de flujo y manejo de entradas/salidas mediante prompts y eventos en consola.
- Estimular la creatividad a través del diseño narrativo, la construcción de personajes y la ambientación de un universo fantástico.
- Sentar las bases para futuras extensiones del proyecto como la integración de persistencia de datos, desarrollo web (React, Express), o incluso conectividad multijugador.

Este proyecto fue también una respuesta al deseo de tener un entorno controlado para probar técnicas de desarrollo ágil, control de versiones con Git, documentación detallada, y estándares de código limpios y comentados. Representa una combinación de pasión por los videojuegos, amor por la programación y compromiso con la mejora continua de habilidades como desarrollador backend y full stack.

## 🎯 Objetivos del Proyecto

El principal objetivo de este proyecto es el desarrollo de un juego RPG (Role-Playing Game) por consola utilizando Node.js y JavaScript moderno, con un enfoque modular, escalable y educativo. A continuación se detallan los objetivos generales y específicos que guiaron la creación de esta aplicación:

### Objetivo General

- Desarrollar un sistema de juego RPG interactivo por consola, que permita a los jugadores gestionar personajes, combatir enemigos, utilizar inventario, tomar decisiones y avanzar en una aventura guiada desde la línea de comandos.

### Objetivos Específicos

- ✅ Diseñar una arquitectura modular que divida la lógica del juego en clases reutilizables (jugador, enemigos, inventario, batallas, habilidades, guardado, IA, etc.) para mantener un código limpio, escalable y mantenible.
- ✅ Implementar una interfaz interactiva por consola utilizando prompts, menús dinámicos y validaciones que permitan al jugador moverse por la historia y tomar decisiones.
- ✅ Crear un sistema de combate basado en turnos con lógica de daño, defensa, habilidades especiales y comportamiento de la IA enemiga.
- ✅ Desarrollar un sistema de inventario para la gestión de objetos consumibles, armas, armaduras y habilidades desbloqueables.
- ✅ Incluir una mecánica de progresión mediante niveles, puntos de experiencia y mejoras del personaje.
- ✅ Documentar el proyecto de forma clara, profesional y comprensible, incluyendo cada módulo, clase y función con comentarios descriptivos.
- ✅ Aplicar control de versiones con Git desde la concepción del proyecto hasta su implementación final, siguiendo buenas prácticas de commits semánticos.
- ✅ Estimular el aprendizaje autodidacta y la aplicación práctica de conocimientos adquiridos en programación backend, algoritmos, estructuras de datos y arquitectura de software.

Este proyecto no solo representa un reto técnico, sino también una oportunidad para explorar la lógica detrás de los juegos, fomentar la creatividad narrativa y practicar habilidades clave para el desarrollo profesional como la escritura de código legible, el diseño de sistemas complejos y la colaboración futura con otros desarrolladores.

## 🔧 Tecnologías y Dependencias

Este proyecto ha sido desarrollado utilizando tecnologías modernas del ecosistema JavaScript, con enfoque en la simplicidad, eficiencia y compatibilidad con entornos Node.js recientes. A continuación, se detallan las tecnologías, herramientas y dependencias empleadas:

### 🛠️ Tecnologías Principales

- 🟢 Node.js v22.17.1  
  Entorno de ejecución para JavaScript del lado del servidor. Utilizado para ejecutar la lógica del juego y manejar el sistema de entrada/salida por consola.

- 📦 npm  
  Gestor de paquetes para instalar, mantener y ejecutar las dependencias necesarias del proyecto.

- ✨ JavaScript (ES6+)  
  Lenguaje principal de programación, utilizando sintaxis moderna (clases, módulos, funciones flecha, desestructuración, etc.) para un código más claro y mantenible.

- 🧪 Git  
  Sistema de control de versiones utilizado para el seguimiento de cambios, ramas de desarrollo y gestión del repositorio.

- 📂 GitHub  
  Plataforma de alojamiento de código fuente donde se encuentra publicado este proyecto, permitiendo colaboración, documentación y visibilidad.

### 📚 Dependencias del Proyecto

A continuación, se listan los paquetes instalados mediante npm para facilitar el desarrollo de este juego:

| Paquete               | Versión        | Descripción                                                                 |
|-----------------------|----------------|-----------------------------------------------------------------------------|
| inquirer              | ^9.2.16        | Permite crear interfaces interactivas en la consola para recibir input del usuario. |
| chalk                 | ^5.3.0         | Herramienta para aplicar colores y estilos al texto mostrado en consola.    |
| figlet                | ^1.6.0         | Genera textos artísticos en formato ASCII para el logo del juego.           |
| gradient-string       | ^2.0.1         | Permite aplicar gradientes de colores a cadenas de texto en consola.        |
| ora                   | ^6.1.2         | Crea animaciones de carga (spinners) para mejorar la experiencia del usuario.|
| uuid                  | ^9.0.1         | Generador de identificadores únicos para objetos como personajes e items.   |
| fs (File System)      | Nativo         | Módulo nativo de Node.js para leer y escribir archivos, utilizado en el sistema de guardado. |

> Nota: Todas las dependencias son compatibles con Node.js v22.17.1 y han sido seleccionadas por su eficiencia y bajo peso, buscando mantener un rendimiento óptimo en entornos de línea de comandos.

---

## 📁 Estructura del Proyecto

El proyecto está organizado en una arquitectura modular y escalable que facilita su mantenimiento, comprensión y crecimiento. A continuación, se describe la estructura general del directorio:


```plaintext
C:.
│   .gitignore
│   index.js
│   package-lock.json
│   package.json
│   README.md
│
├───classes
│   │   arquero.js
│   │   enemigo.js
│   │   guerrero.js
│   │   inventario.js
│   │   mago.js
│   │   objeto.js
│   │   personaje.js
│
├───services
│   │   batalla.js
│   │   guardado.js
│   │   IA.js
│
└───utils
    │   menu.js
```


### 🧠 Organización por responsabilidad

- Las carpetas están divididas por tipo de lógica:
  - `classes/`: Define las entidades básicas del juego.
  - `services/`: Encapsula la lógica de negocio y funcionamiento.
  - `utils/`: Agrupa funciones auxiliares reutilizables.
  - `assets/`: Contiene datos estáticos, configuraciones o plantillas que enriquecen el juego.

Esta estructura permite escalar el proyecto fácilmente, por ejemplo:
- Añadir nuevas clases de personajes o enemigos.
- Incorporar nuevos módulos como misiones, tiendas o niveles.
- Reemplazar o ampliar la IA con comportamientos más complejos.

---

## 🎮 Gameplay y Mecánicas del Juego

El juego se desarrolla a través de una experiencia por consola, donde el jugador podrá interactuar mediante un menú inicial intuitivo y comandos por texto. La dinámica central gira en torno a la creación, desarrollo y evolución de personajes en un entorno de rol (RPG), enfrentando enemigos controlados por inteligencia artificial (IA) y administrando recursos y objetos.

### Flujo del Juego

1. **Inicio del Juego**
   - Se presenta un menú con opciones como iniciar partida, cargar partida anterior, ver instrucciones o salir del juego.
   - El jugador crea su personaje seleccionando entre diferentes clases: Guerrero, Mago o Arquero.

2. **Exploración y Batalla**
   - El jugador puede explorar un entorno simulado y enfrentarse a enemigos generados dinámicamente.
   - Las batallas son por turnos, y cada personaje tiene habilidades únicas y objetos en su inventario que puede usar estratégicamente.
   - El sistema de combate implementa lógica avanzada desde el módulo `IA.js` para controlar los enemigos.

3. **Sistema de Inventario**
   - Cada personaje tiene un inventario individual gestionado desde `inventario.js`, donde se almacenan y administran objetos como pociones, armas y hechizos.
   - Los objetos pueden ser equipados o usados durante una batalla o en momentos estratégicos.

4. **Guardado y Carga de Partidas**
   - El progreso del jugador se puede guardar y cargar mediante los servicios de `guardado.js`, permitiendo reanudar la aventura en cualquier momento.

5. **Progresión del Personaje**
   - A medida que el jugador gana combates, su personaje acumula experiencia y puede desbloquear nuevas habilidades o mejoras en atributos.

6. **Derrota y Reinicio**
   - Si el jugador pierde una batalla, podrá reiniciar desde el último punto guardado o comenzar una nueva partida.

Este juego busca ofrecer una experiencia envolvente, estratégica y divertida, especialmente orientada al aprendizaje de estructuras de programación en Node.js mediante un proyecto práctico, modular y escalable.


## 🛠️ Instalación y Configuración

Sigue los pasos a continuación para clonar, instalar y ejecutar el proyecto RPG de consola desarrollado en Node.js.

### ✅ Requisitos Previos

Antes de comenzar, asegúrate de tener instalado lo siguiente en tu sistema:

- [Node.js](https://nodejs.org/) v18.0.0 o superior (compatible hasta v22.17.1)
- [Git](https://git-scm.com/)
- Un terminal como:
  - PowerShell / CMD (Windows)
  - Terminal (Linux / macOS)
  - VS Code Terminal

### 📦 Clonación del Repositorio

Abre tu terminal y ejecuta el siguiente comando:

```bash
git clone https://github.com/tu_usuario/nombre-del-repo.git
cd nombre-del-repo
```

Reemplaza tu_usuario/nombre-del-repo por la ruta real de tu repositorio.

📥 Instalación de Dependencias
Este proyecto no utiliza frameworks pesados, solo dependencias básicas del ecosistema Node.js. Aun así, ejecuta:

```
npm install
```
para asegurarte de que cualquier dependencia necesaria esté disponible.

▶️ Ejecución del Proyecto
Para iniciar el juego:
```
node index.js
```

Esto ejecutará la lógica principal y desplegará el menú interactivo en consola.

🧪 Pruebas (opcional)
Puedes realizar pruebas básicas ejecutando archivos individuales del sistema, por ejemplo:

```
node src/Services/IA.js
node src/Modelos/Personaje.js
```

Esto es útil para validar módulos de manera aislada durante el desarrollo.

## 🎮 Cómo Jugar

Una vez ejecutado el archivo principal con:

```bash
node index.js
```

se desplegará un menú interactivo en la consola. A partir de allí, podrás crear tu personaje y explorar las distintas opciones del juego.

🧙‍♂️ 1. Crear un Personaje
Se te pedirá que ingreses:

Nombre del personaje

Tipo de personaje (Guerrero, Mago o Arquero)

Distribución de puntos de atributo (ataque, defensa, magia, salud)

Cada clase tiene fortalezas y debilidades únicas que afectarán la estrategia en combate.

🗡️ 2. Entrar en Batalla
Una vez creado el personaje, podrás enfrentarte a enemigos generados aleatoriamente. Durante la batalla, tendrás opciones como:

Atacar

Usar objeto del inventario

Defender

Huir

Las decisiones afectan directamente la vida, el daño recibido y la duración del combate.

🧰 3. Inventario
Podrás recoger y usar objetos durante la partida. El inventario está limitado por peso y cantidad. Algunos objetos posibles incluyen:

Pociones de salud

Antídotos

Elixires de energía

Mejoras temporales

🤖 4. IA del Enemigo
Los enemigos tienen una lógica básica de decisión que puede incluir atacar, defender o usar objetos según su salud y comportamiento predefinido.

💾 5. Guardado y Carga
El sistema permite guardar el estado del personaje y cargarlo posteriormente, para continuar el juego desde el último punto.

🧠 Consejos
Aprovecha los puntos de atributo sabiamente al crear tu personaje.

Usa el inventario en momentos estratégicos.

Estudia el patrón de ataque del enemigo para anticiparte.

## 💾 Guardado y Carga de Partida

Este RPG por consola incluye un sistema básico de guardado y carga de partida, lo cual permite a los jugadores pausar su aventura y retomarla más adelante sin perder progreso.

### 📁 ¿Cómo funciona?

El estado del personaje y su progreso (atributos, inventario, salud, experiencia, enemigos derrotados, etc.) se serializan y almacenan en un archivo JSON ubicado en la carpeta `/data` del proyecto. Este archivo actúa como punto de recuperación para continuar una partida en cualquier momento.

### ✅ Funciones disponibles

- `guardarPartida(nombreArchivo)`  
  Guarda el estado actual del juego en un archivo JSON.  
  Ejemplo: `data/miPartida.json`

- `cargarPartida(nombreArchivo)`  
  Restaura el estado del personaje desde un archivo guardado. Si el archivo no existe o está dañado, se notifica al usuario.

### 🛠️ Configuración adicional

Puedes modificar la ruta y nombre del archivo en el servicio de guardado (`services/guardado.js`) si deseas personalizar la ubicación de los archivos guardados.

### 🧪 Validación

Antes de cargar una partida, el sistema valida que el archivo exista y tenga la estructura correcta. En caso contrario, se muestra un mensaje de error y se ofrece crear un nuevo personaje.

### 🧠 Recomendaciones

- Guarda tu progreso después de cada batalla importante o cambio significativo.
- No edites manualmente los archivos `.json`, ya que podrías corromper los datos del juego.
- Usa nombres descriptivos para tus archivos de guardado si planeas tener múltiples partidas.

Este sistema asegura que la experiencia del jugador sea continua, cómoda y confiable, permitiendo experimentar y evolucionar dentro del juego a su propio ritmo.


## 🎨 Interfaz y Estética en Consola

Aunque el juego se ejecuta completamente en la terminal, se ha puesto especial cuidado en ofrecer una experiencia visual agradable, clara y envolvente utilizando herramientas de formateo y color.

### 🧱 Estructura Visual

- ✅ Menús interactivos con opciones numeradas
- ✅ Delimitadores visuales (`=======`, `-----`, etc.) para separar secciones
- ✅ Uso de ASCII Art para el título del juego y ciertas pantallas clave
- ✅ Elementos centrados para una mejor presentación

### 🎨 Colores

Se utiliza la librería `chalk` para aplicar colores y estilos al texto de consola. Algunos ejemplos:

- 🟢 Verde: Éxitos, confirmaciones, turnos del jugador
- 🔴 Rojo: Daño recibido, errores, ataques enemigos
- 🔵 Azul: Información, ayuda, tips
- 🟡 Amarillo: Advertencias, estado de alerta

Esto permite que el jugador identifique rápidamente lo que está ocurriendo durante el juego.

### 💬 Mensajería y Feedback

- Cada acción (atacar, usar objeto, huir, guardar partida) proporciona feedback inmediato.
- Se emplean mensajes dinámicos y textos con pausas (con `setTimeout` o `readline`) para mejorar la inmersión y dar una sensación de "narrador".

### ✨ Efectos Visuales

- Simulación de carga al iniciar el juego con puntos progresivos.
- Texto animado por líneas o caracteres para crear tensión narrativa.
- Separadores que marcan claramente los cambios de contexto (combate, exploración, inventario).

### 🛠 Personalización

Toda la lógica de diseño visual se centraliza en archivos como:

- `utils/ui.js`: Funciones reutilizables para mostrar menús, separadores, animaciones.
- `services/mensajes.js`: Contiene mensajes estilizados y dinámicos del narrador.
- `libs/chalk`: Para configurar temas de color consistentes.

---

Esta estética permite que, incluso sin gráficos avanzados, el jugador disfrute de una experiencia envolvente y clara, optimizada para la consola.
