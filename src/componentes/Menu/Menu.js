import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faSearch, faBook, faPlus, faGlobe, faMusic, faHeadphones, faDrum, faGuitar, faPlay, faMicrophone, faPodcast } from '@fortawesome/free-solid-svg-icons';
import './Menu.css';

import logoPrincipal from '../../assets/icons/logo-spotify.png';

const generos = [
    { nome: "Rock", icon: faGuitar },
    { nome: "Funk", icon: faPlay },
    { nome: "Pop", icon: faMusic },
    { nome: "Pagode", icon: faDrum },
    { nome: "Dance", icon: faHeadphones },
    { nome: "Sertanejo", icon: faMicrophone },
    { nome: "Podcast", icon: faPodcast }
];

const Menu = ({ setTelaAtiva, setGeneroSelecionado, inputBuscaRef }) => {
    return (
        <nav className="menu_navegacao">
            <div className="logo">
                <a href="/">
                    <img src={logoPrincipal} alt="Logo Principal" />
                </a>
            </div>

            <ul className="menu__links">
                <li>
                    <button onClick={() => {
                        setTelaAtiva("inicio"); // Muda para a tela de início
                        setGeneroSelecionado(null); // Reseta o gênero
                    }} aria-label="Início">
                        <FontAwesomeIcon icon={faHouse} />
                        <span> Início</span>
                    </button>
                </li>
                <li>
                    <button onClick={() => {
                        setTelaAtiva("buscar"); // Muda para a tela de busca
                        if (inputBuscaRef && inputBuscaRef.current) {
                            inputBuscaRef.current.focus(); // Define o foco no input de busca
                        }
                    }} aria-label="Buscar">
                        <FontAwesomeIcon icon={faSearch} />
                        <span> Buscar</span>
                    </button>
                </li>
            </ul>

            <div className="menu__biblioteca">
                <div className="titulo__biblioteca">
                    <a href="/" aria-label="Sua Biblioteca">
                        <FontAwesomeIcon icon={faBook} />
                        <span>Sua Biblioteca</span>
                    </a>
                    <FontAwesomeIcon icon={faPlus} style={{ fontSize: '24px' }} />
                </div>

                <section className="menu-section__playlist">
                    <div className="section-playlist__conteudo">
                        <span className="text titulo">Crie sua primeira Playlist</span>
                        <span className="text subtitulo">É fácil, vamos te ajudar</span>
                        <button className="btn-criar-playlist">Criar Playlist</button>
                    </div>
                </section>
            </div>

            <section className="menu-section__generos">
                <div className="section-generos__conteudo">
                    <ul>
                        {generos.map(({ nome, icon }) => (
                            <li key={nome}>
                                <button onClick={() => setGeneroSelecionado(nome)} className="menu-button">
                                    <FontAwesomeIcon icon={icon} />
                                    <span>{nome}</span>
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <div className="menu-linguagem">
                <a href="/">
                    <FontAwesomeIcon icon={faGlobe} />
                    <span>Português do Brasil</span>
                </a>
            </div>
        </nav>
    );
}

export default Menu;