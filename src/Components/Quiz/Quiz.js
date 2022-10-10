import React from 'react';
import { ArrowLongRightIcon } from '@heroicons/react/24/solid'
const Quiz = ({ quiz }) => {

    const { logo, name, total } = quiz;
    // console.log(quiz);
    return (
        <div className="card">
            <img src={logo} className="card-img-top img-fluid bg-light" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text"><small>Total Questions: {total}</small></p>
            </div>
            <button className='btn btn-warning text-white fw-bold fs-5 m-4'>
                Take The quiz
                <ArrowLongRightIcon className='w-25 h-25' />
            </button>

        </div>
    );
};

export default Quiz;