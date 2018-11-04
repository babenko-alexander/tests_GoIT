import React from 'react';
import {connect} from 'react-redux';

import {setSelectedTest} from '../../redux/actions/selectedTestAction';

import styles from './Main.css';

const Main = ({modules, tests, loadSelectedTest, checkLogin}) => {

    const selectTest = function(e) {
        // find individual test in store using module name and test name:
        const st = tests.find(el => el._id === e.target.dataset.testid);
        // const sm = modules.find(el => el._id === e.target.dataset.moduleid);
        // add module name in the selectedTest:
        const selectedTestObj = Object.keys(st).length ? {'module': e.target.dataset.module, ...st} : {};
        // console.log('selectedTestObj', selectedTestObj);
        loadSelectedTest(selectedTestObj);
    };

    const taskOne = [styles.mod_1, styles.mod_2, styles.mod_3, styles.mod_4, styles.mod_5, styles.mod_6, styles.mod_7, styles.mod_8];
    const taskTwo = [styles.mod1, styles.mod2, styles.mod3, styles.mod4, styles.mod_5, styles.mod_6];
    const moduleCircle = [styles.box__task_0, styles.box__task_1, null];

    if (tests.length && modules.length) {
        const modulesSorted = modules.sort((a, b) => (a.modulename > b.modulename) ? 1 : -1);
        // console.log(modulesSorted);

        return (
        <div>
            {checkLogin ?
                <div className={styles.main__wrapper}>
                    <div className={styles.main__container}>
                    <section className={styles.section}>

                        <div className={styles.section__main}>
                            {modulesSorted.map((m, index) =>
                                <div className={styles.main__box} key={m._id}>
                                    <div className={`${styles.box__task} ${moduleCircle[index]}`}>
                                        <p>{m.modulename}</p>
                                        {tests.filter(t => m._id === t.moduleId ? t : null)
                                            .map((t, ind) =>
                                                <div
                                                className={`${styles.main__span} ${modulesSorted.indexOf(m) === 0 ? taskOne[ind] : taskTwo[ind]}`}
                                                key={t._id}
                                                data-testid={t._id}
                                                data-moduleid={m._id}
                                                onClick={selectTest}
                                            >
                                                {t.testname}
                                            </div>)
                                        }
                                    </div>
                                </div>)
                            }
                        </div>
                    </section>
                    </div>
                </div>

            : <div className={styles.background}>
                <div className={styles.main__container}>
                <section className={styles.section}>
                    <h1 className={styles.title}>Проверь свои знания Front End</h1>
                    <p className={styles.sub__title}>Здравствуйте, дорогие студенты, надеемся что, тесты GoIT не только
                        принесут вам пользу и знания, но и множество эмоций, и удовольствия от их прохождения!
                    </p>
                </section>
                </div>
              </div>
            }

        </div>);
    } else {
        return null;
    }
};

function MSTP(state) {
    return {
        modules: state.modules,
        tests: state.tests,
        selectedTest: state.selectedTest,
        checkLogin: state.isLogin,
    }
}

function MDTP(dispatch) {
    return {
        loadSelectedTest: function (modulename, testname) {
            dispatch(setSelectedTest(modulename, testname))
        },
    }
}

export default connect(MSTP, MDTP)(Main);