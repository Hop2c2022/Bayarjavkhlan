// import "./App.css";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Login } from "./pages/login";
import { Home } from "./pages/home";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
