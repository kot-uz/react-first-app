import React from "react";
import ReactDom from "react-dom";
import TodoList from "./components/todo-list.js";
import AppHeader from "./components/app-header.js";
import SearchPanel from "./components/search-panel";
import "./style.css";

const App = () => {
  const todoData = [
    { text: "Drink Coffee", important: false },
    { text: "Write Application2222", important: true },
    { text: "Take money", important: false },
  ];
  return (
    <div>
      <AppHeader />
      <SearchPanel />
      <TodoList todos={todoData} />
    </div>
  );
};

const el = <App />;

ReactDom.render(el, document.getElementById("root"));

// Можно в рендер функцию передавать не el, а сразу элемент <App/>
// ReactDom.render(<App />, document.getElementById("root"));
