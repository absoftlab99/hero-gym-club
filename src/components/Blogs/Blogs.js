import React from 'react';
import code1 from '../../images/code1.png';
import code2 from '../../images/code2.png';
import code3 from '../../images/code3.png';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='container'>
            <hr />
            <div className="row">
                <div className="col-12">
                    <h1 className='text-dark fw-bold'>Blog-1: How Does React Work?</h1>
                    <p className='text-justify'>
                    One of the biggest advantages of using React is that you can infuse HTML code with JavaScript.<br></br> Users can create a representation of a DOM node by declaring the Element function in React. The code below contains a combination of HTML and JavaScript:<br></br>
                    <img className='py-3' src={code1} alt="" /><br></br>
                    You may have noticed that the syntax of the HTML code above is similar to XML. That said, instead of using the traditional DOM class, React uses className.<br></br>
                    
                    JSX tags have a name, children, and attributes. Numeric values and expressions must be written inside curly brackets. The quotation marks in JSX attributes represent strings, similarly to JavaScript.<br></br>
                    
                    In most cases, React is written using JSX instead of standard JavaScript to simplify components and keep code clean.<br></br>
                    
                    Here is an example of React code written using JSX:
                    <img className='py-3' src={code2} alt="" /><br></br>

                    The following is a breakdown of the HTML tags above:
                    <ul>
                        <li><b>MyCounter</b> represents a variable called count whose value is a numeric expression.</li>
                        <li><b>GameScores</b> is an object literal that has two prop-value pairs.</li>
                        <li><b>DashboardUnit</b> is the XML block that is rendered on the page.</li>
                        <li><b>scores</b> is the scores attribute. It gets its value from the GameScores object literal defined earlier.</li>
                    </ul><br></br>

                    A React app usually has a single root DOM node. Rendering an element into the DOM will change the user interface of the page.<br></br>
                    For instance, the following code displays “Hello World” on the page by rendering the element into a DOM node called root.<br></br>

                    <img className='py-3' src={code3} alt="" />
                    <br></br>
                    Whenever a React component returns an element, the Virtual DOM will update the real DOM to match.
                    </p>
                    
                </div>
                <div className="col-12">
                    <h1 className='text-dark fw-bold'>Blog-2: What are the differences between props and state?</h1>
                    <h4 className=''>Props:</h4>
                    <p className='text-justify'>
                    Props stand for "<b>Properties.</b>" They are <b>read-only</b> components. It is an object which stores the value of attributes of a tag and work similar to the HTML attributes. It gives a way to pass data from one component to other components. It is similar to function arguments. Props are passed to the component in the same way as arguments passed in a function.<br></br><br></br>
                    Props are <b>immutable</b> so we cannot modify the props from inside the component. Inside the components, we can add attributes called props. These attributes are available in the component as this.props and can be used to render dynamic data in our render method.<br></br><br></br>
                    When you need immutable data in the component, you have to add props to <b>reactDom.render()</b> method in the main.js file of your ReactJS project and used it inside the component in which you need.
                    </p>
                    <h4>State:</h4>
                    <p className='text-justify'>
                    A state is a JavaScript object that represents a part of a component. It changes whenever a user interacts with the application, rendering a new UI to reflect the modifications.<br></br><br></br>
                    State management refers to the practice of managing React application states. It includes storing data in third-party state management libraries and triggering the re-rendering process each time data is changed.
                    </p>
                </div>
                <div className="col-12">
                    <h1 className='fw-bolder'>Blog-3: What else is 'useEffect' used for besides loading data with the API?</h1>
                    <p className=''>Beside for data load through API using Use, Effect is also used for the following- <br></br><br></br>
                        <ul>
                            <li><b>Running on state change:</b> validating input field</li>
                            <li><b>Running on state change:</b> live filtering</li>
                            <li><b>Running on state change:</b> trigger animation on new array value</li>
                            <li><b>Running on props change:</b> update paragraph list on fetched API data update</li>
                            <li><b>Running on props change:</b> updating fetched API data to get BTC updated price</li>
                        </ul>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;