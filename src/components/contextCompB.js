import React from "react";
import ContextCompC from "./contextCompC";

const contextCompB = () => {
  return (
    // props method
    // <div>
    //     <ContextCompC name = {name}/>
    //     {/* <h1> Hello {name}</h1> */}
    // </div>
    <div>
      <ContextCompC />
      {/* <h1> Hello {name}</h1> */}
    </div>
  );
};

export default contextCompB;
