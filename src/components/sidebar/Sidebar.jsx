import { useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/img/override.png'
import './Sidebar.css'

function Sidebar({ onNavegar }) {
  const sidebarRef = useRef(null)

  useEffect(() => {
    function adjustSidebar() {
      if (window.innerWidth > 768) return
      const footer = document.querySelector('.horror-footer')
      const sidebar = sidebarRef.current
      if (!footer || !sidebar) return
      const footerRect = footer.getBoundingClientRect()
      const windowHeight = window.innerHeight
      if (footerRect.top < windowHeight) {
        sidebar.style.bottom = `${windowHeight - footerRect.top}px`
      } else {
        sidebar.style.bottom = '0px'
      }
    }

    adjustSidebar()
    window.addEventListener('scroll', adjustSidebar)
    window.addEventListener('resize', adjustSidebar)
    return () => {
      window.removeEventListener('scroll', adjustSidebar)
      window.removeEventListener('resize', adjustSidebar)
    }
  }, [])

  const items = [
    { to: '/presentacion', icon: 'fa-solid fa-users',   label: 'Presentación' },
    { to: '/bestiario',    icon: 'fa-brands fa-wolf-pack-battalion',    label: 'Bestiario'    },
    { to: '/equipo',       icon: 'fa-solid fa-skull',   label: 'Demonios'     },
    { to: '/peliculas',     icon: 'fa-solid fa-film', label: 'Películas'    },
    { to: '/bitacora',     icon: 'fa-solid fa-book', label: 'Bitácora'    },
  ]

  return (
    <aside className="sidebar" ref={sidebarRef}>
      <img className="logo" src={logo} alt="Logo Override" />

      {items.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          className={({ isActive }) => `sidebar-btn ${isActive ? 'active' : ''}`}
          onClick={onNavegar}
        >
          <i className={item.icon}></i>
          <span className="nav-label">{item.label}</span>
        </NavLink>
      ))}
    </aside>
  )
}

export default Sidebar