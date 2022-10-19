import "./style.css";
import React, { useState } from "react";
import { Input } from "./components/todo/input";
import { Button } from "./components/todo/button";
import { Todo } from "./components/todo/todo";
import { Form } from "./components/form/Form";
const App = () => {
  const [input, setInput] = useState("");
  const [button, setButton] = useState([]);
  const [isActive, setIsActive] = useState(false);
  return (
    <div>
      <div className="Todo">
        <div className="App">
          <Input setInput={setInput} input={input} />
          <Button
            setButton={setButton}
            button={button}
            input={input}
            setInput={setInput}
          />
        </div>
        <div className="app2">
          <Todo
            button={button}
            setButton={setButton}
            isActive={isActive}
            setIsActive={setIsActive}
            input={input}
          />
        </div>
      </div>
      <Form />
    </div>
  );
};

export default App;
