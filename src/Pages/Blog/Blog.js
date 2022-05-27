import React from 'react';

const Blog = () => {
    return (
        <div>
            <div class="card w-2/3 bg-base-100 shadow-xl my-10">
                <div class="card-body">
                    <h2 class="card-title">How will you improve the performance of a React Application?</h2>
                    <p>Keeping component state local where necessary </p>
                    <p>Memoizing React components to prevent unnecessary re-renders</p>
                    <p> Code-splitting in React using dynamic import()</p>
                    <p> Windowing or list virtualization in React</p>
                    <p> Lazy loading images in React</p>
                </div>
            </div>

            <div class="card w-2/3 bg-base-100 shadow-xl my-10">
                <div class="card-body">
                    <h2 class="card-title"> What are the different ways to manage a state in a React application?</h2>
                    <p>There are four main types of state you need to properly manage in your React apps: </p>
                    <p>Local state: Local state is data we manage in one or another component.Local state is most often managed in React using the useState hook. </p>
                    <p>Global state: Global state is data we manage across multiple components.Global state is necessary when we want to get and update data anywhere in our app </p>
                    <p>Server state: Data that comes from an external server that must be integrated with our UI state</p>
                    <p>URL state: Data that exists on our URLs, including the pathname and query parameters.</p>
                </div>
            </div>

            <div class="card w-2/3 bg-base-100 shadow-xl my-10">
                <div class="card-body">
                    <h2 class="card-title">How does prototypical inheritance work?</h2>
                    <p>JavaScript is a prototype-based, Object Oriented programming language.</p>
                    <p>After the ES6 updates, JavaScript allowed for “prototypal inheritance”, meaning that objects and methods can be shared, extended, and copied.</p>
                    <p>prototypical inheritance refers to the ability to access object properties from another object.</p>
                    <p>We use a JavaScript prototype to add new properties and methods to an existing object constructor.</p>
                    <p>We can then essentially tell our JS code to inherit properties from a prototype.</p>
                    <p>Prototypical inheritance allows us to reuse the properties or methods from one JavaScript object to another through a reference pointer function.</p>
                </div>
            </div>

            <div class="card w-2/3 bg-base-100 shadow-xl my-10">
                <div class="card-body">
                    <h2 class="card-title">Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h2>
                    <p>If you update it directly, calling the setState() afterward may just replace the update you made.</p>
                    <p>When you directly update the state, it does not change this.state immediately.</p>
                    <p> Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value.</p>
                    <p>You will lose control of the state across all components.</p>

                </div>
            </div>

            <div class="card w-2/3 bg-base-100 shadow-xl my-10">
                <div class="card-body">
                    <h2 class="card-title">What is a unit test? Why should write unit tests?</h2>
                    <p>A unit test is a way of testing a unit - the smallest piece of code that can be logically isolated in a system. In most programming languages, that is a function, a subroutine, a method or property.</p>
                    <p>Unit Testing is important because software developers sometimes try saving time doing minimal unit testing and this is myth because inappropriate unit testing leads to high cost Defect fixing during System Testing, Integration Testing and even Beta Testing after application is built. If proper unit testing is done in early development, then it saves time and money in the end.</p>
                    <p> Unit tests help to fix bugs early in the development cycle and save costs.
                        It helps the developers to understand the testing code base and enables them to make changes quickly</p>


                </div>
            </div>

        </div>

    );
};

export default Blog;