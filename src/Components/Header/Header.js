import React from 'react';
import thinking from '../../images/thinking.png';

const Header = () => {
    return (
        <div>
            <div className='d-flex flex-column flex-lg-row align-items-center justify-content-between bg-light'>
                <div className='w-100 display-5 fw-bold'>
                    <p><span className='text-warning'>Take the Quiz,<br />
                    </span> <span><small>Get more Knowledge.</small></span></p>
                </div>
                <div className='w-100'>
                    <img className='img-fluid w-75' src={thinking} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Header;