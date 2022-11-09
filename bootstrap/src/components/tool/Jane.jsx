import { Photo2 } from "./photo2";
import { Photo3 } from "./photo3";
import "../css/Jane.css";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
export const Jane = () => {
  return (
    <Link style={{ textDecoration: "none" }} to="./post">
      <div
        className="Jane "
        style={{
          width: "23vw",
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          cursor: "pointer",
        }}
      >
        <Photo2 />
        <div className="second ">
          <span className="title">
            Data-Driven Design is Killing Our Instincts
          </span>{" "}
          <br />
          <span style={{ fontSize: "20px" }}>
            Our latest updates and blogs about managing <br /> your team <br />{" "}
            Our latest updates and blogs about managing your team
          </span>
          <Photo3
            style={{ fontSize: "20px" }}
            width={"44.51px"}
            name={"Yasar ahmad"}
            date={"2nd January,2022"}
          />
        </div>
      </div>
    </Link>
  );
};
