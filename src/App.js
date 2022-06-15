import './App1.css';
import Home from './Home'
import ProductLisiting from './ProductListing'
import { Routes, Route } from "react-router-dom";
import ProductDetails from './ProductDetails';
import Comments from './Comments'
function App() {

  return (
    <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/comments" element={<Comments/>}/>
    <Route path="/products" element={<ProductLisiting />}/>
    <Route path="/:productId" element={<ProductDetails />}/>
    </Routes>
  );
}

export default App;
