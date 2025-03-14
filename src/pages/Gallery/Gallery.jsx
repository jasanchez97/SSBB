import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import personajes from '../../data/characters.json'
import { useState, useEffect } from 'react';
import './Gallery.css';
import BackgroundVideo3 from "../../components/BackgroundVideo3/BackgroundVideo3";

function Gallery() {
  const [personajesList, setPersonajesList] = useState([]);

  useEffect(() => {
    setPersonajesList(personajes);
  }, [personajes]);

  const personajesNormales = personajesList.filter(personaje => personaje.categoria === 'Iniciales');
  const personajesDesbloqueables = personajesList.filter(personaje => personaje.categoria === 'Desbloqueables');
  const jefes = personajesList.filter(personaje => personaje.categoria === 'Jefes');

  return (
    <>
      <Header />
      <BackgroundVideo3 />
      <h1 id="gallery-title">Personajes</h1>
      <p id="gallery-p">En esta sección se muestran los personajes de Super Smash Bros Brawl</p>
      <div className="grid-container" id="personajes">
        <h2 className="grid-container-title">Personajes</h2>
        {personajesNormales.map((personaje) => (
          <div className="card" key={personaje.nombre}>
            <h2>{personaje.nombre}</h2>
            <img src={`images/characters/${personaje.nombre}.png`} />
          </div>
        ))}
      </div>
      <div className="grid-container" id="desbloqueables">
        <h2 className="grid-container-title">Desbloqueables</h2>
        {personajesDesbloqueables.map((personaje) => (
          <div className="card" key={personaje.nombre}>
            <h2>{personaje.nombre}</h2>
            <img src={`images/characters/${personaje.nombre}.png`} />
          </div>
        ))}
      </div>
      <div className="grid-container" id="jefes">
        <h2 className="grid-container-title">Jefes</h2>
        {jefes.map((personaje) => (
          <div className="card" key={personaje.nombre}>
            <h2>{personaje.nombre}</h2>
            <img src={`images/characters/${personaje.nombre}.png`} />
          </div>
        ))}
      </div>
      <Footer />
    </>
  )
}

export default Gallery