import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faSearch, faBook, faPlus } from '@fortawesome/free-solid-svg-icons';
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


            <div className="container__biblioteca">
                <div className="titulo__biblioteca">
                    <a href="/" aria-label="Sua Biblioteca">
                        <FontAwesomeIcon icon={faBook} />
                        <span>Sua Biblioteca</span>
                    </a>
                    <FontAwesomeIcon icon={faPlus} style={{fontSize: '24px'}}/>
                </div>

                <div className="container__playlist">
                    <h1>Crie sua primeira Playlist</h1>
                    <p>É fácil, vamos te ajudar</p>
                </div>

            </div>

        </nav>
    );
}

export default Menu;