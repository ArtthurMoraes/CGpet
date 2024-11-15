// src/pages/Home.jsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import contactIcon from '../assets/contato.png';
import aboutIcon from '../assets/tutor.png';
import tipsIcon from '../assets/cadastro.png';
import dogImage from '../assets/cachorro-pastoreio-pet.jpg';

const Home = () => (
  <>
    <Header />
    <section id="home" className="intro main-bg section">
      <div className="main-content intro-content">
        <div className="intro-img">
          <section className="hero">
            <div className="hero-text">
              <p>SEJA BEM-VINDO AO NOSSO SITE!</p>
              <div className="icons">
                <div className="icon-item">
                  <a href="/contatos">
                    <img src={contactIcon} alt="Contato" />
                    <p>Contato</p>
                  </a>
                </div>
                <div className="icon-item">
                  <a href="#about">
                    <img src={aboutIcon} alt="Sobre" />
                    <p>Sobre</p>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>

    <section id="about" className="about">
      <h2>CONHEÇA NOSSO TRABALHO</h2>
      <p>Nosso objetivo é conectar pessoas com locais que oferecem serviços diversos para animais de estimação. Juntos, podemos promover o bem-estar animal e ajudar a controlar a população de animais de maneira ética e responsável.</p>
      <div className="about-image">
        <img src={dogImage} alt="Cachorro Sobre Nós" />
      </div>
    </section>

    <Footer />
  </>
);

export default Home;
