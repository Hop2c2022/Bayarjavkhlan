import "./Header.css";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";

import Button from "react-bootstrap/Button";
export const Header = () => {
  return (
    <div
      className="H-bg w-100 d-flex flex-row justify-content-center text-light"
      style={{ height: "100vh" }}
    >
      <div className=" h-100 d-flex flex-row" style={{ width: "85%" }}>
        <div
          style={{ width: "35%" }}
          className=" h-100  d-flex flex-column justify-content-center gap-5 "
        >
          <div className="d-flex gap-2n flex-column">
            <div
              className="text-light"
              style={{
                fontSize: "65px",
                lineHeight: "75.8px",
                fontWeight: "500",
              }}
            >
              Instant <br /> collaborations for remote teams
            </div>
            <div
              style={{
                fontSize: "24.3px",
                lineHeight: "163.15%",
              }}
            >
              All in one for your remote team chats, collaboration and track
              projects
            </div>
          </div>
          <div className="d-flex flex-row gap-4 ">
            <input
              className="w-75"
              style={{
                height: "52px",
                borderRadius: "5.4px",
              }}
              type="text"
            />
            <Button
              className="d-flex justify-content-center align-items-center border-none text-light fw-bold"
              style={{
                height: "52px",
                background: "#0BBEF2",
                borderRadius: "5.4px",
              }}
              variant
            >
              Get early access
            </Button>
          </div>
        </div>
        <div
          style={{ width: "65%" }}
          className=" h-100 d-flex justify-content-center"
        >
          <div
            className="d-flex flex-row justify-content-center w-100 align-items-center fw-bold "
            style={{ height: "7%", fontSize: "21.6px", gap: "13%" }}
          >
            <div>Product</div>
            <div>Services</div>
            <div>Contact</div>
            <div>Login</div>
            <Link to="/blog">
              <Button
                style={{
                  fontSize: "21.6px",
                  fontWeight: "bold",
                  backgroundColor: "transparent",
                  border: "rgb(173, 168, 168)",
                }}
                className="rounded border "
              >
                Tap and go to Blog
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
