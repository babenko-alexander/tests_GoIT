import React from 'react';
import styles from './Main.css'

const Main = () => {
    return (
        <div className={styles.container}>
            <section className={styles.section}>
                <h1 className={styles.title}>Проверь свои знания Front End</h1>
                <p className={styles.sub__title}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto,
                    consequatur. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, rerum! </p>
                <div className={styles.section__main}>
                    <div className={styles.main__box}>
                        <div className={`${styles.box__task} ${styles.css_box}`}>
                            <p>HTML, CSS</p>
                            <span className={`${styles.main__span} ${styles.mod_1}`}>lorem</span>
                            <span className={`${styles.main__span} ${styles.mod_2}`}>lorem</span>
                            <span className={`${styles.main__span} ${styles.mod_3}`}>lorem</span>
                            <span className={`${styles.main__span} ${styles.mod_4}`}>lorem</span>
                            <span className={`${styles.main__span} ${styles.mod_5}`}>lorem</span>
                            <span className={`${styles.main__span} ${styles.mod_6}`}>lorem</span>
                            <span className={`${styles.main__span} ${styles.mod_7}`}>lorem</span>
                            <span className={`${styles.main__span} ${styles.mod_8}`}>lorem</span>
                        </div>
                    </div>
                    <div className={styles.main__box}>
                        <div className={styles.box__task}>
                            <p>Satellite</p>
                            <span className={`${styles.main__span} ${styles.modul_1}`}>lorem</span>
                            <span className={`${styles.main__span} ${styles.modul_2}`}>lorem</span>
                            <span className={`${styles.main__span} ${styles.modul_3}`}>lorem</span>
                            <span className={`${styles.main__span} ${styles.modul_4}`}>lorem</span>
                            <span className={`${styles.main__span} ${styles.mod_5}`}>lorem</span>
                            <span className={`${styles.main__span} ${styles.mod_6}`}>lorem</span>
                        </div>
                    </div>
                    <div className={styles.main__box}>
                        <div className={`${styles.box__task} ${styles.java_box}`}>
                            <p>Java Script</p>
                            <span className={`${styles.main__span} ${styles.modul_1}`}>lorem</span>
                            <span className={`${styles.main__span} ${styles.modul_2}`}>lorem</span>
                            <span className={`${styles.main__span} ${styles.modul_3}`}>lorem</span>
                            <span className={`${styles.main__span} ${styles.modul_4}`}>lorem</span>
                            <span className={`${styles.main__span} ${styles.mod_5}`}>lorem</span>
                            <span className={`${styles.main__span} ${styles.mod_6}`}>lorem</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};


export default Main;
