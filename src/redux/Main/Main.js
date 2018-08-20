import React from 'react';
import './Main.css'

const Main = () => {
    return (
        <div className="container">
            <section className="section">
                <h1 className="title">Проверь свои знания Front End</h1>
                <p className="sub-title">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto,
                    consequatur. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, rerum! </p>
                <div className="main__section">
                    <div className="section__box">
                        <div className="task">HTML, CSS</div>
                    </div>
                    <div className="section__box">
                        <div className="task">Satellite</div>
                    </div>
                    <div className="section__box">
                        <div className="task">Java Script</div>
                    </div>
                </div>
            </section>
        </div>
    );
};


export default Main;
