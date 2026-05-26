import "./Bitacora.css";
function Bitacora() {
  return (
    <section id="bitacora">
      <h2>Bitácora</h2>
      <div className="timeline">
        <div className="evento">
          <h3>Estructura inicial con estado</h3>
          <p className="decision">
            <strong>Decisión:</strong> Manejar la navegación entre secciones con
            useState y renders condicionales, sin router.
          </p>
          <p className="dificultad">
            <strong>Dificultad:</strong> La pantalla de carga con la bruja se
            activaba manualmente con setTimeout anidados.
          </p>
          <p className="solucion">
            <strong>Solución:</strong> Estado loading controlado desde la
            función cambiarSeccion, con scroll automático al cambiar sección.
          </p>
        </div>

        <div className="evento">
          <h3>Migración a React Router</h3>
          <p className="decision">
            <strong>Decisión:</strong> Migrar la navegación a React Router v6
            para tener rutas reales y URLs limpias.
          </p>
          <p className="dificultad">
            <strong>Dificultad:</strong> La pantalla de carga con
            AnimatePresence dejó de funcionar al perder el control manual del
            montaje.
          </p>
          <p className="solucion">
            <strong>Solución:</strong> Implementamos displayLocation para
            congelar la ruta visible mientras dura la animación, sincronizando
            React Router con Framer Motion.
          </p>
        </div>

        <div className="evento">
          <h3>Linter y efectos secundarios</h3>
          <p className="decision">
            <strong>Decisión:</strong> Respetar las reglas de ESLint para
            mantener el código limpio y predecible.
          </p>
          <p className="dificultad">
            <strong>Dificultad:</strong> El linter rechazaba setState dentro del
            cuerpo de useEffect, y las dependencias generaban renders en
            cascada.
          </p>
          <p className="solucion">
            <strong>Solución:</strong> Envolver los setState en setTimeout con
            delay 0 para sacarlos del cuerpo síncrono del efecto, y usar
            eslint-disable-next-line donde la intención era correcta.
          </p>
        </div>

        <div className="evento">
          <h3>Transiciones diferenciadas por ruta</h3>
          <p className="decision">
            <strong>Decisión:</strong> Mostrar la bruja solo en navegaciones
            principales, y un fade suave entre perfiles del equipo.
          </p>
          <p className="dificultad">
            <strong>Dificultad:</strong> La lógica de sinAnimacion comparaba el
            destino pero ignoraba el origen, haciendo que presentacion → equipo
            tampoco tuviera animación.
          </p>
          <p className="solucion">
            <strong>Solución:</strong> Comparar tanto from como to para decidir
            qué animación aplicar, usando startsWith para cubrir todas las
            subrutas de /equipo/.
          </p>
        </div>

        <div className="evento">
          <h3>Perfil de miembro y navegación interna</h3>
          <p className="decision">
            <strong>Decisión:</strong> Agregar botones de anterior y siguiente
            dentro de cada perfil para navegar sin volver al listado.
          </p>
          <p className="dificultad">
            <strong>Dificultad:</strong> El carrusel de proyectos mantenía el
            índice del miembro anterior al navegar entre perfiles.
          </p>
          <p className="solucion">
            <strong>Solución:</strong> useEffect con dependencia en el id de la
            ruta para resetear el estado del carrusel cada vez que cambia el
            perfil activo.
          </p>
        </div>

        <div className="evento">
          <h3>Bestiario con JSON y filtros</h3>
          <p className="decision">
            <strong>Decisión:</strong> Crear un bestiario temático con 20
            criaturas en un archivo JSON puro como ejercicio de renderización
            dinámica.
          </p>
          <p className="dificultad">
            <strong>Dificultad:</strong> Los tipos de criatura estaban
            hardcodeados en un array separado, desincronizados del JSON real.
          </p>
          <p className="solucion">
            <strong>Solución:</strong> Generar los tipos dinámicamente desde el
            JSON con Set y map, y usar useMemo para optimizar el filtrado en
            tiempo real.
          </p>
        </div>

        <div className="evento">
          <h3>Integración con TMDB y Lightbox</h3>
          <p className="decision">
            <strong>Decisión:</strong> Consumir la API de TheMovieDB para
            mostrar películas de terror con paginación y buscador contra la API
            real.
          </p>
          <p className="dificultad">
            <strong>Dificultad:</strong> El endpoint de búsqueda de TMDB no
            filtra por género, devolviendo resultados de cualquier categoría.
          </p>
          <p className="solucion">
            <strong>Solución:</strong> Filtrar en el frontend los resultados por
            genre_ids incluyendo el id 27 (Horror), combinando búsqueda por
            texto con filtro de género. Se integró un Lightbox con navegación
            por teclado y cierre con ESC.
          </p>
        </div>
      </div>
    </section>
  );
}
export default Bitacora;
