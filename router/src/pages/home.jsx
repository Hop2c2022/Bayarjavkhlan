import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "../App.css";

export const Home = () => {
  const printf = (a) => {
    console.log(a);
  };

  printf("asdasd");
  return (
    <div className="container">
      <div className="barun">
        <div className="bubu">
          <div className="suga">
            <span className="title">
              Instant <br /> collaborations for remote teams
            </span>{" "}
            <br />
            <span className="text">
              All in one for your remote team chats, collaboration and track
              projects
            </span>
          </div>
        </div>
        <div className="bunput">
          <input className="input" placeholder="Email" type="text" />
          <button className="btn">Get early access</button>
        </div>
      </div>
      <div className="zuun">
        <div className="baba">
          <div className="login">Product</div>
          <div className="login">Service</div>
          <div className="login"> Contact</div>
          <Link to={"/login"}>
            <span className="login">Login</span>
          </Link>
          <button className="get">Get access</button>
        </div>
      </div>
    </div>
  );
};
