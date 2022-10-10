import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Header from '../Header/Header';

import Quiz from '../Quiz/Quiz';

const Quizzes = () => {
    const quizzesData = useLoaderData();
    const quizzes = quizzesData.data;
    return (
        <div>
            <div>
                <Header></Header>
            </div>
            <div className="card-group mt-5 mx-5">
                {
                    quizzes.map(quiz => <Quiz key={quiz.id} quiz={quiz}></Quiz>)
                }
            </div>
        </div>
    );
};

export default Quizzes;