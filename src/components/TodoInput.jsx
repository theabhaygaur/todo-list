import React, { useState } from "react";

const TodoInput = (props) => {
  const { handleAddTodos, todoValue, setTodoValue } = props;

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAddTodos(todoValue);
      setTodoValue("");
    }
  };

  return (
    <header>
      <input
        type="text"
        placeholder="Enter todo..."
        onChange={(e) => setTodoValue(e.target.value)}
        value={todoValue}
        onKeyDown={handleKeyPress}
      />
      <button
        onClick={() => {
          handleAddTodos(todoValue);
          setTodoValue("");
        }}
      >
        Add
      </button>
    </header>
  );
};

export default TodoInput;
