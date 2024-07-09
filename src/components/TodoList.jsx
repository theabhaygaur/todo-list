import React from "react";
import TodoCard from "./TodoCard";

const TodoList = (props) => {
  const { todos } = props;

  return (
    <>
      <h2
        style={{ textAlign: "center", marginTop: "30px", marginBottom: "10px" }}
      >
        Todo List
      </h2>
      <ul className="main">
        {todos.map((todo, todoIndex) => {
          return (
            <TodoCard {...props} key={todoIndex} index={todoIndex}>
              <p>{todo}</p>
            </TodoCard>
          );
        })}
      </ul>
    </>
  );
};

export default TodoList;
