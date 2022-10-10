/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const Quizzes = () => {
    const quizzesData = useLoaderData();
    const quizzes = quizzesData.data;
    // console.log(quizzes);
    return (
        <div className="card-group">
            {
                quizzes.map(quiz => <Quiz key={quiz.id} quiz={quiz}></Quiz>)
            }
        </div>
    );
};

export default Quizzes;