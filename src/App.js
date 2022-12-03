import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import CartPage from "./Pages/CartPage";
import SingleProduct from "./Pages/SingleProduct";
import ProductList from "./Pages/ProductList";
class App extends Component {
  // componentDidMount() {
  //   document.body.style.overflowY = "hidden";
  // }
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavBar />}>
            <Route path="/" element={<ProductList />} />
            <Route path="product/:id" element={<SingleProduct />} />
            <Route path="cart" element={<CartPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
