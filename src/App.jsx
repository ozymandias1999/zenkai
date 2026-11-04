import { Routes, Route } from "react-router-dom"

import MainLayout from "./components/layout/MainLayout"

import CartPage from "./pages/CartPage"
import HomePage from "./pages/HomePage"
import ProductsPage from "./pages/ProductsPage"
import ProductDetailPage from "./pages/ProductDetailPage"
import CheckoutPage from "./pages/CheckoutPage"
import NotFoundPage from "./pages/NotFoundPage"




export default function App() {

  return (
    <Routes>
      <Route element={<MainLayout/>}>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/products" element={<ProductsPage/>}/>
        <Route path="/products/:id" element={<ProductDetailPage/>}/>
        <Route path="/cart" element={<CartPage/>}/>
        <Route path="/checkout" element={<CheckoutPage/>}/>
        <Route path="*" element={<NotFoundPage/>}/>
      </Route>
    </Routes>
  )
}

