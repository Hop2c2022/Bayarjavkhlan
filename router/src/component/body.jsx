import "./body.css";

export const Body = () => {
  return (
    <div className="m-container">
      <div className="m-meeting">
        <div className="m-meeting1-s">
          <div className="m-meet-1">
            <div className="m-title">Your Hub for teamwork</div>
            <div className="m-text">
              Give everyone you work with—inside and outside your company—a more
              productive way to stay in sync. Respond faster with emoji, keep
              conversations focused in channels, and simplify all your
              communication into one place.
            </div>
            <div className="m-link">
              <a href="">Learn more</a>
            </div>
          </div>
        </div>
        <div className="m-meet-2">
          <img className="m-img" src="svg.svg" alt="" />
          <img className="m-img1" src="svg1.svg" alt="" />
          <img className="m-img2" src="svg2.svg" alt="" />
          <img className="m-img3" src="svg3.svg" alt="" />
        </div>
      </div>
    </div>
  );
};
