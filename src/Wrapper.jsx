import React, { createContext } from "react";
import { useState } from "react";

 export const todocontext = createContext(null);
function Wrapper(props) {
  console.log(props);
  const [todo, settodo] = useState([]);
 
  return  <todocontext.Provider value={[todo, settodo]}>{props.App}</todocontext.Provider>;
}

export default Wrapper;
