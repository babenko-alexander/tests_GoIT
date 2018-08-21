import React from 'react';
import styles from './ModalChild.css';

const ModalChild = ({close, children}) => {
    return (
        <div className={styles.modal__backdrop}  onClick={close}>
            <div className={styles.modal__window}>
                <p className={styles.modalWindow__close} onClick={close}>&#215;</p>
                {children}
            </div>
        </div>
    )
}
export default ModalChild;