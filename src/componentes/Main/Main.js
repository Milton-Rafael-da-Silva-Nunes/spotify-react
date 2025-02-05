import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import "./Main.css";

// Importando as imagens manualmente
import img1 from "../../assets/playlist/1.jpeg";
import img2 from "../../assets/playlist/2.jpeg";
import img3 from "../../assets/playlist/3.jpeg";
import img4 from "../../assets/playlist/4.jpeg";
import img5 from "../../assets/playlist/5.jpeg";
import img6 from "../../assets/playlist/6.jpeg";
import img7 from "../../assets/playlist/7.jpeg";
import img8 from "../../assets/playlist/8.jpeg";
import img9 from "../../assets/playlist/9.jpeg";
import img10 from "../../assets/playlist/10.jpeg";
import img11 from "../../assets/playlist/11.jpeg";
import img12 from "../../assets/playlist/12.jpeg";
import img13 from "../../assets/playlist/13.jpeg";
import img14 from "../../assets/playlist/14.jpeg";
import img15 from "../../assets/playlist/15.jpeg";

const playlists = [
    { img: img1, title: "Boas Festas" },
    { img: img2, title: "Feito para você" },
    { img: img3, title: "Dia a dia" },
    { img: img4, title: "Podcasts" },
    { img: img5, title: "Para treinar" },
    { img: img6, title: "Creators" },
    { img: img7, title: "Sertanejo" },
    { img: img8, title: "Samba & Pagode" },
    { img: img9, title: "Funk" },
    { img: img10, title: "MPB" },
    { img: img11, title: "Rock" },
    { img: img12, title: "Hip Hop" },
    { img: img13, title: "Indie" },
    { img: img14, title: "Relax" },
    { img: img15, title: "Música Latina" },
];

const Main = () => {
    return (
        <main className="main-container">
            <div className="main-container__header">
                {/* Seção de boas-vindas */}
                <div className="main-header__playlists">
                    <div className="playlists">
                        <h1>Boas vindas</h1>
                        <h2>Navegar por todas as seções</h2>
                    </div>

                    {/* Scrollable container para as playlists */}
                    <div className="main-scroll__container">
                        <div className="main-scroll__conteudo">
                            <section className="main-scroll__section">
                                {playlists.map((playlist, index) => (
                                    <a href="/" className="cards" key={index}>
                                        <div className={`cards card-${index + 1}`}>
                                            <img src={playlist.img} alt={`capa-${index + 1}`} />
                                            <span>{playlist.title}</span>
                                        </div>
                                    </a>
                                ))}
                            </section>
                        </div>
                    </div>
                </div>

                {/* Seção de artista (escondida por padrão) */}
                <div id="resultado-artista" className="hidden">
                    <div className="grid-container">
                        <div className="artista-card">
                            <div className="card-img">
                                <img id="artista-img" className="artista-img" alt="Imagem Artista" />
                                <div className="play">
                                    <span>
                                        <FontAwesomeIcon icon={faPlay} />
                                    </span>
                                </div>
                            </div>

                            <div className="card-texto">
                                <a title="Foo Fighters" className="vst" href="/">
                                    <span className="artista-nome">Foo Fighters</span>
                                    <span className="artista-categoria">Artista</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Main;
