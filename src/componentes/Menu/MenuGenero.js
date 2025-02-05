import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './MenuGenero.module.css';

const GenreItem = ({ genero, onClick }) => {
    return (
        <li>
            <button onClick={() => onClick(genero)} className={styles.button_genero}>
                <FontAwesomeIcon icon={genero.icon} />
                <span>{genero.nome}</span>
            </button>
        </li>
    );
};

export default GenreItem;