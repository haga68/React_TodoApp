import React from 'react';
import Todo from "./Todo";

const TodoList = ({ todos, toggleTodo }) => {
  return todos.map((todo) => <Todo todo={todo} key={todo.id} toggleTodo={toggleTodo}/>);
};
  //{} jsx記法　{}の中はJavaScriptのように書くことができる
  //{}で指定されたProps名をそのまま使用
  //map関数で配列todosの中身を一つ一つ取り出す
  //todoという用意した変数をTodoコンポーネントにわたす

export default TodoList