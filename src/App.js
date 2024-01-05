import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./Components/Home";
import Navigation from "./Components/Navigation";
import Cart from "./Components/Cart";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
