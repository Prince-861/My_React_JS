import "./Products.css";
import { Link, Outlet } from "react-router-dom";
// Routing in React:-- Routing is a technique to switch from one component to another component.
// Routing cannot be implemented using React library.
// ReactRouter is a Library which implements routing in React Application.

function Products() {
  return (
    <div>
      <h1 style={{textAlign:"center", marginTop: "20px", color:"green"}}>
        Products Component
      </h1>
      <div className="productsContainer">
        <div className="linksContainer">
          <Link to="electronics"
                style={{color: "white", textDecoration: "none", fontSize:"21px"}}>
                Electronics
          </Link>
          <Link to="jewellery"
                style={{color: "white", textDecoration: "none", fontSize:"21px"}}>
                Jewellery
          </Link>
          <Link to=""
                style={{color: "white", textDecoration: "none", fontSize:"21px"}}>
                Men's Clothing
          </Link>
          <Link to=""
                style={{color: "white", textDecoration: "none", fontSize:"21px"}}>
                Women's Clothing
          </Link>
        </div>
        <div className="componentsContainer">
          <Outlet />  
        </div>
      </div>
    </div>
  );
}
export default Products;
