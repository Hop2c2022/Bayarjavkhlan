import axios from "axios";
import { useEffect, useState } from "react";
import {} from "./css/base.css";

const App = () => {
  const [info, setInfo] = useState("");
  useEffect(() => {
    const dataAvagc = async () => {
      const result = await axios.get(
        "https://cors-anywhere.herokuapp.com/" +
          "https://api.darksky.net/forecast/81d38b9c958eb018e01083a72b0926b5/46.8625,103.8467"
      );
      setInfo(result.data);
    };
    dataAvagc();
  }, []);
  // const faranheit = (temp) => {
  //   return (5 / 9) * (temp - 32);
  // };
  useEffect(() => {
    console.log(info.timezone);
  });
  return (
    <div className="container">
      <div>{info.timezone}</div>
      <div>{info?.currently?.temperature}+°C</div>
      <div>{info?.currently?.summary}</div>
    </div>
  );
};
export default App;
