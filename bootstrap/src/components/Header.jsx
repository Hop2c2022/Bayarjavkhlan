import "./../components/css/Header.css";
import { Head } from "./tool/Head";

import Button from "react-bootstrap/Button";
export const Header = () => {
  return (
    <div
      className="H-bg w-100 d-flex flex-row justify-content-center text-light"
      style={{ height: "100vh" }}
    >
      <div className=" h-100 d-flex flex-column " style={{ width: "85%" }}>
        <Head color={"dark"} path={"./blog"} />
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
                lineHeight: "163.15%",
              }}
            >
              All in one for your remote team chats, collaboration and track
              projects
            </div>
          </div>
          <div className="d-flex flex-row gap-4 ">
            <input
              placeholder="Email"
              className="w-75 border border-0 p-3"
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
            >
              Get early access
            </Button>
          </div>
        </div>

        {/* <div
            className="d-flex flex-row justify-content-center w-100 align-items-center fw-bold "
            style={{ height: "7%", gap: "13%" }}
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
                Go Blog
              </Button>
            </Link>
          </div> */}
      </div>
    </div>
  );
};
