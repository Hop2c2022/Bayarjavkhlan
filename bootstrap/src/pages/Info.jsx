import axios from "axios";
import { useEffect, useState } from "react";

export const Info = () => {
  const [user, setUser] = useState("");
  useEffect(() => {
    const dataAvagc = async () => {
      const result = await axios.get("https://dummyapi.io/data/v1/user/", {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          "app-id": "63104c3120f6e665ecf628ba",
        },
      });
      setUser(result.data);
    };
    dataAvagc();
  }, []);
  console.log(user.data);
  return (
    <div className="d-flex flex-row" style={{ width: "100vw" }}>
      {user?.data?.map((el) => {
        return (
          <div style={{ width: "25vw" }}>
            <div className="w-100">
              <img className="w-25" src={el.picture} alt="" />
            </div>
            <div>First name: {el.firstName} </div>
            <div>Last name: {el.lastName} </div>
            <div> id: {el.id}</div>
            <div> title: {el.title}</div>
          </div>
        );
      })}
    </div>
  );
};
