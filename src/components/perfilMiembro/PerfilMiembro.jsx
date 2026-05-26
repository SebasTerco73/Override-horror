import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import "./PerfilMiembro.css";
import { perfiles } from "../../data/miembros.js";

function PerfilMiembro() {
  const [proyecto, setProyecto] = useState(0);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => setProyecto(0), 0);
  }, [id]);

  const ids = Object.keys(perfiles); // ['juan', 'maria', ...]
  const indexActual = ids.indexOf(id);
  const anteriorId = ids[indexActual - 1] ?? null;
  const siguienteId = ids[indexActual + 1] ?? null;

  const m = perfiles[id];

  if (!m) {
    return <h2>Miembro no encontrado</h2>;
  }

  return (
    <section
      id="perfil"
      style={{
        backgroundImage: `
        linear-gradient(
          rgba(0,0,0,.75),
          rgba(0,0,0,.88)
        ),
        url(${m.imagenFondo})
      `,
      }}
    >
      <div className="perfil-header">
        <Link to="/equipo" className="perfil-volver">
          ← Volver al equipo
        </Link>

        <div className="perfil-nav">
          <button
            className="perfil-nav-btn"
            onClick={() => navigate(`/equipo/${anteriorId}`)}
            disabled={!anteriorId}
          >
            ← {anteriorId ? perfiles[anteriorId].nombre : ""}
          </button>

          <button
            className="perfil-nav-btn"
            onClick={() => navigate(`/equipo/${siguienteId}`)}
            disabled={!siguienteId}
          >
            {siguienteId ? perfiles[siguienteId].nombre : ""} →
          </button>
        </div>
      </div>

      <div className="perfil-hero">
        <img src={m.imagen} alt={m.nombre} className="perfil-foto" />

        <div className="perfil-hero-info">
          <h2>{m.nombre}</h2>

          <p className="perfil-rol">{m.rol}</p>

          <p className="perfil-frase">{m.frase}</p>

          <p className="perfil-bio">{m.bio}</p>

          <div className="redes">
            <a
              href={m.redes.github}
              className="red-btn github"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href={m.redes.linkedin}
              className="red-btn linkedin"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

            <a
              href={m.redes.instagram}
              className="red-btn instagram"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>

      <div className="perfil-bloque">
        <h3 className="perfil-titulo">HABILIDADES</h3>

        <div className="skills-lista">
          {m.skills.map((s, i) => (
            <div key={i} className="skill-row">
              <span className="skill-nombre">{s.nombre}</span>

              <div className="skill-bar">
                <div
                  className="skill-fill"
                  style={{
                    "--nivel": s.nivel + "%",
                  }}
                />
              </div>

              <span className="skill-num">{s.nivel}%</span>
            </div>
          ))}
        </div>
      </div>

      <div className="perfil-bloque">
        <h3 className="perfil-titulo">TECH STACK</h3>

        <div className="tech-grid">
          {m.tech.map((icono, i) => (
            <div key={i} className="tech-item">
              <span className="tech-icon">{icono}</span>

              <span className="tech-nombre">{m.techNombres[i]}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="perfil-bloque">
        <h3 className="perfil-titulo">PROYECTOS</h3>

        <div className="carrusel">
          <button
            className="car-btn"
            onClick={() =>
              setProyecto(
                (p) => (p - 1 + m.proyectos.length) % m.proyectos.length,
              )
            }
          >
            ‹
          </button>

          <div className="car-slide">
            <h4>{m.proyectos[proyecto].titulo}</h4>

            <p>{m.proyectos[proyecto].desc}</p>

            <div className="car-dots">
              {m.proyectos.map((_, i) => (
                <span
                  key={i}
                  className={`car-dot ${i === proyecto ? "active" : ""}`}
                  onClick={() => setProyecto(i)}
                />
              ))}
            </div>
          </div>

          <button
            className="car-btn"
            onClick={() => setProyecto((p) => (p + 1) % m.proyectos.length)}
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}

export default PerfilMiembro;
