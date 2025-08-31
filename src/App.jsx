import React, { useState,useContext} from "react";
import Rea from "./components/Rea";
import Writ from "./components/Writ";
import { todocontext } from "./Wrapper";

function App() {
  const [todo, settodo] = useContext(todocontext);
  const deleteall = () => {
    settodo([]);
  };

  return (
    <>
      <Rea />
      <h1 className="text-4xl text-yellow-300 ml-10  mt-10">
        Peding todos{" "}
        <button
          className="bg-amber-50 rounded-2xl text-xl p-2"
          onClick={deleteall}
        >
          clear all
        </button>
      </h1>
      <Writ  />
    </>
  );
}

export default App;
