import React from "react";
import { Delete } from "./delete";
import { Done } from "./done";
import { useState } from "react";

export const Todo = ({ button, setButton, input }) => {
  const [search, setSearch] = useState(button);
  const searcher = (inputValue) => {
    if (inputValue == "") {
      setSearch([]);
    } else {
      setSearch(
        button.filter((task) => {
          return task.text.toLowerCase().includes(inputValue.toLowerCase());
        })
      );
    }
  };
  return (
    <div>
      <input
        className="input"
        onChange={(e) => searcher(e.target.value)}
        type="text"
      />

      {(search[0] ? search : button).map((el) => {
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
