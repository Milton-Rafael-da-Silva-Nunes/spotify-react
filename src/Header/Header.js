import React from "react";
import './Header.css';

const Header = () => {
    return (
        <nav className="header__navegacao">
            <div claclassNamess="navegacao">
                <button className="button-left">
                    <img src="./src/assets/icons/small-left.png" alt="Seta Esquerda" />
                </button>
                <button class="button-rigth">
                    <img src="./src/assets/icons/small-right.png" alt="Seta Direita" />
                </button>
            </div>

            <div className="header-search">
                <img src="./src/assets/icons/search.png" alt="" />
                <input id="search-input" type="text" maxlength="800" placeholder="O que você quer ouvir?" />
            </div>

            <div className="header__login">
                <button className="subscribe">Inscreva-se</button>
                <button className="login">Entrar</button>
            </div>
        </nav>
    );
}

export default Header;