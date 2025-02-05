import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './MenuButton.module.css';

const MenuButton = ({ icone, label, onClick }) => {
    return (
        <li>
            <button onClick={onClick} aria-label={label} className={styles.button}>
                <FontAwesomeIcon icon={icone} />
                <span>{label}</span>
            </button>
        </li>
    );
};

export default MenuButton;