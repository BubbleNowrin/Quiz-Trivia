import React from 'react';
import thinking from '../../images/thinking.png'
import Quizzes from '../Quizzes/Quizzes';

const Header = () => {
    return (
        <div>
            <div className='d-flex align-items-center justify-content-between bg-light'>
                <div className='w-50 fs-2 fw-bold'>
                    <p><span className='text-warning ms-5'>Take the Quiz,</span> Get more Knowledge.</p>
                </div>
                <div className='w-50'>
                    <img className='img-fluid w-75' src={thinking} alt="" />
                </div>

            </div>
        </div>
    );
};

export default Header;