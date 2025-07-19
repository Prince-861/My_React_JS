// import ReactDOM from "react-dom";
// import App from "./App";

// ReactDOM.render(<App />, document.getElementById("root"));//This code will work for <=React 17

import Header from "./components/header/Header";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);//Here parent container is App component.
root.render(<BrowserRouter>
                <App />
            </BrowserRouter>);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Header />);//Here parent component is Header component.