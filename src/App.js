import { useState, useRef } from "react";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [todos, setTodos] = useState([]);
  //初期値として設定された値がpropsで渡されている

  const todoNameRef = useRef();
  
  //タスクを追加
  const handleAddTodo = () =>{
    const name = todoNameRef.current.value;
    //空の場合はリターン（下の操作は実行しない）
    if(name==="") return;
    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), name: name, completed: false }];
      //スプレッド構文・・前のタスク状態に対して、新しく追加していく
      //uuidを使うことで、ランダムなIDが割り振られる
    });
    todoNameRef.current.value = null;
  };

  //タスク完了、未完了の切り替え（toggle）
  const toggleTodo = (id) =>{
    const newTodos = [...todos];
    //todosの中のオブジェクトをnewTodosに一回コピー
    //todosは状態変数で管理されているが、直接さわるのはよくないので、newTodosに格納する
    
    const todo = newTodos.find((todo) => todo.id === id);
    //find関数　引数で与えた数字idと、todo.idが合致しているオブジェクトだけ、todoに格納
    
    //チェックボックスのチェックを反転
    todo.completed = !todo.completed;

    setTodos(newTodos);
  };

  //完了したタスクの削除
  const handleClear = () => {
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
  };

  return (
    <>
      <TodoList todos = {todos}  toggleTodo = {toggleTodo}/>
      <input type="text" ref = {todoNameRef}/>
      <button onClick = {handleAddTodo}>タスクを追加</button>
      <button onClick = {handleClear}>完了したタスクの削除</button>
      <div>残りのタスク:{todos.filter((todo) => !todo.completed).length}</div>
    </> 
  );
}

export default App;
