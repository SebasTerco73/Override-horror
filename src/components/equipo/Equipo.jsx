import './Equipo.css'
import { Link } from 'react-router-dom'
import { perfiles } from '../../data/miembros.js'

function Equipo() {
  return (
    <section id="equipo">
      <div className="team-grid">
        {Object.entries(perfiles).map(([id, m]) => (
          <div className="team-card" key={id}>
            <div className="card-img-wrap">
              <img src={m.imagen} alt={m.nombre} />

              <div className="static-overlay" />
              <div className="flicker-line" />
              <div className="static-vignette" />
            </div>

            <svg
              className="border-svg"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <rect
                x="1"
                y="1"
                width="98"
                height="98"
                rx="0"
              />
            </svg>

            <h3>{m.nombre}</h3>

            <p>{m.rol}</p>

            <Link
              to={`/equipo/${id}`}
              className="team-link"
            >
              Mi mundo
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Equipo