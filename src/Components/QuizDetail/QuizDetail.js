import React from 'react';
import { useLoaderData } from 'react-router-dom';

const QuizDetail = () => {
    const quizDetails = useLoaderData();
    // console.log(quizDetails.data.questions);
    const questions = quizDetails.data.questions;
    return (
        <div>
            <h2>Quiz of {quizDetails.data.name}</h2>
        </div>
    );
};

export default QuizDetail;