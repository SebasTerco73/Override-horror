import "./Bitacora.css";

const eventos = [
  {
    titulo: "Estructura inicial con estado",
    decision:
      "Manejar la navegación entre secciones con useState y renders condicionales, sin router.",
    dificultad:
      "La pantalla de carga con la bruja se activaba manualmente con setTimeout anidados.",
    solucion:
      "Estado loading controlado desde la función cambiarSeccion, con scroll automático al cambiar sección.",
  },
  {
    titulo: "Migración a React Router",
    decision:
      "Migrar la navegación a React Router v6 para tener rutas reales y URLs limpias.",
    dificultad:
      "La pantalla de carga con AnimatePresence dejó de funcionar al perder el control manual del montaje.",
    solucion:
      "Implementamos displayLocation para congelar la ruta visible mientras dura la animación, sincronizando React Router con Framer Motion.",
  },
  {
    titulo: "Linter y efectos secundarios",
    decision:
      "Respetar las reglas de ESLint para mantener el código limpio y predecible.",
    dificultad:
      "El linter rechazaba setState dentro del cuerpo de useEffect, y las dependencias generaban renders en cascada.",
    solucion:
      "Envolver los setState en setTimeout con delay 0 para sacarlos del cuerpo síncrono del efecto, y usar eslint-disable-next-line donde la intención era correcta.",
  },
  {
    titulo: "Transiciones diferenciadas por ruta",
    decision:
      "Mostrar la bruja solo en navegaciones principales, y un fade suave entre perfiles del equipo.",
    dificultad:
      "La lógica de sinAnimacion comparaba el destino pero ignoraba el origen, haciendo que presentacion → equipo tampoco tuviera animación.",
    solucion:
      "Comparar tanto from como to para decidir qué animación aplicar, usando startsWith para cubrir todas las subrutas de /equipo/.",
  },
  {
    titulo: "Perfil de miembro y navegación interna",
    decision:
      "Agregar botones de anterior y siguiente dentro de cada perfil para navegar sin volver al listado.",
    dificultad:
      "El carrusel de proyectos mantenía el índice del miembro anterior al navegar entre perfiles.",
    solucion:
      "useEffect con dependencia en el id de la ruta para resetear el estado del carrusel cada vez que cambia el perfil activo.",
  },
  {
    titulo: "Bestiario con JSON y filtros",
    decision:
      "Crear un bestiario temático con 20 criaturas en un archivo JSON puro como ejercicio de renderización dinámica.",
    dificultad:
      "Los tipos de criatura estaban hardcodeados en un array separado, desincronizados del JSON real.",
    solucion:
      "Generar los tipos dinámicamente desde el JSON con Set y map, y usar useMemo para optimizar el filtrado en tiempo real.",
  },
  {
    titulo: "Integración con TMDB y Lightbox",
    decision:
      "Consumir la API de TheMovieDB para mostrar películas de terror con paginación y buscador contra la API real.",
    dificultad:
      "El endpoint de búsqueda de TMDB no filtra por género, devolviendo resultados de cualquier categoría.",
    solucion:
      "Filtrar en el frontend los resultados por genre_ids incluyendo el id 27 (Horror), combinando búsqueda por texto con filtro de género. Se integró un Lightbox con navegación por teclado y cierre con ESC.",
  },
];

function Bitacora() {
  return (
    <section id="bitacora">
      <h2>Bitácora</h2>
      <div className="timeline">
        {eventos.map((ev) => (
          <details key={ev.titulo} className="evento">
            <summary>
              {ev.titulo}
              <span className="chevron" aria-hidden="true" />
            </summary>
            <div className="evento-body">
              <p className="decision">
                <strong>Decisión:</strong> {ev.decision}
              </p>
              <p className="dificultad">
                <strong>Dificultad:</strong> {ev.dificultad}
              </p>
              <p className="solucion">
                <strong>Solución:</strong> {ev.solucion}
              </p>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}

export default Bitacora;