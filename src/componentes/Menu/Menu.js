import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faSearch, faBook, faPlus, faGlobe, faMusic, faHeadphones, faDrum, faGuitar, faPlay, faMicrophone, faPodcast } from '@fortawesome/free-solid-svg-icons';
import './Menu.css';

import logoPrincipal from '../../assets/icons/logo-spotify.png';

const Menu = () => {
    return (
        <nav className="menu_navegacao">
            <div className="logo">
                <img src={logoPrincipal} alt="Logo Principal" />
            </div>

            <ul className="menu__links">
                <li>
                    <a href="/" aria-label="Início">
                        <FontAwesomeIcon icon={faHouse} />
                        <span> Início</span>
                    </a>
                </li>
                <li>
                    <a href="/" aria-label="Buscar">
                        <FontAwesomeIcon icon={faSearch} />
                        <span> Buscar</span>
                    </a>
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
                    <a href="/">
                        <FontAwesomeIcon icon={faGuitar} />
                        <span>Rock</span>
                    </a>

                    <a href="/">
                        <FontAwesomeIcon icon={faPlay} />
                        <span>Funk</span>
                    </a>

                    <a href="/">
                        <FontAwesomeIcon icon={faMusic} />
                        <span>Pop</span>
                    </a>

                    <a href="/">
                        <FontAwesomeIcon icon={faDrum} />
                        <span>Pagode</span>
                    </a>

                    <a href="/">
                        <FontAwesomeIcon icon={faHeadphones} />
                        <span>Dance</span>
                    </a>

                    <a href="/">
                        <FontAwesomeIcon icon={faMicrophone} />
                        <span>Sertanejo</span>
                    </a>

                    <a href="/">
                        <FontAwesomeIcon icon={faPodcast} />
                        <span>Podcast</span>
                    </a>
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