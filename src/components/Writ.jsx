import React, { useState, useContext } from "react";
import { todocontext } from "../Wrapper";

function Writ() {
  const [todo, settodo] = useContext(todocontext);
  const DeleteHandler = (id) => {
    const filter = todo.filter((todo) => todo.id != id);
    settodo(filter);
  };
 
  const task = todo.map((task, index) => {
    return (
      <li key={index}>
        {task.title}{" "}
        <button
          className="bg-white w-15 h-7 rounded-xl text-xl mt-3 text-black  active:scale-95 transition"
          onClick={() => DeleteHandler(task.id)}
        >
          Done
        </button>
      </li>
    );
  });

  return <ol className="text-2xl list-disc text-white ml-10">{task}</ol>;
}

export default Writ;
