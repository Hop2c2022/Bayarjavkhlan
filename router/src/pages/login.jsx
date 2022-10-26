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
      <div className="S-title">Login</div>
      <div className="S-text">
        Sign in and start managing your candidates! Good luck!
      </div>
      <input
        ref={ba}
        placeholder="Your Name here"
        onChange={namechanger}
        type="text"
        className="S-input"
      />
      <input
        ref={be}
        placeholder="Your Email here"
        onChange={emailchanger}
        type="text"
        className="S-input"
      />

      <button className="S-button" type="submit">
        Register
      </button>
      <div className="s-forgot">
        <div className="s-s">Remember me</div>
        <div>Forget password?</div>
      </div>
      <div className="S-btns">
        <button className="S-button s-b" onClick={() => bebe()}>
          Name
        </button>{" "}
        <button className="S-button s-b" onClick={() => baba()}>
          Email
        </button>
      </div>
    </form>
  );
};
