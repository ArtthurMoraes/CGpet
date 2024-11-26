// src/components/Contatos.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Contatos = () => {
    const [resultados, setResultados] = useState([]); // Dados carregados do servidor
    const [campoPesquisa, setCampoPesquisa] = useState('');
    const [dadosOriginais, setDadosOriginais] = useState([]); // Para armazenar todos os dados
    const [erro, setErro] = useState(null); // Para lidar com erros

    // Carrega os dados do servidor quando o componente é montado
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/contatos');
                setResultados(response.data);
                setDadosOriginais(response.data); // Armazena os dados originais para o filtro
            } catch (error) {
                setErro('Erro ao carregar os dados. Tente novamente mais tarde.');
            }
        };

        fetchData();
    }, []);

    // Função de pesquisa
    const pesquisar = (e) => {
        const query = e.target.value.toLowerCase();
        setCampoPesquisa(query);

        if (!query) {
            setResultados(dadosOriginais);
            return;
        }

        const resultadosFiltrados = dadosOriginais.filter((dado) => {
            const ong = dado.ong.toLowerCase();
            const servicos = dado.servicos.toLowerCase();
            const localizacao = (dado.localizacao || '').toLowerCase();

            return ong.includes(query) || servicos.includes(query) || localizacao.includes(query);
        });

        setResultados(
            resultadosFiltrados.length
                ? resultadosFiltrados
                : [{ ong: "Nenhum resultado encontrado", servicos: "", localizacao: "", link: "#" }]
        );
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
                {erro ? (
                    <p className="erro">{erro}</p>
                ) : (
                    resultados.map((dado, index) => (
                        <div key={index} className="card">
                            <h2>{dado.ong}</h2>
                            {dado.servicos && <p><strong>Serviços:</strong> {dado.servicos}</p>}
                            {dado.localizacao && <p><strong>Localização:</strong> {dado.localizacao}</p>}
                            {dado.link && (
                                <a href={dado.link} target="_blank" rel="noopener noreferrer">
                                    Saiba mais
                                </a>
                            )}
                        </div>
                    ))
                )}
            </section>
        </div>
    );
};

export default Contatos;
