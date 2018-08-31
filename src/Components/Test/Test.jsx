import React from 'react';
// import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import TestCard from '../TestCard/TestCard';
import styles from './Test.css';

const Test = ({selectedTest}) => {
    return (Object.keys(selectedTest).length
            ? <div className={styles.test__wrapper}>
                <div className={styles.test__container}>
                    <h1 className={styles.test__module}>{selectedTest.module}</h1>
                    <h2 className={styles.test__testname}>{selectedTest['test-name']}</h2>
                    <div className={styles.test__cards}>
                        {selectedTest.questions.map((q, index) =>
                            <TestCard
                                testname={selectedTest['test-name']}
                                index={index}
                                question={q.question}
                                answers={q.answers}
                                key={`${selectedTest['test-name']}${index}`}
                            />
                        )}
                    </div>
                    <button className={styles.test__btn}>Submit</button>
                </div>
            </div>
            : null
        );
};

function MSTP(state) {
    return {
        selectedTest: state.selectedTest,
    }
}

export default connect(MSTP) (Test);