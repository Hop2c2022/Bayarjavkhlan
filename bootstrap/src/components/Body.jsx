import { Amy } from "./tool/Amy";
export const Body = () => {
  return (
    <div className="d-flex flex-column align-items-center overflow-hidden">
      <div className="d-flex flex-column w-75">
        <div className="d-flex " style={{ height: "100vh" }}>
          <div
            style={{ width: "35%" }}
            className="  h-100 d-flex flex-column justify-content-center gap-5"
          >
            <div
              style={{
                fontSize: "48px",
                lineHeight: "60px",
              }}
            >
              Your Hub for teamwork
            </div>
            <div
              style={{
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
                lineHeight: "29px",
              }}
            >
              Learn more -
            </div>
          </div>
          <div className="h-100 w-75  d-flex flex-row  justify-content-end align-items-center">
            <img
              style={{ transform: "translateX(13vw)" }}
              src="./meeting1.svg"
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
                // fontWeight: "800",
                fontSize: "48px",
                lineHeight: "60px",
              }}
            >
              Simple task management
            </div>
            <div
              style={{
                // fontWeight: "600",
                // fontSize: "18px",
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
                // fontWeight: "600",
                // fontSize: "16px",
                lineHeight: "29px",
              }}
            >
              Learn more -
            </div>
          </div>
          <div className="h-100 w-75  d-flex flex-row  justify-content-start align-items-center">
            <img
              className="w-75"
              style={{ transform: "translateX(-13vw)" }}
              src="./simple.png.png"
              alt=""
            />
            <img
              style={{ transform: "translate(6vw, -25vh)", width: "15%" }}
              className="position-absolute "
              src="./b-0.svg"
            />
            <img
              style={{ transform: "translate(6.2vw, -8vh)", width: "16%" }}
              className="position-absolute "
              src="./b-1.svg"
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
                fontSize: "48px",
                lineHeight: "60px",
              }}
            >
              Scheduling that actually works
            </div>
            <div
              style={{
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
                lineHeight: "29px",
              }}
            >
              Learn more -
            </div>
          </div>
          <div className="h-100 w-75  d-flex flex-row  justify-content-end align-items-center">
            <img
              className="w-75"
              style={{ transform: "translateX(8vw)" }}
              src="./scheduling.png"
              alt=""
            />
            <img
              style={{ transform: "translate(-4vw, -4vh)" }}
              className="position-absolute w-25"
              src="./calendar.svg"
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
              fontSize: "48px",
              lineHeight: "60px",
            }}
          >
            What people say about us
          </div>

          <div className="d-flex flex-row w-100 gap-3 overflow-scroll ">
            {[1, 2, 3, 4, 5, 6, 7].map(() => (
              <Amy />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
