# La casita del horror 🕯️👻

![REACT](https://img.shields.io/badge/React-19.2-61DAFB?logo=react&logoColor=white)
![VITE](https://img.shields.io/badge/Vite-8.0-646CFF?logo=vite&logoColor=white)
![ROUTER](https://img.shields.io/badge/React_Router-7.15-CA4245?logo=reactrouter&logoColor=white)
![JS](https://img.shields.io/badge/JavaScript-ES2024-F7DF1E?logo=javascript&logoColor=black)
![CSS](https://img.shields.io/badge/CSS-Modules-1572B6?logo=css3&logoColor=white)
![ESLINT](https://img.shields.io/badge/ESLint-10.3-4B32C3?logo=eslint&logoColor=white)
![PRETTIER](https://img.shields.io/badge/Prettier-Formatted-F7B93E?logo=prettier&logoColor=black)

Proyecto final de la materia **Front-End** — _React_ del segundo cuatrimestre de la tecnicatura en desarrollo de software.  
Aplicación web interactiva estilo "fanpage", con información y recursos audiovisuales del género de terror, bitácora y presentación de equipo.

---

## 🚀 Demo

> **Enlace:** https://override-horror.vercel.app/

---

## Tabla de contenidos

- [Requisitos](#requisitos)
- [Características principales](#características-principales)
- [Instalación](#instalación)
- [Ejecución y scripts disponibles](#ejecución-y-scripts-disponibles)
- [Estructura de carpetas](#estructura-de-carpetas)
- [Vistas principales](#vistas-principales)
- [Tecnologías y dependencias](#tecnologías-y-dependencias)
- [Personalización y estilos](#personalización-y-estilos)
- [Uso de IA](#uso-de-ia)
- [Licencia y créditos](#licencia-y-créditos)
- [Equipo](#equipo)

---

## Requisitos

* [x] Navegación Estilo Dashboard (Sidebar Fija): con acceso a todas las secciones jerarquizado mediante React Router. Incluye el logo del grupo 
* [x] Panel Central de Presentación (Dashboard Home): Seccion principal con presentacion del grupo, seccion "demonios" con tarjeta de acceso rápido para cada integrante del equipo, con imagenes ambientadas en el mundo del terror. Dispone de animaciones y transiciones.
<img width="965" height="268" alt="presentacion_team" src="https://github.com/user-attachments/assets/5fb14084-b074-486f-b6e9-dfe0b176f965" />

* [x] Sección Individual por Integrante (Perfil Profesional): Incluye barra de progreso de habilidades, carrusel de 3 proyectos, tech stack con iconografia, y botones de redes sociales con hover
 <img width="492" height="689" alt="image" src="https://github.com/user-attachments/assets/f24df725-deb1-4936-910a-338350ba0f22" />

* [x] Explorador de Datos Locales (JSON): Archivo JSON con datos de 20 distintas especies del mundo del terror, con lógica de filtrado por tipo y buscador de texto.
<img width="961" height="500" alt="image" src="https://github.com/user-attachments/assets/0279a2a1-f5cd-4e00-bec8-1e7c74e9e2cd" />

* [x] Módulo de Integración de API Externa: Consumo asíncronico mediante el uso de async/await de la API themoviedb, con el id 27 para filtrar solo las peliculas del genero terror. Incluye sistema de paginación con los botones siguiente y anterior, ademas de una busqueda por texto
* [x] Galería de Imágenes Interactiva: Con funcionalidad de Lightbox, navegacion interna y cierre mediante la tecla escape
<img width="802" height="645" alt="Sin título" src="https://github.com/user-attachments/assets/17b5f63d-bbed-4b19-8d00-25983af77e7d" />

* [x] Sección Bitácora de Proyecto: Analisis del proceso de evolución del proyecto
<img width="1366" height="768" alt="image" src="https://github.com/user-attachments/assets/c41a608d-59d4-4e1c-96ef-d3ec1dfbdac6" />

* [x] Página responsive: Se adapta a diferentes pantallas
<img width="387" height="719" alt="image" src="https://github.com/user-attachments/assets/0f9bc36d-0dba-4575-af42-10c087e79cc7" />


---

## Características principales

- **Hecho con React 19 y Vite** para mayor velocidad de desarrollo y carga.
- **Diseño responsive**, con temas y animaciones inspirados en el género del horror (fuentes personalizadas, fondos, blood canvas, etc).
- **Routing y transiciones animadas** (Framer-Motion, React Router Dom).
- **Vistas modulares**: Presentación, Equipo, Bestiario, Favoritos, Bitácora, Perfiles individuales de miembros.
- **Gestión de recursos**: Imágenes, fuentes, y datos organizados en carpetas.
- **Código limpio y estructurado**.
- **Bitácora**: Seguimiento de decisiones y desarrollo.

---

## Instalación

Requisitos previos:
- Node.js >=16
- npm >=7

```bash
git clone https://github.com/SebasTerco73/Override-horror.git
cd Override-horror
npm install
```

### Variables de entorno

Copia el archivo `.env example` a `.env` si necesitas definir variables personalizadas.

---

## Ejecución y scripts disponibles

| Comando           | Descripción                                              |
|-------------------|----------------------------------------------------------|
| `npm run dev`     | Ejecuta la app en modo desarrollo (`localhost:5173`)     |
| `npm run build`   | Genera el build para producción                          |
| `npm run preview` | Previsualiza el build de producción                      |
| `npm run lint`    | Corre el linter ESLint con reglas customizadas           |

---

## Estructura de carpetas

```
/
├── public/
│   └── favicon.png
├── src/
│   ├── assets/           # Imágenes, fondos
│   ├── components/       # Componentes principales y vistas
│   ├── data/             # Recursos de datos (JSON, datasets)
│   ├── fonts/            # Fuentes personalizadas .ttf
│   ├── index.css         # Estilos globales
│   ├── main.jsx          # Renderizado raíz de React
│   └── App.jsx           # Layout y enrutamiento principal
├── index.html            # HTML base
├── package.json          # Dependencias y scripts
├── vite.config.js        # Configuración de Vite
├── .env example          # Ejemplo de variables de entorno
├── .gitignore
```

---

## Vistas principales

- **/presentacion**  
  Página de bienvenida e introducción al proyecto.
- **/equipo**  
  Muestra a los integrantes del equipo.  
  Acceso a **/equipo/:id** para ver el perfil individual (bio, redes, contribuciones).
- **/bestiario**  
  Catalogación de personajes, mitos y monstruos clásicos del terror.
- **/peliculas**  
  Recomendaciones y fichas de películas de terror.
- **/bitacora**  
  Registro del proceso de desarrollo (decisiones, aprendizajes, screens, retro).

Todas las vistas implementan transiciones y animaciones para una experiencia inmersiva.

---

## Tecnologías y dependencias

- **React 19** y **Vite**
- **framer-motion** — transiciones animadas
- **react-router-dom** — enrutamiento SPA
- **ESLint** — control de calidad y estilo de código
- **Fuentes personalizadas**: `blood-font.ttf`, `text-font.ttf` bajo `src/fonts/`
- **Imágenes y recursos** en `src/assets/`

Ver más en [`package.json`](https://github.com/SebasTerco73/Override-horror/blob/main/package.json).

---

## Personalización y estilos

- **Paleta oscura** (`#080305`) con fondos custom y overlays visuales.
- **Animaciones CSS** (`index.css`) para títulos, fondo y elementos interactivos.
- Adaptado para **móviles y escritorio**.
- **Fuentes terroríficas** aplicadas a títulos y texto principal.
- **BloodCanvas** y otros componentes visuales custom incluyen scripts JS/Canvas propios.

---

## Uso de IA

- GitHub Copilot ayudó con sugerencias y autocompletado de código.
- ChatGPT nos facilitó el JSON utilizado en la seccion bestiario.
- Claude nos aporto nuevos aprendizajes, mayormente en la parte visual, como animaciones , y efectos.

---

## Licencia y créditos

Solo uso educativo.  
Imágenes y recursos audiovisuales utilizados con fines didácticos.  
Diseño, implementación y recursos adaptados y creados por el equipo Override-horror.

API https://www.themoviedb.org/

---

## **👨‍🎓👩‍🎓 Equipo**

| [<img src="https://avatars.githubusercontent.com/u/128065511?v=4" width="115"><br><sub>Ailén Páez</sub><br><sub>a.jorgelinapaez@gmail.com</sub>](https://github.com/ailenpaez) | [<img src="https://avatars.githubusercontent.com/u/124319050?v=4" width="115"><br><sub>Marcela Herrera</sub><br><sub>mfh.jea1814@gmail.com</sub>](https://github.com/HerreraMarcela) | [<img src="https://avatars.githubusercontent.com/u/95725306?v=4" width="115"><br><sub>Neyel Vilaseco</sub><br><sub>neyelvilaseco@gmail.com</sub>](https://github.com/NeyelVila) | [<img src="https://avatars.githubusercontent.com/u/138830413?v=4" width="115"><br><sub>Sebastián Matías Puche</sub><br><sub>sebasterco10@gmail.com</sub>](https://github.com/SebasTerco73) |
| :---: | :---: | :---: | :---: | 

---
