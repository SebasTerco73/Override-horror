import { useState, useEffect } from "react";
import "./Tree.css";

// Pre-calculated outside render to keep components pure
const FLICKER_DURATIONS = Array.from({ length: 10 }, () => 3 + Math.random() * 4);

const treeData = [
  { line: "/ La casita del horror", depth: 0, type: "root" },
  { line: "├── public/", depth: 0, type: "folder" },
  { line: "│   └── favicon.png", depth: 1, type: "file" },
  { line: "├── src/", depth: 0, type: "folder" },
  { line: "│   ├── assets/", depth: 1, type: "folder" },
  { line: "│   ├── components/", depth: 1, type: "folder" },
  { line: "│   │   ├── bestiary", depth: 2, type: "folder" },
  { line: "│   │   ├── bitacora", depth: 2, type: "folder" },
  { line: "│   │   ├── equipo", depth: 2, type: "folder" },
  { line: "│   │   ├── footer", depth: 2, type: "folder" },
  { line: "│   │   ├── horrorMovies", depth: 2, type: "folder" },
  { line: "│   │   ├── horrorTittle", depth: 2, type: "folder" },
  { line: "│   │   ├── loadingTransition", depth: 2, type: "folder" },
  { line: "│   │   ├── perfilMiembro", depth: 2, type: "folder" },
  { line: "│   │   ├── presentacion", depth: 2, type: "folder" },
  { line: "│   │   ├── sidebar", depth: 2, type: "folder" },
  { line: "│   │   ├── tree", depth: 2, type: "folder" },
  { line: "│   │   ├── BloodCanvas.jsx", depth: 2, type: "jsx" },
  { line: "│   │   ├── MainLayout.jsx", depth: 2, type: "jsx" },
  { line: "│   │   └── ScrollToTop.jsx", depth: 2, type: "jsx" },
  { line: "│   ├── data/", depth: 1, type: "folder" },
  { line: "│   │   ├── bestiary.json", depth: 2, type: "json" },
  { line: "│   │   └── miembros.js", depth: 2, type: "js" },
  { line: "│   ├── fonts/", depth: 1, type: "folder" },
  { line: "│   │   ├── blood-font.ttf", depth: 2, type: "font" },
  { line: "│   │   └── text-font.ttf", depth: 2, type: "font" },
  { line: "│   ├── index.css", depth: 1, type: "css" },
  { line: "│   ├── main.jsx", depth: 1, type: "jsx" },
  { line: "│   └── App.jsx", depth: 1, type: "jsx" },
  { line: "├── index.html", depth: 0, type: "html" },
  { line: "├── package.json", depth: 0, type: "json" },
  { line: "├── vite.config.js", depth: 0, type: "js" },
  { line: "├── .env.example", depth: 0, type: "env" },
  { line: "├── .gitignore", depth: 0, type: "config" },
  { line: "└── README.md", depth: 0, type: "md" },
];

const typeColors = {
  root:   "#cc0000",
  folder: "#e05c5c",
  jsx:    "#ff6b6b",
  js:     "#ff9a9a",
  json:   "#d46a6a",
  html:   "#f08080",
  font:   "#b04040",
  env:    "#903030",
  config: "#903030",
  md:     "#c06060",
};

function Flicker({ children, delay = 0, durationIndex = 0 }) {
  const duration = FLICKER_DURATIONS[durationIndex % FLICKER_DURATIONS.length];
  return (
    <span
      style={{
        animation: `flicker ${duration}s ${delay}s infinite`,
        display: "inline",
      }}
    >
      {children}
    </span>
  );
}

export default function ProjectTree() {
  const [visible, setVisible] = useState([]);
  const [hoveredIdx, setHoveredIdx] = useState(null);

  useEffect(() => {
    treeData.forEach((_, i) => {
      setTimeout(() => {
        setVisible((v) => [...v, i]);
      }, 60 + i * 55 + Math.random() * 30);
    });
  }, []);

  return (
    <section className="horror-tree-wrap">
      <span className="corner-skull" style={{ top: 12, left: 14 }}>☠</span>
      <span className="corner-skull" style={{ top: 12, right: 14 }}>☠</span>
      <span className="corner-skull" style={{ bottom: 12, left: 14 }}>☠</span>
      <span className="corner-skull" style={{ bottom: 12, right: 14 }}>☠</span>

      <h2 className="horror-tree-title">
        <Flicker delay={0.2} durationIndex={0}>🌲</Flicker>
        {"  "} Árbol Maldito  {"  "}
        <Flicker delay={1.1} durationIndex={1}>🌲</Flicker>
      </h2>

      <ul className="tree-lines">
        {treeData.map((item, i) => {
          const isRevealed = visible.includes(i);
          const color = typeColors[item.type] || "#cc6666";
          const isRoot = item.type === "root";

          const match = item.line.match(/^(.*?)([\w.-]+\/?|\/ .+)$/);
          const prefix = match ? match[1] : item.line;
          const name = match ? match[2] : "";

          return (
            <li
              key={i}
              className={`tree-line${isRevealed ? " revealed" : ""}`}
              onMouseEnter={() => setHoveredIdx(i)}
              onMouseLeave={() => setHoveredIdx(null)}
            >
              <span className="tree-prefix">{prefix}</span>
              <span
                className={`tree-name${isRoot ? " root-label" : ""}`}
                style={{ color }}
              >
                {isRoot ? <Flicker durationIndex={2}>{name}</Flicker> : name}
              </span>
              {hoveredIdx === i && <span className="blood-drop" />}
            </li>
          );
        })}
      </ul>
    </section>
  );
}