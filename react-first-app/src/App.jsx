import "./style.css";
import React, { useState } from "react";
import { Input } from "./components/todo/input";
import { Button } from "./components/todo/button";
import { Todo } from "./components/todo/todo";
import { Form } from "./components/form/Form";
import { Search } from "./components/todo/search";
const App = () => {
  const [input, setInput] = useState("");
  const [button, setButton] = useState([]);
  const [isActive, setIsActive] = useState(false);
  const [search, setSearch] = useState("");
  console.log(button);
  return (
    <div>
      <div className="Todo">
        <div className="App">
          <Input setInput={setInput} input={input} />
        </div>
        <div>
          <Search
            setSearch={setSearch}
            search={search}
            button={button}
            setButton={setButton}
          />
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
