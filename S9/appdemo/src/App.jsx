import Header from './components/header/Header';
import "./App.css";
import Counter from "./components/counter/Counter";
import ImageComp from './components/imageTask/ImageComp';
function App() {
  return (
    <div className="app">
      {/* <h2>App Component</h2> */}
      {/* <Header /> */}
      <ImageComp />
      <Counter />
    </div>
  );
}

export default App;
