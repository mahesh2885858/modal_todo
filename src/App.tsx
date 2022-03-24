import { useState, useRef } from "react";
import "./app.scss";
function App() {
  const [showModal, setShowModal] = useState(false);
  const inputref = useRef<null | HTMLInputElement>(null);
  const [todo, setTodos] = useState<string[]>([]);
  const openModal = () => {
    setShowModal(true);
  };
  const addTodo = () => {
    const item = inputref.current?.value;
    setTodos((x: string[] | any) => {
      return [...x, item];
    });
  };
  return (
    <div className="App">
      <h1>Modal</h1>
      {todo.map((item) => {
        return <li>{item}</li>;
      })}
      <div id="modal" className={showModal ? "modal-show" : "hide-modal"}>
        <div className="modal-content">
          <input ref={inputref} type="text" />
          <button onClick={addTodo}>Add Todo</button>
          <button onClick={() => setShowModal(false)}>Close</button>
        </div>
      </div>
      <button onClick={openModal}>Click Me!</button>
    </div>
  );
}

export default App;
