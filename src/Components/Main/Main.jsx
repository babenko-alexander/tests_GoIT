import React from 'react';
import {connect} from 'react-redux';
import {getSingleTestAsync} from '../../redux/actions/testActions';

const Main = ({tests, loadSingleTestAsync}) => {
    const selectTest = function(e) {
        console.log(e.target.dataset.module, e.target.dataset.testname);
        loadSingleTestAsync(e.target.dataset.module, e.target.dataset.testname)
    };

    if (Object.keys(tests).length) {
        const modules = Object.values(tests);
        // modules.map(mod => console.log(mod));

        return (
            <div>
                {modules.map((m, index) =>
                    <div key={index}>
                        <p>{m.module}</p>
                        <ul>
                            {m['module-tests'].map((t, index) =>
                                <li
                                    key={`${m.module}${index}`}
                                    data-module={m.module}
                                    data-testname={t['test-name']}
                                    onClick={selectTest}
                                >{t['test-name']}</li>)}
                        </ul>
                    </div>)
                }
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

function MDTP (dispatch) {
    return {
        loadSingleTestAsync: function(module, testname) {
            dispatch(getSingleTestAsync(module, testname))
        }
    }
}

export default connect(MSTP, MDTP) (Main);