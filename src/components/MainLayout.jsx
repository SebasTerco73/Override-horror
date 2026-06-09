import { Outlet } from 'react-router-dom'

import BloodCanvas from '../components/BloodCanvas'
import HorrorTittle from '../components/HorrorTittle/HorrorTittle'
import Sidebar from '../components/sidebar/Sidebar'
import Footer from '../components/footer/Footer'
import ScrollButtons from '../components/scrollButtons/ScrollButtons'

function MainLayout() {
  return (
    <>
      <BloodCanvas />
      <Sidebar />
      <div className="main-content">
        <HorrorTittle />
        <div className="section-content">
          <Outlet />
        </div>
      </div>
      <Footer />
      <ScrollButtons />
    </>
  )
}

export default MainLayout