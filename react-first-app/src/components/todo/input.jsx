import React from "react";

export const Input = ({ setInput, input }) => {
  const listener = (e) => {
    setInput(e.target.value);
  };
  return (
    <div>
      <input className="input" value={input} onChange={listener} type="text" />
    </div>
  );
};
