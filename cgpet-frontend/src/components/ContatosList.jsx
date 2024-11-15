// src/components/Contatos.jsx
import React, { useState, useEffect } from 'react';
import dados from '../data/dados';

const Contatos = () => {
    const [resultados, setResultados] = useState(dados);
    const [campoPesquisa, setCampoPesquisa] = useState('');

    useEffect(() => {
        setResultados(dados);
    }, []);

    const pesquisar = (e) => {
        const query = e.target.value.toLowerCase();
        setCampoPesquisa(query);

        if (!query) {
            setResultados(dados);
            return;
        }

        const resultadosFiltrados = dados.filter((dado) => {
            const ong = dado.ong.toLowerCase();
            const servicos = dado.servicos.toLowerCase();
            const localizacao = (dado.localizacao || dado.local).toLowerCase();

            return ong.includes(query) || servicos.includes(query) || localizacao.includes(query);
        });

        setResultados(resultadosFiltrados.length ? resultadosFiltrados : [{ong: "Nenhum resultado encontrado", servicos: "", localizacao: "", link: "#"}]);
    };

    return (
        <div className="contatos">
            <input
                type="text"
                id="campo-pesquisa"
                placeholder="Pesquisar..."
                value={campoPesquisa}
                onChange={pesquisar}
            />
            <section id="resultados-pesquisa" className="cards">
                {resultados.map((dado, index) => (
                    <div key={index} className="card">
                        <h2>{dado.ong}</h2>
                        {dado.servicos && <p><strong>Serviços:</strong> {dado.servicos}</p>}
                        {dado.localizacao && <p><strong>Localização:</strong> {dado.localizacao}</p>}
                        {dado.link && <a href={dado.link} target="_blank" rel="noopener noreferrer">Saiba mais</a>}
                    </div>
                ))}
            </section>
        </div>
    );
};

export default Contatos;
