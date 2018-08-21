import React from 'react';
import styles from './PersonalCard.css';

const PersonalCard = ({name}) => {
    return (
        <tr className={styles.paddings}>
            
                <th className={styles.robotoGray}>{name}</th>
                <th className={styles.robotoGray}>4</th>
                <th className={styles.robotoGray}>8</th>
        </tr>
    );
};

export default PersonalCard;