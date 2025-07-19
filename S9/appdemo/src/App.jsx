import Header from "./components/header/Header";
import "./App.css";
import Counter from "./components/counter/Counter";
import ImageComp from "./components/imageTask/ImageComp";
import Products from "./components/products/Products";
import Home from "./components/home/Home";
import Nav from "./components/nav/Nav";
import { Route, Routes } from "react-router-dom";
import Electronics from "./components/products/categories/electronics/Electronics";
import Jewellery from "./components/products/categories/jewellery/Jewellery";

function App() {
  return (
    <div className="app">
      <Nav />

      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/products"} element={<Products />}>
          <Route path={"electronics"} element={<Electronics />}/>
          <Route path={"jewellery"} element={<Jewellery />}/>
        </Route>
        <Route path={"/counter"} element={<Counter />} />
        <Route path={"/imagecomp"} element={<ImageComp />} />
      </Routes>
    </div>
  );
}

export default App;
