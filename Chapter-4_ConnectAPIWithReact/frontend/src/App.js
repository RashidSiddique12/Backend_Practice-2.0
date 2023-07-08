// import logo from "./logo.svg";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ProductsList from "./components/ProductsList";
import AddProduct from "./components/AddProduct";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductsList />} />
          <Route path="/add" element={<AddProduct />} />

          <Route />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
