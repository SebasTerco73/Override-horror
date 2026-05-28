import marcela from '../assets/img/it-marce.png'
import marcelaBG from '../assets/img/marce-bg.jpg'
import ailu from '../assets/img/v-ailu.avif'
import ailuBG from '../assets/img/ailu-bg.jpg'
import ney from '../assets/img/sauron-ney.jpeg'
import neyBG from '../assets/img/ney-bg.jpeg'
import sebas from '../assets/img/freddy-sebas.webp'
import sebasBG from '../assets/img/sebas-bg.jpeg'

export const perfiles = {
  Marce: {
    nombre: 'Marce',
    rol: 'Frontend Developer',
    imagen: marcela,
    imagenFondo: marcelaBG,
    bio: 'Apasionada por crear interfaces que atrapen al usuario. Especialista en convertir diseños oscuros en código limpio y funcional.',
    frase: '"El código es poesía... o una maldición."',
    skills: [
      { nombre: 'React', nivel: 90 },
      { nombre: 'CSS / Sass', nivel: 85 },
      { nombre: 'JavaScript', nivel: 80 },
      { nombre: 'Figma', nivel: 70 },
      { nombre: 'TypeScript', nivel: 60 },
    ],
    tech: ['⚛️', '🎨', '📦', '🔷', '🖼️'],
    techNombres: ['React', 'CSS', 'Webpack', 'TypeScript', 'Figma'],
    proyectos: [
      { titulo: 'Portal Oscuro', desc: 'Dashboard administrativo con temática gótica.' },
      { titulo: 'Crypta UI', desc: 'Biblioteca de componentes dark mode.' },
      { titulo: 'Blood Shop', desc: 'E-commerce de temática Halloween.' },
    ],
    redes: { github: '#', linkedin: '#', instagram: '#' },
  },

  Ailu: {
    nombre: 'Ailu',
    rol: 'Tester QA',
    imagen: ailu,
    imagenFondo: ailuBG,
    bio: 'Cazadora de bugs sin piedad. Si hay un error escondido en el código, Ailu lo encuentra antes que nadie.',
    frase: '"Todo sistema tiene una grieta. Yo la encuentro."',
    skills: [
      { nombre: 'Testing Manual', nivel: 95 },
      { nombre: 'Cypress', nivel: 75 },
      { nombre: 'Jest', nivel: 70 },
      { nombre: 'Postman', nivel: 80 },
      { nombre: 'Jira', nivel: 85 },
    ],
    tech: ['🧪', '🔍', '📋', '🐛', '✅'],
    techNombres: ['Cypress', 'Jest', 'Postman', 'Bug Tracking', 'Jira'],
    proyectos: [
      { titulo: 'Test Suite v2', desc: 'Suite de pruebas automatizadas end-to-end.' },
      { titulo: 'Bug Tracker', desc: 'Sistema de seguimiento de errores en tiempo real.' },
      { titulo: 'QA Docs', desc: 'Documentación de casos de prueba para 3 proyectos.' },
    ],
    redes: { github: '#', linkedin: '#', instagram: '#' },
  },

  Ney: {
    nombre: 'Ney',
    rol: 'Backend Developer',
    imagen: ney,
    imagenFondo: neyBG,
    bio: 'Arquitecto de las sombras del servidor. Construye APIs que nunca fallan y bases de datos que nunca duermen.',
    frase: '"La lógica es la única magia real."',
    skills: [
      { nombre: 'Node.js', nivel: 88 },
      { nombre: 'Python', nivel: 80 },
      { nombre: 'PostgreSQL', nivel: 75 },
      { nombre: 'Docker', nivel: 70 },
      { nombre: 'REST APIs', nivel: 92 },
    ],
    tech: ['🟢', '🐍', '🐘', '🐳', '🔌'],
    techNombres: ['Node.js', 'Python', 'PostgreSQL', 'Docker', 'REST'],
    proyectos: [
      { titulo: 'Dark API', desc: 'API REST con autenticación JWT y rate limiting.' },
      { titulo: 'Necro DB', desc: 'Esquema de base de datos para sistema de usuarios.' },
      { titulo: 'Shadow Queue', desc: 'Sistema de colas con Redis para procesamiento async.' },
    ],
    redes: { github: 'https://github.com/NeyelVila', linkedin: '#', instagram: '#' },
  },
  
  Sebas: {
    nombre: 'Sebas',
    rol: 'Backend Developer',
    imagen: sebas,
    imagenFondo: sebasBG,
    bio: 'Señor de los servidores y los microservicios. Optimiza lo que otros no pueden ni ver.',
    frase: '"Si anda, no lo toques. Si no anda, llámame."',
    skills: [
      { nombre: 'Java', nivel: 85 },
      { nombre: 'Spring Boot', nivel: 80 },
      { nombre: 'MongoDB', nivel: 72 },
      { nombre: 'AWS', nivel: 65 },
      { nombre: 'Microservicios', nivel: 78 },
    ],
    tech: ['☕', '🍃', '🍃', '☁️', '⚙️'],
    techNombres: ['Java', 'Spring', 'MongoDB', 'AWS', 'Microservicios'],
    proyectos: [
      { titulo: 'Inferno Cloud', desc: 'Despliegue de microservicios en AWS ECS.' },
      { titulo: 'Vault Service', desc: 'Servicio de almacenamiento cifrado de datos.' },
      { titulo: 'Demon Monitor', desc: 'Sistema de monitoreo de servicios en producción.' },
    ],
    redes: { github: 'https://github.com/SebasTerco73', linkedin: 'https://www.linkedin.com/in/sebaspuche73/', instagram: '#' },
  },
}
