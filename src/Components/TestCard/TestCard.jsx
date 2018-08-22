import React from 'react';
// import PropTypes from 'prop-types';
import styles from './TestCard.css';

const TestCard = ({testname, index, question, answers}) => {
    return (
        <div className={styles.testcard}>
            <h1 className={styles.textcard__testname}>{testname}</h1>
            <h2 className={styles.testcard__question}>{+index + 1}. {question}</h2>
            <form method='post' onChange={(null)}>
                {answers.map((answ, i) =>
                    <label
                        className={styles.testcard__answer}
                        id={`${answ}${i}`}
                        key={`${testname}${i}`}
                    >
                        <input
                            type="radio"
                            name="answer"
                            id={`${answ}${i}`}
                            data-index={i}
                            className={styles.testcard__answers}
                            value={answ}
                            // onChange={()=> console.log('answer changed')}
                        />
                        {answ}
                    </label>
                )}
            </form>
        </div>
    );
};

TestCard.propTypes = {};
TestCard.defaultProps = {};

export default TestCard;
