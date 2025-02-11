import React, { forwardRef } from "react";
import './Header.css';

import iconLeft from '../../assets/icons/small-left.png';
import iconRight from '../../assets/icons/small-right.png';
import iconSearch from '../../assets/icons/search.png';

// Usando forwardRef para permitir que a ref seja passada
const Header = forwardRef((props, ref) => {
    return (
        <nav className="header__navegacao">
            <div className="navegacao">
                <button className="button-left">
                    <img src={iconLeft} alt="Seta Esquerda" />
                </button>
                <button className="button-rigth">
                    <img src={iconRight} alt="Seta Direita" />
                </button>
            </div>

            <div className="header__search">
                <img src={iconSearch} alt="" />
                <input
                    ref={ref} // A ref é passada aqui
                    type="text"
                    maxLength="800"
                    autoCorrect="off"
                    autoCapitalize="off"
                    spellCheck="false"
                    placeholder="O que você quer ouvir?"
                />
            </div>

            <div className="header__login">
                <button className="subscribe">Inscreva-se</button>
                <button className="login">Entrar</button>
            </div>
        </nav>
    );
});

export default Header;