import foto from "./assets/foto.jpg";
import { SocialLinks } from "./sociallinks.jsx";

export const Tarjeta = () => {
  return (
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
            <button className="contact-btn">Contact me</button>
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
            <li className="tag__name">NodeJS</li>
            <li className="tag__name">IA</li>
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
  <>
  <div class="tarjeta">
    <img src="./src/assets/captura1.png" alt="Proyecto Chatbot" />

    <div class="textBox">
      <h1 class="text head">Chatbot</h1>
      <p class="text price">Python + NLP + LLM</p>
    </div>
  </div>

  <div class="tarjeta">
    <img src="./src/assets/captura2.png" alt="Proyecto Inmobiliaria" />

    <div class="textBox">
      <h1 class="text head">Inmobiliaria</h1>
      <p class="text price">HTML + CSS + JavaScript</p>
    </div>
  </div>

    <div class="tarjeta">
    <img src="./src/assets/captura3.png" alt="Proyecto Videojuego 2D" />

    <div class="textBox">
      <h1 class="text head">Videojuego 2D</h1>
      <p class="text price">Godot 4</p>
    </div>
  </div>
  </>
  );
}