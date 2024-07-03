import React from 'react';
import styles from "./Popup.module.css";

const Popup = ({ action, children }) => {
    return (
        <div className={styles.overlay} onClick={action}>
            <div className={styles.contentArea} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default Popup;