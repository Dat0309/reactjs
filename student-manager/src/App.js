import { useState } from "react";
import TodoList from "./components/TodoList";
import {v4} from 'uuid';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [textInput, setTextInput] = useState("");

  const onTextInputChange = (e) =>{
    setTextInput(e.target.value);
  };

  const onAddBtnClick = (e) =>{
    setTodoList([...todoList, {id: v4(), name:textInput, isCompleted: false}]);
  };

  return (
    <>
    <form>
      <input type="text"
      placeholder="Nhập công việc cần làm" 
        value={textInput}
        onChange={onTextInputChange}
      />

      <button type="submit" onClick={onAddBtnClick}>Thêm</button>

    </form>
    <TodoList todoList={todoList}/>
    </>
  );
}

export default App;
