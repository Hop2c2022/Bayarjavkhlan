import React from "react";
export const Button = ({ setButton, input, button, setInput }) => {
  const daragc = (arrayLength) => {
    setButton([...button, { id: arrayLength, text: input }]);

    setInput("");
  };

  return (
    <div>
      <button className="button" onClick={() => daragc(button.length)}>
        +
      </button>
    </div>
  );
};
