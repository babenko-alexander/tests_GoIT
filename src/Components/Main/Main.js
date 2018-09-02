import React from 'react';
import {connect} from 'react-redux';

// import {getSingleTestAsync} from '../../redux/actions/testActions';
import {setSelectedTest} from '../../redux/actions/testActions';

import styles from './Main.css';

const Main = ({tests, loadSelectedTest}) => {

    const selectTest = function(e) {
        console.log(e.target.dataset.module, e.target.dataset.testname, e.target.dataset.test);
        // loadSingleTestAsync(e.target.dataset.module, e.target.dataset.testname);
        loadSelectedTest(JSON.parse(e.target.dataset.test)); //TODO: fix warning re: render/constructor
    };

    const taskOne = [styles.mod_1, styles.mod_2, styles.mod_3, styles.mod_4, styles.mod_5, styles.mod_6, styles.mod_7, styles.mod_8];
    const taskTwo = [styles.mod1, styles.mod2, styles.mod3, styles.mod4, styles.mod_5, styles.mod_6];
    const moduleCircle = [styles.box__task_0, styles.box__task_1, null];

    if (tests.length) {
        // const modules = tests;
        const modules = tests.sort((a,b) => a.module > b.module);

        return (
            <div className={styles.main__wrapper}>
                <div className={styles.main__container}>
                    <section className={styles.section}>
                        <h1 className={styles.title}>Проверь свои знания Front End</h1>
                        <p className={styles.sub__title}>Здраствуйте дорогие студенты, надеемся что, тесты GoIT не только
                            принесут вам пользу и знания, но и множество эмоций, и удовольствия от их прохождения</p>

                        <div className={styles.section__main}>
                            {modules.map((m, index) =>
                                <div className={styles.main__box} key={index}>
                                    <div className={`${styles.box__task} ${moduleCircle[index]}`}>
                                        <p>{m.module}</p>
                                        {m['module-tests'].map((t, ind) =>
                                            <span
                                                className={`${styles.main__span} ${modules.indexOf(m) === 0 ? taskOne[ind] : taskTwo[ind]}`}
                                                key={`${m.module}${ind}`}
                                                data-module={m.module}
                                                data-testname={t['test-name']}
                                                data-test={JSON.stringify({'module': m.module, ...t})}
                                                onClick={selectTest}
                                            >
                                            {t["test-name"]}
                                        </span>)
                                        }
                                    </div>
                                </div>)
                            }
                        </div>
                    </section>
                </div>
            </div>
        );
    } else {
        return null;
    }
};

function MSTP(state) {
    return {
        tests: state.tests,
        selectedTest: state.selectedTest,
    }
}

function MDTP(dispatch) {
    return {
        // loadSingleTestAsync: function(module, testname) {
        //     dispatch(getSingleTestAsync(module, testname))
        // },
        loadSelectedTest: function(selectedTestObj) {
            dispatch(setSelectedTest(selectedTestObj))
        }
    }
}

export default connect(MSTP, MDTP)(Main);



