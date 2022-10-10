import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const Quizzes = () => {
    const quizzesData = useLoaderData();
    const quizzes = quizzesData.data;
    return (
        <div className="card-group mt-5 mx-5">
            {
                quizzes.map(quiz => <Quiz key={quiz.id} quiz={quiz}></Quiz>)
            }
        </div>
    );
};

export default Quizzes;