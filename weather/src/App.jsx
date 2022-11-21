import axios from "axios";
import { useEffect, useState } from "react";
import {} from "./css/base.css";

const App = () => {
  const [info, setInfo] = useState("");
  const instance = axios.create({
    baseURL:
      "https://cors-anywhere.herokuapp.com/" +
      "https://api.darksky.net/forecast/81d38b9c958eb018e01083a72b0926b5/46.8625,103.8467",
    timeout: 2000,
  });
  useEffect(() => {
    const dataAvagc = async () => {
      const result = await instance.get();
      setInfo(result.data);
    };
    dataAvagc();
  }, []);
  const faranheit = (temp) => {
    return (5 / 9) * (temp - 32);
  };
  const timer = (unix_timestamp) => {
    unix_timestamp = unix_timestamp + 1;
    let date = new Date(unix_timestamp * 1000);
    let hours = date.getHours();
    let minutes = "0" + date.getMinutes();
    return hours + ":" + minutes.substr(-2);
  };
  return (
    <div className="container">
      <div
        style={{
          width: "30vw",

          borderRadius: "15px",
          overflow: "hidden",
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        }}
      >
        <div className="main " style={{ height: "400px" }}>
          <div
            className="font"
            style={{
              backgroundColor: "rgb(34, 34, 34)",
              width: "100%",
              color: "white",
              textAlign: "center",
              height: "30%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {info.timezone}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: "70%",
              width: "100%",
            }}
          >
            <div className="font temp">
              <div>{Math.trunc(faranheit(info?.currently?.temperature))}°C</div>
              <div>{info?.currently?.summary}</div>
            </div>

            <div
              style={{
                fontSize: "4.5rem",
                height: "40%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              className="font"
            >
              {" "}
              {timer(info?.currently?.time)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default App;
