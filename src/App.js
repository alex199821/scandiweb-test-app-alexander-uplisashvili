import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import CartPage from "./Pages/CartPage";
import ProductPage from "./Pages/ProductPage";
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
            <Route path="pdp/:id" element={<ProductPage />} />
            <Route path="cart" element={<CartPage />} />
            <Route path="*" element={<ProductList />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
