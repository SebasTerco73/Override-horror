import { useState, useEffect } from "react";
import "./ScrollButtons.css";
import arrowUp from "../../assets/img/manoup.png";
import arrowDown from "../../assets/img/manodown.png";

function ScrollButtons() {
  const [scrolled, setScrolled] = useState(false);   
  const [atBottom, setAtBottom] = useState(false);  

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      setScrolled(scrollY > 100);
      setAtBottom(maxScroll - scrollY < 100);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goTop    = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const goBottom = () => window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });

  // ▲ visible cuando scrolleaste (no estás arriba del todo)
  // ▼ visible cuando scrolleaste pero aún no llegaste al fondo
  return (
    <div className="scroll-buttons">
        <button
        onClick={goTop}
        aria-label="Ir al inicio"
        title="Ir al inicio"
        className={scrolled ? "sb-visible" : ""}
      ><img src={arrowUp} alt="Ir al inicio" /></button>
      <button
        onClick={goBottom}
        aria-label="Ir al final"
        title="Ir al final"
        className={atBottom ? "" : "sb-visible"}
      ><img src={arrowDown} alt="Ir al final" /></button>
      
    </div>
  );
}

export default ScrollButtons;