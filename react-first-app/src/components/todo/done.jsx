import React from "react";
import { useState } from "react";
export const Done = ({ i, todo, setTodo }) => {
  const mystyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial",
  };

  const doned = () => {
    setTodo(
      todo.map((el) => {
        if (el.id == i) {
          const obj = el;

          obj.checked = !obj.checked;

          return obj;
        }
        return el;
      })
    );
    // bata.className = mystyle;
  };

  return (
    <div>
      <button className="button gren" onClick={() => doned()}>
        ✔
      </button>
    </div>
  );
};
