import React from "react";
import { setButton } from "./button";
export const Delete = ({ button, i, setButton }) => {
  //   const chechIndex = (but) => {
  //     return
  //   };

  const ustgagc = () => {
    const a = button.filter((to) => to.id !== i);

    setButton(a);
  };

  return (
    <div>
      <button className="button red" onClick={() => ustgagc()}>
        ✘
      </button>
    </div>
  );
};
