// import ReactDOM from "react-dom";
// import App from "./App";

// ReactDOM.render(<App />, document.getElementById("root"));//This code will work for <=React 17

import Header from "./components/header/Header";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);//Here parent container is App component.

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Header />);//Here parent component is Header component.