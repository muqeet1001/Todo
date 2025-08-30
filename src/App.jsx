import React, { useState } from "react";
import Rea from "./components/Rea";
import Writ from "./components/Writ";

function App() {
  
   const [todo, settodo] = useState([]);
   const deleteall=()=>{
    settodo([]);
   }

  return (
    <>
      <Rea todo={todo} settodo={settodo} />
      <h1 className="text-4xl text-yellow-300 ml-10  mt-10">Peding todos <button className="bg-amber-50 rounded-2xl text-xl p-2" onClick={deleteall}>clear all</button></h1>
      <Writ todo={todo} settodo={settodo} />
    </>
  );
}

export default App;
