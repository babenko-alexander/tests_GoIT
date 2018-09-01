import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './Main.css';
import {connect} from 'react-redux'

const Main = ({tests}) => {
    const taskOne = [styles.mod_1, styles.mod_2, styles.mod_3, styles.mod_4, styles.mod_5, styles.mod_6, styles.mod_7, styles.mod_8];
    const taskTwo = [styles.mod1, styles.mod2, styles.mod3, styles.mod4, styles.mod_5, styles.mod_6];
    return (
        <div className={styles.container}>
            <section className={styles.section}>
                <h1 className={styles.title}>Проверь свои знания Front End</h1>
                <p className={styles.sub__title}>Здраствуйте дорогие студенты, надеемся что, тесты Go It не только
                    принесут вам пользу и знания, но и множество эмоций, и удовольствия от их прохождения</p>
                <div className={styles.section__main}>
                    <div className={styles.main__box}>
                        <div className={`${styles.box__task} ${styles.css_box}`}>
                            <p>HTML, CSS</p>
                            {tests.length ? tests[0]['module-tests'].map((el, ind) =>
                                <NavLink to={'/' + `${ind}`} key={el["test-name"] + ind}>
                                    <span className={`${styles.main__span} ${taskOne[ind]}`}>{el["test-name"]}</span>
                                </NavLink>) : null}
                        </div>
                    </div>
                    <div className={styles.main__box}>
                        <div className={styles.box__task}>
                            <p>Satellite</p>
                            {tests.length ? tests[1]['module-tests'].map((el, ind) =>
                                <NavLink to={'/' + `${ind}`} key={el["test-name"] + ind}>
                                    <span className={`${styles.main__span} ${taskTwo[ind]}`}>{el["test-name"]}</span>
                                </NavLink>) : null}
                        </div>
                    </div>
                    <div className={styles.main__box}>
                        <div className={`${styles.box__task} ${styles.java_box}`}>
                            <p>Java Script</p>
                            {tests.length ? tests[2]['module-tests'].map((el, ind) =>
                                <NavLink to={'/' + `${ind}`} key={el["test-name"] + ind}>
                                    <span className={`${styles.main__span} ${taskTwo[ind]}`}>{el["test-name"]}</span>
                                </NavLink>) : null}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

function MSTP(state) {
    return {
        tests: state.tests,
        selectedTest: state.selectedTest,
    }
}

export default connect(MSTP, null)(Main);



