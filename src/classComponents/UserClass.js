import React from "react";

// User Component - Function-based
// Functional Component -> Normal JS Function

export function UserfunctionComp(props) {
  const { name, location } = props;

  return (
    <div className="user-card">
      <h2>Name: {name}</h2>
      <h3>Location: {location}</h3>
      <h4>Contact: @vijita-u</h4>
    </div>
  );
}

// User Component - Class-based
// Class-based Component -> Normal JS Class

class UserClass extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            
        }

        console.log(this.props.name + " Child Constructor - Child initialization started")
    }

    // Called immediately after a component is MOUNTED. Setting state here will trigger re-rendering. -> useEffect()
    
    componentDidMount() {
        console.log(this.props.name + " Child component MOUNTED");

    }

    render() {
        console.log(this.props.name + " Child render started")
        const {name, location} = this.props; // Destructure
        const {count1, count2} = this.state; // Destructure

        return (
            <div>
                <h1>Name: {this.props.name}</h1>
                <h2>Location: {this.props.location}</h2>
            </div>
        )
    }
}

export default UserClass




/* 
    componentDidMount() -> Used to make API calls
*/

/* THEORY */
/* 
    REACT MOUNTING has 2 phases -
        i. "Render" Phase
        ii. "Commit" Phase 

    Rendering -> This is where React ROCKS. React checks the Virtual DOM objects and triggers the reconciliation cycle. This is done very fast by React.
    Mounting onto the DOM => DOM Manipulation -> This is a very expensive operation and so REACT BATCHES THIS INTO ONE.

    "Render Phase" -> 2 methods are called - constructor() and render()
    "Commit Phase" -> React updates the DOM & componentDidMount() is called
*/

/*
    Parent Component constructor() called
    Parent Component render() called

        Child-1 Component constructor() called
        Child-1 Component render() called
        Child-2 Component constructor() called
        Child-2 Component render() called
        Child-3 Component constructor() called
        Child-3 Component render() called

    // ----- DOM MANIPULATION STARTS ----- //
    Child-1 componentDidMount() called - COMPONENT MOUNTED
    Child-2 componentDidMount() called - COMPONENT MOUNTED
    Parent componentDidMount() called - COMPONENT MOUNTED

*/

// Basically it batches the render phase and commit phase


/* MAKING API CALLS */

/*
    API calls are made inside the componentDidMount() because in React we make API calls after the first render to improve UX (Load page => Render => Make API call => Re-render)

        when you update the state using `this.setState` after the API call, the component is re-rendered; meaning the render() method is called again.
        We know that everytime a state is updated, the component is re-rendered.

        After the re-render, the component is UPDATED, so componentDidUpdate() method is called.

        when a component is unmounted (for eg; when we navigate to another page, componentWillUnmount() is called.
*/

// render() METHOD in Render Phase 
/*
    => generates a component's VIRTUAL DOM (basically a JS object) REPRESENTATION based on its current state and props
    => Render phase happens internally and doesn't cause any visual changes
    => This is where the reconciliation cycle is triggers and the diff between 2 virtual DOMs is calculated and shiz

    => Some things that take place in the Render phase:
        i. JSX CODE CONVERSION (done by Babel) - The JSX code is converted to JS representation of what the HTML structure (a.k.a JS object) should look like
        ii. REACT ELEMENT TREE BUILDING - Starting from the root component, a React element tree is built that shows what the actual DOM should look like (Virtual DOM)

    => The render method is the most important method in the life cycle of a class-based component in React. In the render method, you can:
        i. Read props and state
        ii. Return JSX code to the root component of your app 

    => You can't change the state or cause side effects in the render method, like making an HTTP request to the webserver. 
*/

// Commit Phase
/*
    => DOM MANIPULATION happens here
    => updates, inserts or deletes elements in the DOM; traditionally called RENDERING
*/


// Q. Why can we use async before componentDidMount() but not before useEffect in react? 

/**
 * The difference in how you handle asynchronous operations in class components versus functional components with hooks in React is due to the fundamental differences in how these two types of components are structured.

    => Class Components with componentDidMount
        In class components, you can define lifecycle methods like componentDidMount. Since these are regular methods of the class, you can use the async keyword directly:

    => Functional Components with useEffect
        In functional components, you use the useEffect hook to perform side effects, such as data fetching. However, useEffect does not directly support asynchronous functions because the function you pass to useEffect should "either return nothing or return a cleanup function". If you declare the function passed to useEffect as async, it would return a promise, which is not the intended behavior for effect cleanup.

    => Key Points
        ~ Class Components (componentDidMount):
            - componentDidMount is a regular method of the class.
            - You can use async directly before componentDidMount.

        ~ Functional Components (useEffect):
            - useEffect expects the callback to either return nothing or a cleanup function.
            - An async function returns a promise, which is not suitable as a return value for useEffect.
            - Instead, define an inner async function and call it immediately within the useEffect callback.

    => An async function always returns a promise.
    => If you make the function passed to useEffect async, it would return a promise, and "React would expect this promise to be a cleanup function", leading to confusion and potential issues.
    => To avoid this, you use an inner async function inside useEffect and call it immediately.

    => Here is an example with incorrect usage:

    `useEffect(async () => {
    const result = await fetchSomeData(); // Incorrect: useEffect should not be async
    setData(result);
    }, []);`

    => Here is the correct usage:

    `useEffect(() => {
    async function fetchData() {
        try {
        const result = await fetchSomeData();
        setData(result);
        } catch (error) {
        console.error(error);
        }
    }

    fetchData();
    }, []);`
    
    => In summary, the reason we can't use async before useEffect directly is due to the requirement that the function passed to useEffect must either return nothing or a cleanup function, not a promise. Using an inner async function is the recommended way to handle this limitation.
 */