import React from 'react';

const Quiz = ({ quiz }) => {

    const { logo, name, total } = quiz;
    // console.log(quiz);
    return (
        <div>

            <div className="card">
                <img src={logo} className="card-img-top img-fluid" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{total}</p>
                </div>
                <div className="card-footer">
                    <small className="text-muted">Last updated 3 mins ago</small>
                </div>
            </div>
        </div>
    );
};

export default Quiz;