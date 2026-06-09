import { useState, useEffect } from 'react'
import './MonstersGallery.css'
import img1 from '../../assets/img/monster-darth.avif'
import img2 from '../../assets/img/monster-nemesis.webp'
import img3 from '../../assets/img/monster-t1000.avif'
import img4 from '../../assets/img/monster-alien.avif'
import img5 from '../../assets/img/monster-volt.avif'
import img6 from '../../assets/img/monster-predator.avif'
import img7 from '../../assets/img/monster-dracula.jpeg'
import img8 from '../../assets/img/monster-frank.jpeg'
import img9 from '../../assets/img/monster-lobo.jpg'
import img10 from '../../assets/img/monster-chuky.jpg'
import img11 from '../../assets/img/monster-jason.png'
import img12 from '../../assets/img/monster-scream.jpg'
import img13 from '../../assets/img/monster-vecna.webp'
import img14 from '../../assets/img/monster-water.jpg'
import img15 from '../../assets/img/monster-llamada.avif'
import img16 from '../../assets/img/monster-mojo.jpeg'
import img17 from '../../assets/img/monster-destructor.jpeg'
import img18 from '../../assets/img/monster-guason.jpg'
import img19 from '../../assets/img/monster-pinhead.jpeg'
import img20 from '../../assets/img/monster-lecter.jpg'

import next from '../../assets/img/manoright.png'
import prev from '../../assets/img/manoleft.png'

const IMAGENES = [
  { id: 1, src: img1, titulo: 'Darth Vader', categoria: 'Lord Sith' },
  { id: 2, src: img2, titulo: 'Nemesis', categoria: 'Experimento' },
  { id: 3, src: img3, titulo: 'T-1000', categoria: 'Robot' },
  { id: 4, src: img4, titulo: 'Alien', categoria: 'Extraterrestre' },
  { id: 5, src: img5, titulo: 'Voldemort', categoria: 'Brujo' },
  { id: 6, src: img6, titulo: 'Depredador', categoria: 'Extraterrestre' },
  { id: 7, src: img7, titulo: 'Drácula', categoria: 'Vampiro' },
  { id: 8, src: img8, titulo: 'Frankenstein', categoria: 'Experimento' },
  { id: 9, src: img9, titulo: 'Hombre Lobo', categoria: 'Animal' },
  { id: 10, src: img10, titulo: 'Chucky', categoria: 'Muñeco' },
  { id: 11, src: img11, titulo: 'Jason Voorhees', categoria: 'Asesino' },
  { id: 12, src: img12, titulo: 'Ghostface', categoria: 'Asesino' },
  { id: 13, src: img13, titulo: 'Vecna', categoria: 'Brujo' },
  { id: 14, src: img14, titulo: 'Mr. Waternoosse', categoria: 'Empresario' },
  { id: 15, src: img15, titulo: 'La Llamada', categoria: 'Fantasma' },
  { id: 16, src: img16, titulo: 'Mojo Jojo', categoria: 'Mono' },
  { id: 17, src: img17, titulo: 'Destructor', categoria: 'Guerrero' },
  { id: 18, src: img18, titulo: 'Guasón', categoria: 'Payaso' },
  { id: 19, src: img19, titulo: 'Pinhead', categoria: 'Demonio' },
  { id: 20, src: img20, titulo: 'Hannibal Lecter', categoria: 'Caníbal' }
]

function MonstersGallery() {
  const [lightbox, setLightbox] = useState(null) 
  const [zoomed,   setZoomed]   = useState(false)

  useEffect(() => {
    if (lightbox === null) return
    function handleKey(e) {
      if (e.key === 'Escape')     { setLightbox(null); setZoomed(false) }
      if (e.key === 'ArrowLeft')  { setZoomed(false); setLightbox(i => (i - 1 + IMAGENES.length) % IMAGENES.length) }
      if (e.key === 'ArrowRight') { setZoomed(false); setLightbox(i => (i + 1) % IMAGENES.length) }
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [lightbox])

  const imagenActiva = lightbox !== null ? IMAGENES[lightbox] : null

  return (
    <div className="gallery">

      <div className="gallery-header">
        <h2 className="gallery-titulo">MONSTRUOS</h2>
        <p className="gallery-subtitulo">{IMAGENES.length} villanos</p>
      </div>

      {/* GRID */}
      <div className="gallery-grid">
        {IMAGENES.map((img, index) => (
          <div
            key={img.id}
            className="gallery-item"
            onClick={() => { setLightbox(index); setZoomed(false) }}
          >
            <img src={img.src} alt={img.titulo} className="gallery-img" loading="lazy" />
            <div className="gallery-overlay">
              <span className="gallery-overlay-titulo">{img.titulo}</span>
              <span className="gallery-overlay-cat">{img.categoria}</span>
            </div>
          </div>
        ))}
      </div>

      {/* LIGHTBOX */}
      {imagenActiva && (
        <div className="lb-overlay" onClick={() => { setLightbox(null); setZoomed(false) }}>

          <button className="lb-cerrar" onClick={() => { setLightbox(null); setZoomed(false) }}>✕</button>

          <button
            className="lb-nav lb-prev"
            onClick={e => { e.stopPropagation(); setZoomed(false); setLightbox(i => (i - 1 + IMAGENES.length) % IMAGENES.length) }}
          >
            <img class="control" src={prev} alt="Anterior" />
          </button>

          <div className="lb-contenido" onClick={e => e.stopPropagation()}>
            <img
              src={imagenActiva.src}
              alt={imagenActiva.titulo}
              className={`lb-imagen${zoomed ? ' lb-imagen--zoomed' : ''}`}
              onClick={() => setZoomed(z => !z)}
            />
            <div className="lb-info">
              <h3 className="lb-titulo">{imagenActiva.titulo}</h3>
              <span className="lb-categoria">{imagenActiva.categoria}</span>
              <p className="lb-hint">Click para zoom · ESC para cerrar</p>
            </div>
            <p className="lb-counter">{lightbox + 1} / {IMAGENES.length}</p>
          </div>

          <button
            className="lb-nav lb-next"
            onClick={e => { e.stopPropagation(); setZoomed(false); setLightbox(i => (i + 1) % IMAGENES.length) }}
          >
            <img class="control" src={next} alt="Siguiente" />
          </button>

        </div>
      )}

    </div>
  )
}

export default MonstersGallery