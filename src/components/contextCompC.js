import React, { createContext, useContext } from "react";
import createvalue from "../ContextApi";

const ContextCompC = ({ name }) => {
  const { items, alertButton} = useContext(createvalue);
  return (
      <>
     {/* props method
    <div>
        <h1>comp c {name}</h1>
     </div> */}

     {/* useContext method */}
    <div className="usecontextdata">
      {items.map((v) => (
        <div key={v.title}>
          <p>{v.title}</p>
          <p>{v.description}</p>
        </div>
      ))}
    </div>
    <button onClick={alertButton}>Alert</button>
    </>
  );
};

export default ContextCompC;
