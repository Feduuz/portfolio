import { StrictMode, use, useEffect, useRef, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Tarjeta, Scroll, Proyectos } from './tarjeta.jsx'
import videoDark from "./assets/video_fondo.mp4";
import videoLight from "./assets/video_fondo_claro.mp4";

function App() {
  const videoRef = useRef(null);
  const [darkMode, setDarkMode] = useState(true);
  const [showScroll, setShowScroll] = useState(true);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.8;
    }
  }, []);

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
    document.body.classList.toggle("light", !darkMode);
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY < 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    }, []);

  return (
    <>
      <video
        key={darkMode ? "dark-video" : "light-video"}
        ref={videoRef}
        className="video-background"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      >
        <source
          src={darkMode ? videoDark : videoLight}
          type="video/mp4"
        />
      </video>

      <div className="theme-switch">
        <label className="switch">
          <input
            type="checkbox"
            className="theme-checkbox"
            checked={!darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />
          <span className="slider"></span>
        </label>
      </div>

      <section className="hero">
        <Tarjeta />
        <Scroll visible={showScroll} />
      </section>

      <section className="projects">
        <Proyectos />
      </section>
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)