import React from "react";
import ContextCompB from "./contextCompB";
import createvalue from "../ContextApi";
import { items } from "./items";

const ContextCompA = () => {
  // props method
  // return (
  //     <div>
  //         <ContextCompB name = {" Chetu India"}/>
  //     </div>

  const alertButton = ()=>{
      alert("alert box function passing via useContext")
  }
  return (
    //   useContext method
    <createvalue.Provider value={{ items, alertButton }}>
      <div>
        <ContextCompB />
      </div>
    </createvalue.Provider>
  );
};

export default ContextCompA;
