import "./ImageComp.css";
import {useState} from "react";

function ImageComp(){
    let[title, setTitle] = useState("React");

    let[url, setUrl] = useState("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLuowUjaOWu7gD__sbISQai7nzr6j8gL4x2Q&s"); 
    
    const changeToAngular = () =>{
        setUrl("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNHV1gamrQ4FdpUtHHBaWJY7nU-oFlPfQemw&s");
        setTitle("Angular");
    };

    const changeToReact = () =>{
        setUrl("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLuowUjaOWu7gD__sbISQai7nzr6j8gL4x2Q&s");
        setTitle("React");
    };

    return (
        <div id="ImageComp">
            <h2 style={{color:"red"}}>{title}</h2>
            <img src={url}
            width="500" 
            height="300"
            />
            <br />
            <button onClick={changeToReact}>React</button>
            <button onClick={changeToAngular}>Angular</button>
        </div>
    );
}

export default ImageComp;