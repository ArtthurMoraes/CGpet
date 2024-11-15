// src/pages/Contatos.jsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Contatos from '../components/ContatosList';

const ContatosPage = () => {
  return (
    <>
      <Header />
      <section className="contatos">
        <h1>CONTATOS</h1>
        <Contatos /> {/* Renderiza o componente de contatos com a lógica de pesquisa */}
      </section>
      <Footer />
    </>
  );
};

export default ContatosPage;
