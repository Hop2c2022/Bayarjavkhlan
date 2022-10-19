import React from "react";
import { Delete } from "./delete";
import { Done } from "./done";

export const Todo = ({ button, setButton, input }) => {
  return (
    <div>
      {/* style={{
              textDecoration: isActive ? "underline" : "",
            }} */}

      {button.map((el) => {
        return (
          <div className="main" key={el.id}>
            <div className="step">
              <div>{el.id + 1}) </div>
              {el.checked == true ? (
                <div
                  style={{
                    textDecoration: "line-through",
                  }}
                  id={el.id}
                >
                  {el.text}{" "}
                </div>
              ) : (
                <div id={el.id}>{el.text}</div>
              )}
            </div>
            <div className="step al">
              <Delete button={button} i={el.id} setButton={setButton}></Delete>
              <Done i={el.id} todo={button} setTodo={setButton} />
            </div>
          </div>
        );
      })}
    </div>
  );
};
