import "./Counter.css";
import {useState} from "react";

function Counter(){
    // State is a special variable in React, where we can store any type of Data(array, object, primitive data, function etc....)
    // State Data we can bind with JSX element
    // Whenever State gets updated, internally react takes care of updating UI with new State data.
    

    // How to create or get a State variable?
    // ===>> Using useState(), we can get a state variable
    // var[state,setState] = useState();//useState() will contain exactly two elements --> a variable(state) and a setter function (setState)
    
    //How to update the state variable?
    // ===>> Using setter function, i.e. setState() we can update the data of state variable. 

    // var count = 0;

    var [state, setState] = useState(0);//initially, in state there is not data so by-default it will be undefined --> state = undefined

    const increaseCount = () => {
        // count=count+1;
        // count+=1;
        // count++;
        // console.log(count);
        setState(state + 1);//in setState() function we can directly pass some data or we can also pass some expression as well.
    };

    return (
        <div className="counter">
            <h2>Counter App in React</h2>
            <p>Count value is : {state}</p>
            {/* In JS we write like below */}
            {/* <button onclick="increaseCount()">incCount</button>*/}
            {/* In React we write like below */}
            <button onClick={increaseCount}>incCount</button>
        </div>
    );
}

export default Counter;