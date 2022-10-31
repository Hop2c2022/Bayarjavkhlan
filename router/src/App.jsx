// import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Login } from "./pages/login";
import { Ehbiy } from "./pages/ehbiy";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Ehbiy />} />
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
