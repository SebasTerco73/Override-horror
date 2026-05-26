import criaturas from '../../data/bestiary.json';
import "./Bestiary.css";    
import { useState, useMemo } from 'react'

const tipos = ["Todos", ...new Set(criaturas.map(c => c.tipo))]

function nivelLabel(p) {
  if (p <= 4) return 'bajo'
  if (p <= 7) return 'medio'
  return 'alto'
}

function Bestiary() {
  const [busqueda, setBusqueda]   = useState('')
  const [tipoActivo, setTipo]     = useState('Todos')
  const [ordenPeligro, setOrden]  = useState('ninguno') // 'asc' | 'desc' | 'ninguno'
  const [flipped, setFlipped]     = useState(null)

  const resultado = useMemo(() => {
    let lista = [...criaturas]

    if (busqueda.trim())
      lista = lista.filter(c =>
        c.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
        c.habilidades.some(h => h.toLowerCase().includes(busqueda.toLowerCase()))
      )

    if (tipoActivo !== 'Todos')
      lista = lista.filter(c => c.tipo === tipoActivo)

    if (ordenPeligro === 'asc')  lista.sort((a, b) => a.peligro - b.peligro)
    if (ordenPeligro === 'desc') lista.sort((a, b) => b.peligro - a.peligro)

    return lista
  }, [busqueda, tipoActivo, ordenPeligro])

  function toggleOrden() {
    setOrden(o => o === 'ninguno' ? 'desc' : o === 'desc' ? 'asc' : 'ninguno')
  }

  const ordenLabel = { ninguno: '— Peligro', desc: '↓ Peligro', asc: '↑ Peligro' }

  return (
    <div className="bestiary">

      <div className="bestiary-header">
        <h2 className="bestiary-titulo">BESTIARIO</h2>
        <p className="bestiary-subtitulo">{resultado.length} criaturas encontradas</p>
      </div>

      <div className="bestiary-controles">
        <input
          className="bestiary-buscador"
          type="text"
          placeholder="Buscar por nombre o habilidad..."
          value={busqueda}
          onChange={e => setBusqueda(e.target.value)}
        />

        <div className="bestiary-filtros">
          {tipos.map(t => (
            <button
              key={t}
              className={`filtro-btn ${tipoActivo === t ? 'activo' : ''}`}
              onClick={() => setTipo(t)}
            >
              {t}
            </button>
          ))}
        </div>

        <button className="orden-btn" onClick={toggleOrden}>
          {ordenLabel[ordenPeligro]}
        </button>
      </div>

      {resultado.length === 0 && (
        <p className="bestiary-vacio">Ninguna criatura coincide con la búsqueda.</p>
      )}

      <div className="bestiary-grid">
        {resultado.map(c => (
          <div
            key={c.id}
            className={`card-wrapper ${flipped === c.id ? 'flipped' : ''}`}
            onClick={() => setFlipped(flipped === c.id ? null : c.id)}
          >
            <div className="card-inner">

              {/* FRENTE */}
              <div className="card-frente">
                <div className={`card-peligro nivel-${nivelLabel(c.peligro)}`}>
                  {c.peligro}/10
                </div>
                <h3 className="card-nombre">{c.nombre}</h3>
                <span className="card-tipo">{c.tipo}</span>
                <ul className="card-habilidades">
                  {c.habilidades.map((h, i) => <li key={i}>{h}</li>)}
                </ul>
                <span className="card-hint">click para más</span>
              </div>

              {/* DORSO */}
              <div className="card-dorso">
                <h3 className="card-nombre">{c.nombre}</h3>
                <p className="card-desc">{c.descripcion}</p>
                <div className={`card-peligro-grande nivel-${nivelLabel(c.peligro)}`}>
                  PELIGRO: {c.peligro}/10
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Bestiary