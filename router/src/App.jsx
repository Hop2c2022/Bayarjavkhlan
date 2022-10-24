// import "./App.css";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Login } from "./pages/login";
import { Home } from "./pages/home";
function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
