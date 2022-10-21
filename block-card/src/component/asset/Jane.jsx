import { Photo2 } from "./img/photo2";
import { Photo3 } from "./img/photo3";
import "./css/Jane.css";
export const Jane = () => {
  return (
    <div className="Jane">
      <Photo2 width={"370px"} height={"147px"} />
      <div className="second">
        <span className="title">
          Data-Driven Design is Killing Our Instincts
        </span>{" "}
        <br />
        <span>
          Our latest updates and blogs about managing <br /> your team <br />{" "}
          Our latest updates and blogs about managing your team
        </span>
        <Photo3
          width={"44.51px"}
          name={"Yasar ahmad"}
          date={"2nd January,2022"}
        />
      </div>
    </div>
  );
};
