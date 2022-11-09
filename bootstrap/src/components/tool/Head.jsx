import { Button } from "react-bootstrap";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
export const Head = ({ color, path }) => {
  return (
    <div
      className="w-100 d-flex flex-row justify-content-center align-items-center "
      style={{ heigh: "10vh" }}
    >
      <div className="w-50">
        <a href="/">
          <img style={{ width: "4vw" }} src="/logo.svg" alt="" />
        </a>
      </div>
      <div className="w-50 d-flex flex-row justify-content-around">
        <a>Products</a>
        <a>Services</a>
        <a>Contact</a>
        <Link style={{ textDecoration: "none", color: "white" }} to="/login">
          <a>Log In</a>
        </Link>
        <Link to={path}>
          <Button
            style={{
              fontSize: "21.6px",
              fontWeight: "bold",
              backgroundColor: "transparent",
              color: color,
            }}
            className="rounded border  border-2 border-dark"
          >
            Get access
          </Button>
        </Link>
      </div>
    </div>
  );
};
