import "./menu.scss";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { Orders } from "../orders/Orders";
import { Products } from "../products/Products";
import { Home } from "../home/Home";

export const NavigationMenu = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/orders" element={<Orders />} />
      </Routes>
      <Routes>
        <Route path="/products" element={<Products />} />
      </Routes>
      <div className="menu">
        <NavLink to="/orders">Orders</NavLink>
        <NavLink to="/products">Products</NavLink>
        <a href="#" onClick={(e) => e.preventDefault()}>
          Groups
        </a>
        <a href="#" onClick={(e) => e.preventDefault()}>
          Users
        </a>
        <a href="#" onClick={(e) => e.preventDefault()}>
          Settings
        </a>
      </div>
    </BrowserRouter>
  );
};
