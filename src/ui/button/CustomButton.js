import React from 'react';
import styles from "./CustomButton.module.css";

const CustomButton = ({ action, value, customStyles }) => {
    return (
        <button onClick={action} className={styles.blackWhiteButton}  style={customStyles}>
            {value}
        </button>
    );
};

export default CustomButton;