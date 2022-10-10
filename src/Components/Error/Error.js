import React from 'react';
import { useRouteError } from 'react-router-dom';
import errorText from '../../../src/images/errorText.png'

const Error = () => {
    const error = useRouteError();
    // console.log(error);
    return (
        <div>
            <img src={errorText} alt="" />
            <h2>{error.status}</h2>
            <p className='text-danger'>{error.statusText}</p>
        </div>
    );
};

export default Error;