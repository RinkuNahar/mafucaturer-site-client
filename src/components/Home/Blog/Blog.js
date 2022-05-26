import React from 'react';

const Blog = () => {
    return (
        <div>
            <h2 className='text-4xl mt-12 font-bold text-center text-blue-900 underline underline-offset-1'>Blogs</h2>
            <div className='mt-6 '>
                <h3 className='text-center font-semibold text-2xl text-pink-800'>1.How will you improve the performance of a React Application?</h3>
                <p className='text-xl font-medium p-5 px-10'>At first, we need to set component state local where necessary.Then memoizing React components to prevent unnecessary re-renders.Code-splitting is very import when using dynamic in react.we should list virtualization in react.Also make sure that images load fast. </p>
            </div>

            <div className='mt-6 '>
                <h3 className='text-center font-semibold text-2xl text-pink-800 ' >2.What are the different ways to manage a state in a React application?</h3>
                <p style={{ 'listStyleType': 'none' }} className='text-xl px-10 font-medium p-5'>There are 4 kinds of React State to Manage:
                    <li className=''>1.
                        Local State</li>
                    <li>2. Global State</li>
                    <li>3. Server State</li>
                    <li>4. URL State</li>

                    <p className='mt-3'>Local state is perhaps the easiest kind of state to manage in React, considering there are so many tools built into the core React library for managing it.useState is the first tool we should reach for to manage state in our components.It can take accept any valid data value, including primitive and object values. Additionally, its setter function can be passed down to other components as a callback function (without needing optimizations like useCallback).</p>

                    <p className='mt-3'>To manage Global state, however, we should opt for a third-party solution. Many developers are inclined to use built-in React features like the Context API to manage their state.The reason to not use Context for global state management lies in the way it works. The default behavior for Context is to re-render all children components if the value provided to it as a prop changes.</p>

                    <p className='mt-3'>At first, Server state seems us that it  just need to fetch data and display it in the page. But then we need to display a loading spinner while you are waiting for the data. Then we need to handle errors and display them to the user as they arise.They not only give us a convenient hook to both get and change data from an API, but they keep track of all the necessary states and cache the data for us.</p>

                    <p className='mt-3'> To end a difficult topic on a positive note, URL state is largely already managed for we if we are using a framework like Next.js or the current version of React Router.URL state is quite easy to manage, usually through custom hooks that give us all the information we need about our location, history, and pathname.
                    </p>

                </p>
            </div>

            <div className='mt-6 '>
                <h3 className='text-center font-semibold text-2xl text-pink-800'>3.How does prototypical inheritance work?</h3>
                <p className='text-xl px-10 font-medium p-5'>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the Prototype of an object, we use Object.</p>
            </div>

            <div className='mt-6 '>
                <h3 className='text-center font-semibold text-2xl text-pink-800'>4.You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h3>
                <p className='text-xl px-10 font-medium p-5'>Firstly, we import useState from react . Then, we import the Scroll and SearchList components. Next, in the Search function, we use the useState hook to initialize the value of the searchField state with useState("") (an empty string). After this, we use the filter function on the details list received from the parent.</p>
            </div>

            <div className='mt-6 '>
                <h3 className='text-center font-semibold text-2xl text-pink-800'>5.What is a unit test? Why should write unit tests?</h3>
                <p className='text-xl px-10 font-medium p-5'>Unit testing is the level of testing at which individual components of the software are tested. We do it to ensure that each component works as expected. A component is the smallest testable part of the software. This Button component has text and an onPress function.
                
                <p className='mt-3'> To end a difficult topic on a positive note, URL state is largely already managed for we if we are using a framework like Next.js or the current version of React Router.URL state is quite easy to manage, usually through custom hooks that give us all the information we need about our location, history, and pathname.
                    </p>
                </p>
                
            </div>
        </div>
    );
};

export default Blog;