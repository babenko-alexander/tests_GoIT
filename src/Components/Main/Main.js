import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './Main.css';
import {connect} from 'react-redux'

const Main = (props) => {
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
                            <NavLink exact to='/tests'>
                                <span className={`${styles.main__span} ${styles.mod_1}`}>lorem</span>
                            </NavLink>
                            <NavLink to='/2'>
                                <span className={`${styles.main__span} ${styles.mod_2}`}>lorem</span>
                            </NavLink>
                            <NavLink to='/3'>
                                <span className={`${styles.main__span} ${styles.mod_3}`}>lorem</span>
                            </NavLink>
                            <NavLink to='/4'>
                                <span className={`${styles.main__span} ${styles.mod_4}`}>lorem</span>
                            </NavLink>
                            <NavLink to='/5'>
                                <span className={`${styles.main__span} ${styles.mod_5}`}>lorem</span>
                            </NavLink>
                            <NavLink to='/6'>
                                <span className={`${styles.main__span} ${styles.mod_6}`}>lorem</span>
                            </NavLink>
                            <NavLink to='/7'>
                                <span className={`${styles.main__span} ${styles.mod_7}`}>lorem</span>
                            </NavLink>
                            <NavLink to='/8'>
                                <span className={`${styles.main__span} ${styles.mod_8}`}>lorem</span>
                            </NavLink>
                        </div>
                    </div>
                    <div className={styles.main__box}>
                        <div className={styles.box__task}>
                            <p>Satellite</p>
                            <NavLink to='/9'>
                                <span className={`${styles.main__span} ${styles.modul_1}`}>lorem</span>
                            </NavLink>
                            <NavLink to='/10'>
                                <span className={`${styles.main__span} ${styles.modul_2}`}>lorem</span>
                            </NavLink>
                            <NavLink to='/11'>
                                <span className={`${styles.main__span} ${styles.modul_3}`}>lorem</span>
                            </NavLink>
                            <NavLink to='/12'>
                                <span className={`${styles.main__span} ${styles.modul_4}`}>lorem</span>
                            </NavLink>
                            <NavLink to='/13'>
                                <span className={`${styles.main__span} ${styles.mod_5}`}>lorem</span>
                            </NavLink>
                            <NavLink to='/14'>
                                <span className={`${styles.main__span} ${styles.mod_6}`}>lorem</span>
                            </NavLink>
                        </div>
                    </div>
                    <div className={styles.main__box}>
                        <div className={`${styles.box__task} ${styles.java_box}`}>
                            <p>Java Script</p>
                            <NavLink to='/15'>
                                <span className={`${styles.main__span} ${styles.modul_1}`}>lorem</span>
                            </NavLink>
                            <NavLink to='/16'>
                                <span className={`${styles.main__span} ${styles.modul_2}`}>lorem</span>
                            </NavLink>
                            <NavLink to='/17'>
                                <span className={`${styles.main__span} ${styles.modul_3}`}>lorem</span>
                            </NavLink>
                            <NavLink to='/18'>
                                <span className={`${styles.main__span} ${styles.modul_4}`}>lorem</span>
                            </NavLink>
                            <NavLink to='/19'>
                                <span className={`${styles.main__span} ${styles.mod_5}`}>lorem</span>
                            </NavLink>
                            <NavLink to='/20'>
                                <span className={`${styles.main__span} ${styles.mod_6}`}>lorem</span>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};


// const Main = ({tests}) => {
//     if (Object.keys(tests).length) {
//         const modules = Object.values(tests);
//         modules.map(mod => console.log(mod));
//         const massStyles = ['styles.modul_1', 'styles.modul_2', 'styles.modul_3', 'styles.modul_4', 'styles.mod_5', 'styles.mod_6'];
//
//         return (
//             <div>
//                 {modules.map((m, index) =>
//                     <div key={index}>
//                         <p>{m.module}</p>
//                         <ul>
//                             {m['module-tests'].map((t, index) => <li key={`${m.module}${index}`}  className={styles.modul_1}>{t['test-name']}</li>)}
//                         </ul>
//                     </div>)
//                 }
//             </div>
//         );
//     } else {
//         return null;
//     }
// };


// function MSTP(state) {
//     return {
//         tests: state.tests,
//         selectedTest: state.selectedTest,
//     }
// }
//
// export default connect(MSTP, null)(Main);
export default Main

