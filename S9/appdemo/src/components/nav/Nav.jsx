import React from "react";
import "./Nav.css";
import { Link } from 'react-router-dom';
// React Router is Link Library which implements
// routing in React Application.

// ReactRouter provides pre-defined react component and Hooks 
// using which we can implement routing in React Applications
// These are some predefined Components which React Router library gives:- BrowserRouter, Route, Link, Outlet, Navigate, NavLink, Routes.....etc.
// Some predefined hooks which this ReactRouter library provides:- useNavigate(), useParams(), useSearchParams()
function Nav() {
  return (
    <div class="nav">
      <div class="leftPanel flexContainer">
        <h2>React Routing</h2>
      </div>
      <div class="rightPanel flexContainer">
        {/* <a href="/">Home</a>
        <a href="/products">Products</a>
        <a href="/counter">Counter</a>
        <a href="/imagecomp">ImageComp</a> */}
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/counter">Counter</Link>
        <Link to="/imagecomp">ImageComp</Link>
      </div>
    </div>
  );
}

export default Nav;