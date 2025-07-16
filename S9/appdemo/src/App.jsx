import Header from './components/header/Header';
import "./App.css";
import Counter from "./components/counter/Counter";
import ImageComp from './components/imageTask/ImageComp';
import Products from './components/products/Products';
import Home from './components/home/Home';

function App() {
  return (
    <div className="app">
      {/* <h2>App Component</h2> */}
      {/* <Header /> */}
      <Home />
      <Products />
      <ImageComp />
      <Counter />
    </div>
  );
}

export default App;
