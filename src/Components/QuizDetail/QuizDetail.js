import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from '../Questions/Questions';

const QuizDetail = () => {
    const quizDetails = useLoaderData();
    // console.log(quizDetails.data.questions);
    const questions = quizDetails.data.questions;
    return (
        <div>
            <h2>Quiz of {quizDetails.data.name}</h2>
            {
                questions.map(question => <Questions key={question.id} question={question}></Questions>)
            }

        </div>
    );
};

export default QuizDetail;