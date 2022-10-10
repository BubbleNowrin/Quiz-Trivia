import React from 'react';
import { EyeIcon } from '@heroicons/react/24/solid'
import './Questions.css'
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Questions = ({ question }) => {
    // console.log(question);
    const { options, id, correctAnswer } = question;
    const showToast = (answer) => {
        toast.info(answer);
    }
    return (
        <div>
            <div className="card text-center w-50 mx-auto mt-5">
                <div className='d-flex justify-content-between'>
                    <div>

                    </div>
                    <div className="mt-1 me-3">
                        <EyeIcon onClick={() => showToast(correctAnswer)} className='icon' />
                    </div>

                </div>


                <div className="card-body">
                    <h5 className="card-title">{question.question}</h5>
                    <p className="card-text">
                        <div>
                            {
                                options.map(option =>
                                    <li key={option.id} className='border w-50 mx-auto p-4 mb-2 rounded bg-light custom'>{option}</li>
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