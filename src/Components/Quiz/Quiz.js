import React from 'react';
import { ArrowLongRightIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const Quiz = ({ quiz }) => {

    const { logo, name, total, id } = quiz;
    // console.log(quiz);
    return (

        <div className="card w-75">
            <img src={logo} className="card-img-top img-fluid bg-light" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text"><small>Total Questions: {total}</small></p>
            </div>
            <Link to={`/quiz/${id}`}>
                <button className='btn btn-warning text-white fw-bold m-4'>
                    Take The quiz
                    <ArrowLongRightIcon className='w-25' />
                </button>
            </Link>

        </div>
    );
};

export default Quiz;