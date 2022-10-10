import React from 'react';

const Blog = () => {
    return (
        <div>
            <div class="card text-center mt-5 w-50 mx-auto">
                <div class="card-header fw-bold fs-4">
                    What is the purpose of React router?
                </div>
                <div class="card-body">
                    <p class="card-text">React Router is a state container that is used for current location or an URL. It keeps the track of the location and renders different Route's as it changes. It also gives developers tools to update the location using Link's and the history API. Managing this piece of state is the router's main responsibility. Developers can imagine that a new primitive that lets them compose state is going to enable a few things they couldn't do before!</p>
                </div>
                <div class="card-footer text-muted"></div>
            </div>
            <div class="card text-center mt-5 w-50 mx-auto">
                <div class="card-header fw-bold fs-4">
                    How does Context API work?
                </div>
                <div class="card-body">
                    <p class="card-text">React Context API is a alternative to Prop-drilling or passing props from grandparent to child to parent, and so on.It is a way for a React app to effectively produce global variables that can be passed around. It returns a consumer and a provider. Provider is a component that provides the state to its children.</p>
                </div>
                <div class="card-footer text-muted"></div>
            </div>
            <div class="card text-center mt-5 w-50 mx-auto">
                <div class="card-header fw-bold fs-4">
                    Describe about 'useRef' hook.
                </div>
                <div class="card-body">
                    <p class="card-text">The useRef Hook allows to persist values between renders.It can be used to store a mutable value that does not cause a re-render when updated.It can be used to access a DOM element directly.
                        useRef() only returns one item. It returns an Object called current.When we initialize useRef we set the initial value: useRef(0).The useRef Hook can also be used to keep track of previous state values.
                        This is because we are able to persist useRef values between renders.</p>
                </div>
                <div class="card-footer text-muted"></div>
            </div>
        </div>
    );
};

export default Blog;