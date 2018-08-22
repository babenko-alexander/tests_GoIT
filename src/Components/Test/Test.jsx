import React from 'react';
import {Component} from 'react';
// import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import TestCard from '../TestCard/TestCard';
import styles from './Test.css';


class Test extends Component {
    // static defaultProps = {};
    // static propTypes = {
    //     category: PropTypes.string,
    //     name: PropTypes.string,
    //     tests: PropTypes.arrayOf(PropTypes.shape({
    //         category: PropTypes.string,
    //         name: PropTypes.string,
    //         questions: PropTypes.arrayOf(PropTypes.shape({
    //             question: PropTypes.string,
    //             answers: PropTypes.arrayOf(PropTypes.string),
    //             rightAnswer: PropTypes.string
    //         }))
    //     }))
    // };

    // state = {
    //     answers: [],
    //     correct: [],
    //     result: null,
    // };

    /*getTestObj(testcategory, testname) {
        const t = this.props.tests;
        console.log(testcategory, testname, t);

        if (Object.keys(t).length > 0) {
            const catTests = Object.values(t).find(el => Object.keys(el)[0] === testcategory);
            const testObj = Object.values(catTests)[0][testname];
            console.log('testObj', testObj);
        }
        console.log(typeof testObj);
        return testObj;
    }
*/
    componentDidMount() {

    }

    render() {
        // const to = this.getTestObj(this.props.category, this.props.name);

        const a = ['Why not?', 'Not this time', 'Not sure', 'That is the question!'];
        return (
            <div className={styles.test__wrapper}>
                <div className={styles.test__container}>
                    <h1 className={styles.test__category}>{this.props.category}</h1>
                    <div className={styles.test__cards}>
                        {/*<TestCard*/}
                            {/*testname={this.props.name}*/}
                            {/*index="5"*/}
                            {/*question="To be or not to be?"*/}
                            {/*answers={a}*/}
                        {/*/>*/}

                        {true
                            ? <TestCard
                                testname={this.props.name}
                                index="5"
                                question="To be or not to be?"
                                answers={a}
                              />
                            : <span className={styles.test__notfound}>{`No questions on topic '${this.props.name}' found.`}</span>
                        }
                    </div>
                </div>
            </div>
        );
    }
}

function MSTP(state) {
    return {
        tests: state.tests,
        selectedTest: state.selectedTest,
    }
}

// function MDTP (dispatch) {
//     return {
//         loadAllTestsDataAsync: function() {
//             dispatch(fetchAllTestsDataAsync())
//         },
//     }
// }

export default connect(MSTP) (Test);