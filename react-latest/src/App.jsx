import { useState } from "react";
// import Toggle from "./Toggle.jsx";
import PropsComp from "./PropsComp.jsx";

function App(){
  const [name] = useState("Anil");
  const [skill] =  useState("ReactJs")

  return (
    <div>
      {/* <Toggle /> */}
      <PropsComp name={name} skill={skill} />
    </div>
  )
 
}

export default App;