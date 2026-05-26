import { useState, useEffect, useCallback } from 'react'
import './HorrorMovies.css'

const API_KEY = import.meta.env.VITE_TMDB_KEY
const BASE_URL = 'https://api.themoviedb.org/3'
const IMG_URL  = 'https://image.tmdb.org/t/p/w500'
const IMG_LG   = 'https://image.tmdb.org/t/p/w780'
const HORROR_ID = 27

function HorrorMovies() {
  const [peliculas, setPeliculas] = useState([])
  const [pagina, setPagina]       = useState(1)
  const [totalPaginas, setTotal]  = useState(1)
  const [cargando, setCargando]   = useState(false)
  const [error, setError]         = useState(null)
  const [lightbox, setLightbox]   = useState(null)
  const [busqueda, setBusqueda]   = useState('')
  const [busquedaActiva, setBusquedaActiva] = useState('') // la que realmente se busca

  const fetchPeliculas = useCallback(async () => {
    setCargando(true)
    setError(null)

    try {
      let url

      if (busquedaActiva.trim()) {
        url = `${BASE_URL}/search/movie?query=${encodeURIComponent(busquedaActiva)}&page=${pagina}&api_key=${API_KEY}&language=es-ES`
      } else {
        url = `${BASE_URL}/discover/movie?with_genres=${HORROR_ID}&page=${pagina}&api_key=${API_KEY}&language=es-ES&sort_by=popularity.desc`
      }

      const res = await fetch(url)
      if (!res.ok) throw new Error(`Error ${res.status}`)
      const data = await res.json()

      // si hay búsqueda, filtramos por género horror
      const resultados = busquedaActiva.trim()
        ? data.results.filter(p => p.genre_ids.includes(HORROR_ID))
        : data.results

      setPeliculas(resultados)
      setTotal(Math.min(data.total_pages, 500))
    } catch (err) {
      setError(err.message)
    } finally {
      setCargando(false)
    }
  }, [pagina, busquedaActiva])

  useEffect(() => {
setTimeout(() => fetchPeliculas(), 0)
  }, [fetchPeliculas])

  // ESC y flechas para lightbox
  useEffect(() => {
    if (lightbox === null) return
    function handleKey(e) {
      if (e.key === 'Escape')     setLightbox(null)
      if (e.key === 'ArrowLeft')  setLightbox(i => (i - 1 + peliculas.length) % peliculas.length)
      if (e.key === 'ArrowRight') setLightbox(i => (i + 1) % peliculas.length)
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [lightbox, peliculas.length])

  function handleBuscar() {
    setPagina(1) // resetea a página 1 al buscar
    setBusquedaActiva(busqueda)
  }

  function handleLimpiar() {
    setBusqueda('')
    setBusquedaActiva('')
    setPagina(1)
  }

  const peliActiva = lightbox !== null ? peliculas[lightbox] : null

  return (
    <div className="horror-movies">

      <div className="hm-header">
        <h2 className="hm-titulo">PELÍCULAS DE TERROR</h2>
        <p className="hm-subtitulo">
          {busquedaActiva
            ? `Resultados para "${busquedaActiva}": ${peliculas.length} películas`
            : `Página ${pagina} de ${totalPaginas}`
          }
        </p>
      </div>

      {/* BUSCADOR */}
      <div className="hm-buscador-wrapper">
        <input
          className="hm-buscador"
          type="text"
          placeholder="Buscar película de terror..."
          value={busqueda}
          onChange={e => setBusqueda(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && handleBuscar()}
        />
        <button className="hm-btn-buscar" onClick={handleBuscar}>Buscar</button>
        {busquedaActiva && (
          <button className="hm-btn-limpiar" onClick={handleLimpiar}>✕</button>
        )}
      </div>

      {error && (
        <div className="hm-error">
          <p>⚠ Error al cargar: {error}</p>
          <button onClick={fetchPeliculas}>Reintentar</button>
        </div>
      )}

      {cargando && (
        <div className="hm-cargando">
          <div className="hm-spinner" />
          <p>Invocando criaturas...</p>
        </div>
      )}

      {!cargando && !error && peliculas.length === 0 && (
        <p className="hm-vacio">Ninguna película de terror encontrada.</p>
      )}

      {!cargando && !error && peliculas.length > 0 && (
        <div className="hm-grid">
          {peliculas.map((p, index) => (
            <div key={p.id} className="hm-card" onClick={() => setLightbox(index)}>
              {p.poster_path
                ? <img src={`${IMG_URL}${p.poster_path}`} alt={p.title} className="hm-poster" />
                : <div className="hm-sin-poster">SIN IMAGEN</div>
              }
              <div className="hm-info">
                <h3 className="hm-nombre">{p.title}</h3>
                <span className="hm-fecha">{p.release_date?.slice(0, 4)}</span>
                <div className="hm-rating">★ {p.vote_average?.toFixed(1)}</div>
              </div>
            </div>
          ))}
        </div>
      )}

      {!cargando && !error && peliculas.length > 0 && (
        <div className="hm-paginacion">
          <button className="hm-btn" onClick={() => setPagina(p => p - 1)} disabled={pagina === 1}>
            ← Anterior
          </button>
          <span className="hm-pagina-actual">{pagina} / {totalPaginas}</span>
          <button className="hm-btn" onClick={() => setPagina(p => p + 1)} disabled={pagina === totalPaginas}>
            Siguiente →
          </button>
        </div>
      )}

      {/* LIGHTBOX */}
      {peliActiva && (
        <div className="lb-overlay" onClick={() => setLightbox(null)}>
          <button className="lb-cerrar" onClick={() => setLightbox(null)}>✕</button>
          <button className="lb-nav lb-prev" onClick={e => { e.stopPropagation(); setLightbox(i => (i - 1 + peliculas.length) % peliculas.length) }}>‹</button>
          <div className="lb-contenido" onClick={e => e.stopPropagation()}>
            {peliActiva.poster_path
              ? <img src={`${IMG_LG}${peliActiva.poster_path}`} alt={peliActiva.title} className="lb-imagen" />
              : <div className="lb-sin-imagen">SIN IMAGEN</div>
            }
            <div className="lb-info">
              <h3 className="lb-titulo">{peliActiva.title}</h3>
              <div className="lb-meta">
                <span>{peliActiva.release_date?.slice(0, 4)}</span>
                <span className="lb-rating">★ {peliActiva.vote_average?.toFixed(1)}</span>
              </div>
            </div>
          </div>
          <button className="lb-nav lb-next" onClick={e => { e.stopPropagation(); setLightbox(i => (i + 1) % peliculas.length) }}>›</button>
        </div>
      )}

    </div>
  )
}

export default HorrorMovies