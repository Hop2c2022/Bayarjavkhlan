import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
export const Home = () => {
  return (
    <div>
      <div>
        <h1>Instant collaborations for remote teams</h1>
        <span>
          All in one for your remote team chats, collaboration and track
          projects
        </span>
        <div>Input</div>
      </div>
      <div>
        <Link to={"/login"}>
          <span>Login</span>
        </Link>
      </div>
    </div>
  );
};
