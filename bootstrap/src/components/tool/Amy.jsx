import { Star } from "./Star";
import "../css/Amy.css";
import { Photo } from "./photo";
export const Amy = () => {
  return (
    <div className="Amy">
      <div className="amy">
        <div className="star">
          {[1, 2, 3, 4, 5].map(() => (
            <Star width={"24px"} height={"24px"} />
          ))}
        </div>
        <span style={{ fontSize: "1rem" }}>
          Give everyone you work with—inside and outside your emoji, keep
          conversations focused in channels, and simplify all your communication
          into one place.
        </span>
        <Photo width={"56px"} height={"56px"} />
      </div>
    </div>
  );
};
