import { Photo2 } from "./photo2";
import { Photo3 } from "./photo3";
import { useContext } from "react";
import { Themecontext } from "../Theme";
import "../css/Jane.css";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
export const Jane = () => {
  const { check } = useContext(Themecontext);
  return (
    <Link style={{ textDecoration: "none" }} to="./post">
      <div
        className="Jane "
        style={{
          width: "23vw",
          boxShadow:
            check == true
              ? "rgba(0, 0, 0, 0.24) 0px 3px 8px"
              : "white 0px 3px 8px",
          cursor: "pointer",
          backgroundColor: check == true ? "white" : "black",
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
