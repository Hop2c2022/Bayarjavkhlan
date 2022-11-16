import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home, Blog, Post, Login } from "./pages";
import { ThemeComponent } from "./components/Theme";
import { Jane } from "./components/tool/Jane";
import { Info } from "./pages/Info";
const App = () => {
  return (
    <ThemeComponent>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/blog/post" element={<Post />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route element={<Jane />}></Route>
          <Route path="/info" element={<Info />}></Route>
        </Routes>
      </BrowserRouter>
    </ThemeComponent>
  );
};

export default App;
