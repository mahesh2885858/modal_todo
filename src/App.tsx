import { useState, useRef } from "react";
import { v4 as uuid } from "uuid";
import "./app.scss";
function App() {
  type todoitem = {
    todo: string;
    id: string;
  };
  const [showModal, setShowModal] = useState(false);
  const [input, setInput] = useState("");
  const [todo, setTodos] = useState<todoitem[]>([]);
  const openModal = () => {
    setShowModal(true);
  };
  const addTodo = () => {
    const item = { todo: input, id: uuid() };
    setTodos((x: string[] | any) => {
      return [...x, item];
    });
    setInput("");
    setShowModal(false);
  };
  return (
    <div className="App">
      <h1>Modal</h1>
      {todo.map((item) => {
        return <li key={item.id}>{item.todo}</li>;
      })}
      <div id="modal" className={showModal ? "modal-show" : "hide-modal"}>
        <div className="modal-content">
          <input
            value={input}
            type="text"
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={addTodo}>Add Todo</button>
          <button onClick={() => setShowModal(false)}>Close</button>
        </div>
      </div>
      <button onClick={openModal}>Click Me!</button>
    </div>
  );
}

export default App;
