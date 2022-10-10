import React from 'react';
import download from '../../images/download.png';
import header from '../../images/header.webp';
import thinking from '../../images/thinking.png'

const Header = () => {
    return (
        <div className='d-flex align-items-center justify-content-between'>
            <div className='w-50 font-5xl'>
                <p>Take the Quiz,Get more Knowledge</p>
            </div>
            <div className='w-50'>
                <img className='img-fluid w-50' src={thinking} alt="" />
            </div>

        </div>
    );
};

export default Header;