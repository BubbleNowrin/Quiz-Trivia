import React from 'react';

const Questions = ({ question }) => {
    console.log(question);
    const { options, id, correctAnswer } = question;
    return (
        <div>
            <div class="card text-center">
                <div class="card-header">
                    <ul class="nav nav-pills card-header-pills">
                        <li class="nav-item">
                            <a class="nav-link active" href="#">Active</a>
                        </li>
                    </ul>
                </div>
                <div class="card-body">
                    <h5 class="card-title">{question.question}</h5>
                    <p class="card-text">
                        {options}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Questions;