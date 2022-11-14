import "../css/head.css";
import { Button } from "react-bootstrap";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import { useContext } from "react";
import { Themecontext } from "../Theme";

export const Head = ({ color, path }) => {
  const { check, themeChecker } = useContext(Themecontext);
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
        <div class="form-check form-switch form-check-reverse">
          <input
            onChange={themeChecker}
            class="form-check-input"
            type="checkbox"
            id="flexSwitchCheckReverse"
          />
        </div>
        <a className="a" href="">
          Products
        </a>
        <a className="a" href="">
          Services
        </a>
        <a className="a" href="">
          Contact
        </a>
        <Link
          className="link"
          style={{
            textDecoration: "none",
            color: "black",
          }}
          to="/login"
        >
          <div>Log In</div>
        </Link>
        <Link to={path}>
          <Button
            style={{
              fontSize: "21.6px",
              fontWeight: "bold",
              backgroundColor: "transparent",
              color: color,
            }}
            className="rounded border  border-2 border-dark text-dark a"
          >
            Get access
          </Button>
        </Link>
      </div>
    </div>
  );
};
