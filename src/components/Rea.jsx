import React, { useContext, useState } from "react";
import { nanoid } from "nanoid";
import { set, useForm } from "react-hook-form";
import { todocontext } from "../Wrapper";
function Rea() {
  const [todo, settodo] = useContext(todocontext);

  const [title, settitle] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const newTask = { id: nanoid(), title: data.title };
    settodo([...todo, newTask]);
    reset();
  };

  return (
    <div className="bg-amber-300">
      <h1 className="text-white-500  underline-offset-0 text-3xl ">
        Create Tasks
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="input" className="text-white w-30 text-2xl ">
          Enter the Task:
        </label>
        <input
          {...register("title", {
            required: "title cannot be empty",
          })}
          className="input bg-amber-200 w-40 h-10 rounded-2xl text-2xl p-5 text-white mt-10  ml-2 focus:outline-none focus:ring-0"
          type="text"
          placeholder="title"
        />
        {errors.title && (
          <p className="text-red-500 text-sm">{errors.title.message}</p>
        )}
        <button className="bg-white w-30 h-10 rounded-2xl text-2xl ml-10 mt-10 mb-10 active:scale-95 transition">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Rea;
