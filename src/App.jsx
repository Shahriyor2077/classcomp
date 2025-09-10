import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";
import User from "./pages/User";
import Product from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <nav className="flex gap-12 container justify-around ">
        <NavLink to="/">Users</NavLink>
        <NavLink to="/login">Products</NavLink>
      </nav>
      <Routes>
        <Route index={true} element={<User />} />
        <Route path="/login" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
