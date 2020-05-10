import React from "react";

const TodoListItem = ({ text, important = false }) => {
  const textStyle = { color: important ? "red" : "black" };

  return <span style={textStyle}>{text}</span>;
};

export default TodoListItem;
