import { Head } from "../components/tool/Head";
import { Jane } from "../components/tool/Jane";
import { Button } from "react-bootstrap";
import { Footer } from "../components/Footer";
import { useContext } from "react";
import { Themecontext } from "../components/Theme";
export const Blog = () => {
  const { check } = useContext(Themecontext);

  return (
    <div
      className="d-flex justify-content-center flex-column align-items-center"
      style={{
        backgroundColor: check == true ? "white" : "black",
      }}
    >
      <div className="w-75">
        <Head />
        <div className="d-flex flex-column">
          <div
            className="d-flex flex-column justify-content-end "
            style={{
              height: "20vh",
              fonWeight: "800",
              fontSize: "48px",
              color: check == true ? "#212529" : "white",
            }}
          >
            <div
              className="fw-bold"
              style={{ fonWeight: "800", fontSize: "60px" }}
            >
              Blog posts
            </div>
            <div style={{ color: "#6D7D8B" }}>
              Our latest updates and blogs about managing your team
            </div>
          </div>
          <div
            className="d-flex align-items-center"
            style={{ height: "200vh" }}
          >
            <div className="d-flex flex-row justify-content-between flex-wrap gap-5">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((el, i) => (
                <Jane />
              ))}
            </div>
          </div>
          <div
            className="d-flex justify-content-center"
            style={{ height: "100px" }}
          >
            <Button className="w-25 h-50 ">Next</Button>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};
