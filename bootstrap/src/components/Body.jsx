import { Amy } from "./Amy";
import Carousel from "react-bootstrap/Carousel";
export const Body = () => {
  return (
    <div className="d-flex flex-column align-items-center">
      <div className="d-flex flex-column" style={{ width: "85vw" }}>
        <div className="d-flex " style={{ height: "100vh" }}>
          <div
            style={{ width: "35%" }}
            className="  h-100 d-flex flex-column justify-content-center gap-5"
          >
            <div
              style={{
                fontWeight: "800",
                fontSize: "48px",
                lineHeight: "60px",
              }}
            >
              Your Hub for teamwork
            </div>
            <div
              style={{
                fontWeight: "600",
                fontSize: "18px",
                lineHeight: "29px",
              }}
            >
              Give everyone you work with—inside and outside your company—a more
              productive way to stay in sync. Respond faster with emoji, keep
              conversations focused in channels, and simplify all your
              communication into one place.
            </div>
            <div
              style={{
                color: "#4DA0FD",
                fontWeight: "600",
                fontSize: "16px",
                lineHeight: "29px",
              }}
            >
              Learn more -
            </div>
          </div>
          <div className="h-100 w-75  d-flex flex-row  justify-content-end align-items-center">
            <img
              style={{ transform: "translateX(32vw)" }}
              src="./meeting1.png"
              alt=""
            />
            <img
              style={{
                position: "absolute",
                transform: "translate(-23vw, -27vh)",
              }}
              src="./meeting2.svg"
              alt=""
            />
            <img
              style={{
                position: "absolute",
                transform: "translate(-27vw, 27vh)",
              }}
              src="./meeting3.png"
              alt=""
            />
            <img
              style={{
                position: "absolute",
                transform: "translate(0vw, -38vh)",
              }}
              src="./meeting4.png"
              alt=""
            />
          </div>
        </div>
        <div className="d-flex flex-row-reverse " style={{ height: "100vh" }}>
          <div
            style={{ width: "45%" }}
            className="  h-100 d-flex flex-column justify-content-center gap-5"
          >
            <div
              style={{
                fontWeight: "800",
                fontSize: "48px",
                lineHeight: "60px",
              }}
            >
              Simple task management
            </div>
            <div
              style={{
                fontWeight: "600",
                fontSize: "18px",
                lineHeight: "29px",
              }}
            >
              Give everyone you work with—inside and outside your company—a more
              productive way to stay in sync. Respond faster with emoji, keep
              conversations focused in channels, and simplify all your
              communication into one place.
            </div>
            <div
              style={{
                color: "#4DA0FD",
                fontWeight: "600",
                fontSize: "16px",
                lineHeight: "29px",
              }}
            >
              Learn more -
            </div>
          </div>
          <div className="h-100 w-75  d-flex flex-row  justify-content-start align-items-center">
            <img
              className="w-75"
              style={{ transform: "translateX(-8vw)" }}
              src="./simple.png.png"
              alt=""
            />
          </div>
        </div>
        <div className="d-flex " style={{ height: "100vh" }}>
          <div
            style={{ width: "35%" }}
            className="  h-100 d-flex flex-column justify-content-center gap-5"
          >
            <div
              style={{
                fontWeight: "800",
                fontSize: "48px",
                lineHeight: "60px",
              }}
            >
              Scheduling that actually works
            </div>
            <div
              style={{
                fontWeight: "600",
                fontSize: "18px",
                lineHeight: "29px",
              }}
            >
              Give everyone you work with—inside and outside your company—a more
              productive way to stay in sync. Respond faster with emoji, keep
              conversations focused in channels, and simplify all your
              communication into one place.
            </div>
            <div
              style={{
                color: "#4DA0FD",
                fontWeight: "600",
                fontSize: "16px",
                lineHeight: "29px",
              }}
            >
              Learn more -
            </div>
          </div>
          <div className="h-100 w-75  d-flex flex-row  justify-content-end align-items-center">
            <img
              className="w-75"
              //   style={{ transform: "translateX(32vw)" }}
              src="./scheduling.png"
              alt=""
            />
          </div>
        </div>
        <div
          style={{
            height: "90vh",
          }}
          className=" w-100 d-flex flex-column align-items-center justify-content-center gap-5"
        >
          <div
            style={{
              fontWeight: "800",
              fontSize: "48px",
              lineHeight: "60px",
            }}
          >
            What people say about us
          </div>

          <div className="d-flex flex-row w-100 gap-5 overflow-scroll ">
            {[1, 2, 3, 4, 5, 6, 7].map(() => (
              <Amy />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
