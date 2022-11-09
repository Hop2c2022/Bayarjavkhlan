import { Head } from "../components/tool/Head";
import { Photo3 } from "../components/tool/photo3";
import { Footer } from "../components/Footer";
export const Post = () => {
  return (
    <div className="d-flex align-items-center flex-column">
      <div className="w-75 d-flex align-items-center flex-column">
        <Head color={"black"}></Head>
        <div className=" w-50">
          <div
            className="fw-bold "
            style={{
              fontSize: "48px",
              lineHeight: "80px",
            }}
          >
            10 Secrets for managing a <br /> remote team{" "}
          </div>
          <div style={{ width: "45%" }}>
            <Photo3
              style={{ fontSize: "20px" }}
              width={"44.51px"}
              name={"Yasar ahmad"}
              date={"2nd January,2022"}
            />
          </div>
          <div className="d-flex justify-content-center">
            <img
              className="overflow-visible"
              style={{ width: "2123234234242%" }}
              src="../Image.svg"
              alt=""
            />
          </div>
          <div
            className="d-flex justify-content-center align-items-center w-100 "
            style={{ height: "130vh" }}
          >
            <div className="d-flex flex-column gap-5">
              <div>
                If you’re thinking of starting a blog of your own, but just
                don’t have a clue on what to blog about, then fear not!
              </div>
              <div>
                In this article, I have included a whole load of blog examples
                from a wide variety of different niches, all run on different
                blogging platforms like WordPress, Joomla! and Drupal.
              </div>
              <div>
                Since the beginning of the internet, millions and millions and
                millions of blogs have been created. Many have died due to lost
                interest or their owners giving up on the idea, while others
                have thrived and continue to grow, making money and earning
                their owners a steady income. It’s a constant evolution of
                content that keeps people coming back for more, especially if
                these blogs contact highly resourceful material that people find
                useful and interesting.
              </div>
              <div>
                Each example listed in this blog post are all different in some
                way and all bring something unique to their readers &
                subscribers. I want to show you what is possible and how you can
                take inspiration from them and create an awesome blog of your
                own.
              </div>
              <div>
                Some of these blogs make over $100k a month, others are just a
                hobby for their owners, but all have the same purpose at their
                core… the love of writing and sharing information. <br /> Some
                of these blogs make over $100k a month, others are just a hobby
                for their owners, but all have the same purpose at their core…
                the love of writing and
              </div>
              <div>
                Some of these blogs make over $100k a month, others are just a
                hobby for their owners, but all have the same purpose at their
                core… the love of writing and sharing information. <br /> Some
                of these blogs make over $100k a month, others are just a hobby
                for their owners, but all have the same purpose at their core…
                the love of writing and sharing information.
              </div>
            </div>
          </div>
          <div
            className="d-flex gap-4 border-bottom"
            style={{ height: "270px" }}
          >
            <div
              style={{ width: "100px", height: "100px" }}
              className="overflow-hidden d-flex align-items-center "
            >
              <img
                className="w-75 h-75"
                style={{ borderRadius: "100px" }}
                src="https://wegotthiscovered.com/wp-content/uploads/2022/10/chainsaw-man-opening-image.jpg"
                alt=""
              />
            </div>
            <div className="d-flex flex-column gap-2 ">
              <span style={{ fontSize: "14px" }}>Written by </span>
              <span style={{ fontSize: "24px" }}>Faze Tea </span>
              <span style={{ fontSize: "14px", color: "#989898" }}>
                JUST Normal guY
              </span>
            </div>
          </div>
          <div
            className="d-flex flex-column align-items-center justify-content-center"
            style={{ height: "500px" }}
          >
            <div className="w-100 d-flex flex-column gap-3">
              <div style={{ fontSize: "24px", color: "#6D7D8B" }}>
                Join the conversation
              </div>
              <div className="d-flex flex-row gap-4">
                <div
                  style={{ width: "60px", height: "60px" }}
                  className="overflow-hidden d-flex align-items-center "
                >
                  <img
                    className="w-100 h-100"
                    style={{ borderRadius: "100px" }}
                    src="https://wegotthiscovered.com/wp-content/uploads/2022/10/chainsaw-man-opening-image.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <input
                    placeholder="Comments"
                    style={{
                      width: "755px",
                      height: "177px",
                    }}
                    type="text"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};
