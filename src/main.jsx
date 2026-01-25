import { StrictMode, useEffect, useRef, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Tarjeta, Scroll, Proyectos } from './tarjeta.jsx'
import videoDark from "./assets/video_fondo.mp4";

function App() {
  const videoRef = useRef(null);
  const [showScroll, setShowScroll] = useState(true);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.8;
    }
  }, []);

  useEffect(() => {
    document.body.classList.add("dark");
  }, []);

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
        ref={videoRef}
        className="video-background"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      >
        <source src={videoDark} type="video/mp4" />
      </video>

      <section className="hero">
        <Tarjeta />
        <Scroll visible={showScroll} />
      </section>

      <section className="projects">
        <Proyectos />
      </section>

      <footer className="footer">
        <div className="footer-line"></div>
        <span className="footer-text">Federico Blanco · 2026</span>
      </footer>
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)