import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faSearch } from '@fortawesome/free-solid-svg-icons';
import './Menu.css';

import logoPrincipal from '../../assets/icons/logo-spotify.png';

const Menu = () => {
    return (
        <nav className="menu_navegacao">
            <div className="logo">
                <img src={logoPrincipal} alt="Logo Principal" />
            </div>

            <ul>
                <li>
                    <a href="#">
                        <FontAwesomeIcon icon={faHouse} />
                        <span> Início</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <FontAwesomeIcon icon={faSearch} />
                        <span> Buscar</span>
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Menu;