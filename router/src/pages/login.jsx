import React, { useState, useRef } from "react";
import "./bobo.css";
export const Login = () => {
  const ba = useRef();
  const be = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [all, setAll] = useState("");
  const baba = () => {
    ba.current.focus();
  };
  const bebe = () => {
    be.current.focus();
  };
  const namechanger = (e) => {
    setName(e.target.value);
  };
  const emailchanger = (e) => {
    setEmail(e.target.value);
  };
  const submit = (event) => {
    event.preventDefault();
    setAll([...all, { name: name, email: email }]);
    ba.current.value = "";
    be.current.value = "";
  };
  console.log(all);

  return (
    <form onSubmit={submit}>
      <h2>Sign Up</h2>
      <span>Lets create your account</span>
      <input
        ref={ba}
        placeholder="Your Name here"
        onChange={namechanger}
        type="text"
      />
      <input
        ref={be}
        placeholder="Your Email here"
        onChange={emailchanger}
        type="text"
      />
      <div className="fDiv">
        <button className="FBUTTON" type="submit">
          Register
        </button>
        <button className="fButton" onClick={() => bebe()}>
          Name
        </button>{" "}
        <button className="fButton" onClick={() => baba()}>
          Email
        </button>
      </div>
    </form>
  );
};
