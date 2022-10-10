import React from 'react';
import { EyeIcon } from '@heroicons/react/24/solid'
import './Questions.css'
import { Link } from 'react-router-dom';

const Questions = ({ question }) => {
    console.log(question);
    const { options, id, correctAnswer } = question;
    return (
        <div>
            <div className="card text-center w-50 mx-auto mt-5">
                <div className='d-flex justify-content-between'>
                    <div>

                    </div>
                    <div className="mt-1 me-3">
                        <EyeIcon className='icon' />
                    </div>

                </div>
                <div className="card-body">
                    <h5 className="card-title">{question.question}</h5>
                    <p className="card-text">
                        <div>
                            {
                                options.map(option =>
                                    <li className='border w-50 mx-auto p-4 mb-2 rounded bg-light'>{option}</li>
                                )
                            }
                        </div>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Questions;