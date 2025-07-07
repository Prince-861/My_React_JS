import "./Counter.css";
import {useState} from "react";

function Counter(){
    // State is a special variable in React, where we can store any type of Data(array, object, primitive data, function etc....)
    // State Data we can bind with JSX element
    // Whenever State gets updated, internally react takes care of updating UI with new State data.
    

    // How to create or get a State variable?
    // ===>> Using useState(), we can get a state variable
    // var[state,setState] = useState();//useState() will return (one array) which will contain --->>  exactly two elements --> a variable(state) and a setter function (setState)
    
    //How to update the state variable?
    // ===>> Using setter function, i.e. setState() we can update the data of state variable. 

    // var count = 0;

    var [state, setState] = useState(0);//initially, in state there is not data so by-default it will be undefined --> state = undefined
    console.log("Re-rendering");
    
    const increaseCount = () => {
        // count=count+1;
        // count+=1;
        // count++;
        // console.log(count);

        // Queue DS is used to store the same function multiple times that is being called again and again and at last it will render the output as per the last function for one state variable.
        // setState(state + 1);//in setState() function we can directly pass some data or we can also pass some expression as well.
        // setState(state + 1);
        // setState(state + 4);//whatever writing we are writing in the last setState() that many times state is being updated here.
        // console.log(state); //setState() is an asynchronous function i.e. first console.log() function executes then the setState() function executes.
    
        // function(callback function) that is passed as an argument to setState() function is called as an updater function and this
        // updater function will always return something and it will take one parameter which will consist the previous state not the initial state. 
    
        // If we want to change the UI as many times it is called then we will use updater function inside the setState function.
        setState((prevState) => {//0
            return prevState + 1;//1
        });
        
        setState((prevState) =>{//1
            return prevState+1;//2
        });

        setState((prevState) =>{//2
            return prevState + 1;//3
        });
    
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