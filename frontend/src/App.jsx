import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
// import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";
import CartPage from "./pages/CartPage";
import AuthPage from "./pages/AuthPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import BlogDetailsPage from "./pages/BlogDetailsPage";


import "./App.css";
import UserPage from "./pages/Admin/UserPage";
import CategoryPage from "./pages/Admin/Categories/CategoryPage";
import UpdateCategoryPage from "./pages/Admin/Categories/UpdateCategoryPage";
import CreateCategoryPage from "./pages/Admin/Categories/CreateCategoryPage";
import CreateProductPage from "./pages/Admin/Products/CreateProductPage";
import ProductPage from "./pages/Admin/Products/ProductPage";
import UpdateProductPage from "./pages/Admin/Products/UpdateProductPage";
import CouponPage from "./pages/Admin/Coupons/CouponPage";
import CreateCouponPage from "./pages/Admin/Coupons/CreateCouponPage";
import UpdateCouponPage from "./pages/Admin/Coupons/UpdateCouponPage";
import Success from "./pages/Success";
import OrderPage from "./pages/Admin/OrderPage";
import DashboardPage from "./pages/Admin/DashboardPage";
import LogoPage from "./pages/Admin/Logos/LogoPage";
import CreateLogoPage from "./pages/Admin/Logos/CreateLogoPage";
import UpdateLogoPage from "./pages/Admin/Logos/UpdateLogoPage";
import CreateBlogPage from "./pages/Admin/Blogs/CreateBlogPage";
import BlogPage from "./pages/Admin/Blogs/BlogPage";
import BlogDetails from "./components/BlogDetails/BlogDetails";
import Blogs from "./components/Blogs/Blogs";


function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/blog" element={<Blogs />} /> 
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/product/:id" element={<ProductDetailsPage />} />
       <Route path="/blog/:id" element={<BlogDetailsPage />} /> 
      <Route path="/sucess" element={<Success />} />
      <Route path="/admin/*">
        <Route path="users" element={<UserPage />} />
        <Route index element={<DashboardPage />} />
        <Route path="categories" element={<CategoryPage />} />
        <Route path="categories/create" element={<CreateCategoryPage />} />
        <Route path="categories/update/:id" element={<UpdateCategoryPage />} />
        <Route path="products" element={<ProductPage />} />
        <Route path="products/create" element={<CreateProductPage />} />
        <Route path="products/update/:id" element={<UpdateProductPage />} />
        <Route path="blogs/:id" element={<BlogPage />} />
        <Route path="blogs/create" element={<CreateBlogPage />} />
        
        <Route path="coupons" element={<CouponPage />} />
        <Route path="coupons/create" element={<CreateCouponPage />} />
        <Route path="coupons/update/:id" element={<UpdateCouponPage />} />
        <Route path="logos" element={<LogoPage />} />
        <Route path="logos/create" element={<CreateLogoPage />} />
        <Route path="logos/update/:id" element={<UpdateLogoPage />} />
        <Route path="orders" element={<OrderPage />} />
      </Route>
    </Routes>
  );
}

export default App;
