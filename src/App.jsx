import { AnimatePresence, motion } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Presentacion from "./components/presentacion/Presentacion";
import Equipo from "./components/equipo/Equipo";
import PerfilMiembro from "./components/perfilMiembro/PerfilMiembro";
import Bestiary from "./components/bestiary/Bestiary";
import HorrorMovies from "./components/horrorMovies/HorrorMovies";
import Bitacora from "./components/bitacora/Bitacora";
import ScrollToTop from "./components/ScrollToTop";
import LoadingTransition from "./components/loadingTransition/LoadingTransition";
import { useState, useEffect } from "react";

function App() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const [isFading, setIsFading] = useState(false);
  const [displayLocation, setDisplayLocation] = useState(location);

  useEffect(() => {
    if (location.pathname === displayLocation.pathname) return;

    const sinBruja = (from, to) => {
      const desdeEquipo = from.startsWith('/equipo');
      const hastaEquipo = to.startsWith('/equipo');
      return desdeEquipo && hastaEquipo;
    };

    if (sinBruja(displayLocation.pathname, location.pathname)) {
      setTimeout(() => {
        setIsFading(true);
        setTimeout(() => {
          setDisplayLocation(location);
          setIsFading(false);
        }, 300);
      }, 0);
      return;
    }

    const timer = setTimeout(() => {
      setIsLoading(true);

      const innerTimer = setTimeout(() => {
        setDisplayLocation(location);
        setIsLoading(false);
      }, 1200);

      return () => clearTimeout(innerTimer);
    }, 0);

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  return (
    <>
      <ScrollToTop />

      {/* Bruja — rutas principales */}
      <AnimatePresence>
        {isLoading && <LoadingTransition key="loading" />}
      </AnimatePresence>

      {/* Fade suave — entre rutas de equipo */}
      <AnimatePresence>
        {isFading && (
          <motion.div
            key="fade"
            style={{ position: 'fixed', inset: 0, background: 'black', zIndex: 9999 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </AnimatePresence>

      <Routes location={displayLocation} key={displayLocation.pathname}>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Presentacion />} />
          <Route path="/presentacion" element={<Presentacion />} />
          <Route path="/equipo" element={<Equipo />} />
          <Route path="/bestiario" element={<Bestiary />} />
          <Route path="/peliculas" element={<HorrorMovies />} />
          <Route path="/bitacora" element={<Bitacora />} /> 
        </Route>
        <Route path="/equipo/:id" element={<PerfilMiembro />} />
      </Routes>
    </>
  );
}

export default App;