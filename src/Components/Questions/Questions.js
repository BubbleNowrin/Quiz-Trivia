import React from 'react';
import { EyeIcon } from '@heroicons/react/24/solid'
import './Questions.css'
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Questions = ({ question }) => {
    // console.log(question);
    const { options, correctAnswer } = question;
    const showToast = (answer) => {
        toast.info(answer);
    }

    const checkAnswer = (event) => {
        if (event === correctAnswer) {
            toast.success('Answer is Correct!', { autoClose: 2000 })
        } else {
            toast.error('Answer is wrong', { autoClose: 2000 });
        }
    }
    return (
        <div className='mx-auto w-75'>
            <div className="card text-center w-100 mt-5">
                <div className='d-flex justify-content-between'>
                    <div>

                    </div>
                    <div className="mt-1 me-3">
                        <EyeIcon onClick={() => showToast(correctAnswer)} className='icon' />
                    </div>

                </div>


                <div className="card-body">
                    <h5 className="card-title">Que: {question.question}</h5>
                    <p className="card-text">

                        {
                            options.map((option, _idx) => <li key={_idx} onClick={(e) => checkAnswer(e.target.innerText)} className='border w-100 mx-auto p-4 mb-2 mt-3 rounded bg-light custom'>{option}</li>)
                        }

                    </p>
                </div>
            </div>
        </div>
    );
};

export default Questions;