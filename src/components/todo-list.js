import React from "react";
import TodoListItem from "./todo-list-item.js";

const TodoList = ({ todos }) => {
  return (
    <ul>
      <li>
        <TodoListItem text={todos[0].text} important={todos[0].important} />
      </li>
      <li>
        <TodoListItem text={todos[1].text} important={todos[1].important} />
      </li>
      <li>
        <TodoListItem text={todos[2].text} important={todos[2].important} />
      </li>
    </ul>
  );
};

export default TodoList;
