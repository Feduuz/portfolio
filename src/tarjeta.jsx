import foto from "./assets/foto.jpg";
import { SocialLinks } from "./sociallinks.jsx";

export const Tarjeta = () => {
  return (
  <section className="about-section">
    <h2 className="about-title">ABOUT ME</h2>

    <div className="cards-wrapper">

      <div className="uiverse-card">
        <div className="profile-pic">
          <img src={foto} alt="Foto de Federico Blanco" />
        </div>

        <div className="bottom">
          <div className="content">
            <span className="name">Federico Blanco</span>
            <span className="about-me">Software Developer</span>
          </div>

          <div className="bottom-bottom">
            <button className="contact-btn" onClick={() => window.location.href = "https://mail.google.com/mail/?view=cm&to=federico.mbv@gmail.com"}>Contact me</button>
          </div>
        </div>
      </div>

      <SocialLinks />

      <div className="card tags-card">
        <span className="title">SKILLS</span>
        <div className="card__tags">
          <ul className="tag">
            <li className="tag__name">Java</li>
            <li className="tag__name">JavaScript</li>
            <li className="tag__name">Python</li>
            <li className="tag__name">SpringBoot</li>
            <li className="tag__name">Node.JS</li>
            <li className="tag__name">AI</li>
            <li className="tag__name">LLM</li>
            <li className="tag__name">HTML</li>
            <li className="tag__name">CSS</li>
            <li className="tag__name">Git</li>
            <li className="tag__name">MySQL</li>
            <li className="tag__name">MongoDB</li>
            <li className="tag__name">API</li>
            <li className="tag__name">Postman</li>
            <li className="tag__name">Office</li>
            <li className="tag__name">Hardware</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  );
};

export const Scroll = ({ visible }) => {
  return (
    <div className={`container_mouse ${visible ? "show" : "hide"}`}>
      <span className="mouse-btn">
          <span className="mouse-scroll"></span>
      </span>
      <span>Scroll Down</span>
    </div>
  );
};

export const Proyectos = () => {
  return (
    <section className="projects-section">

      <h2 className="projects-title">PROJECTS</h2>

      <div className="projects-cards">
        <div className="tarjeta"  onClick={() => window.open("https://github.com/Feduuz/Chatbot", "_blank")}>
          <img src="./src/assets/captura1.png" alt="Proyecto Chatbot" />
          <div className="textBox">
            <h1 className="text head">Chatbot</h1>
            <p className="text p">Python + NLP + LLM</p>
          </div>
        </div>

        <div className="tarjeta" onClick={() => window.open("https://github.com/Feduuz/Inmobiliaria", "_blank")}>
          <img src="./src/assets/captura2.png" alt="Proyecto Inmobiliaria" />
          <div className="textBox">
            <h1 className="text head">Real Estate</h1>
            <p className="text p">HTML + CSS + JavaScript</p>
          </div>
        </div>

        <div className="tarjeta" onClick={() => window.open("https://github.com/RamiroGarro/proyectoJuegoPlataformas2d", "_blank")}>
          <img src="./src/assets/captura3.png" alt="Proyecto Videojuego 2D" />
          <div className="textBox">
            <h1 className="text head">Videogame 2D</h1>
            <p className="text p">Godot 4</p>
          </div>
        </div>
      </div>

    </section>
  );
}