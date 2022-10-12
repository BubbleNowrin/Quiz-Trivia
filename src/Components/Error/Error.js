import React from 'react';
import { useRouteError } from 'react-router-dom';
import errorText from '../../../src/images/errorText.png'
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';


const Error = () => {
    const error = useRouteError();
    // console.log(error);
    return (
        <div>
            <div>
                <Navbar></Navbar>
            </div>
            <div>
                <img className='w-25' src={errorText} alt="" />
                <h2>{error.status}</h2>
                <p className='text-danger'>{error.statusText}</p>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Error;
