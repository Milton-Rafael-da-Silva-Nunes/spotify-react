import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faSearch, faBook, faPlus, faGlobe, faMusic, faHeadphones, faDrum, faGuitar, faPlay, faMicrophone, faPodcast } from '@fortawesome/free-solid-svg-icons';
import styles from './Menu.module.css';

import logoPrincipal from '../../assets/icons/logo-spotify.png';

import MenuButton from "./MenuButton";
import MenuGenero from "./MenuGenero";

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

    const handleBuscaClick = () => {
        setTelaAtiva("buscar");
        if (inputBuscaRef && inputBuscaRef.current) {
            inputBuscaRef.current.focus();
        }
    };

    return (
        <nav className={styles.menu_navegacao}>
            <div className={styles.logo}>
                <a href="/">
                    <img src={logoPrincipal} alt="Logo Principal" />
                </a>
            </div>

            <ul className={styles.menu__links}>
                <MenuButton
                    icone={faHouse}
                    label="Início"
                    onClick={() => {
                        setTelaAtiva("inicio");
                        setGeneroSelecionado(null);
                    }}
                />

                <MenuButton
                    icone={faSearch}
                    label="Buscar"
                    onClick={handleBuscaClick}
                />
            </ul>

            <div className={styles.menu__biblioteca}>
                <div className={styles.titulo__biblioteca}>
                    <a href="/" aria-label="Sua Biblioteca">
                        <FontAwesomeIcon icon={faBook} />
                        <span>Sua Biblioteca</span>
                    </a>
                    <FontAwesomeIcon icon={faPlus} style={{ fontSize: '24px' }} />
                </div>

                <section className={styles.section__playlist}>
                    <div className={styles.playlist__conteudo}>
                        <span className={styles.titulo}>Crie sua primeira Playlist</span>
                        <span className={styles.subtitulo}>É fácil, vamos te ajudar</span>
                        <button className={styles.btn_criar_playlist}>Criar Playlist</button>
                    </div>
                </section>
            </div>

            <section className={styles.section__generos}>
                <div className={styles.generos__conteudo}>
                    <ul>
                        {generos.map(genero => (
                            <MenuGenero
                                key={genero.nome}
                                genero={genero}
                                onClick={setGeneroSelecionado}
                            />
                        ))}
                    </ul>
                </div>
            </section>

            <div className={styles.linguagem}>
                <a href="/">
                    <FontAwesomeIcon icon={faGlobe} />
                    <span>Português do Brasil</span>
                </a>
            </div>
        </nav>
    );
}

export default Menu;