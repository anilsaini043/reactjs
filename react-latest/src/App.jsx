// import { useState } from "react";
// import Toggle from "./Toggle.jsx";
// import PropsComp from "./PropsComp.jsx";
import JSXCOMP from "./JSXwithProps.jsx";
import CONTROLINPUT from "./Input.jsx";

function App(){
  // const [name] = useState("Anil");
  // const [skill] =  useState("ReactJs")

  return (
    <div>
      {/* <Toggle /> */}
      {/* <PropsComp name={name} skill={skill} /> */}
      <JSXCOMP color="red">
        <h1>Hello Anil</h1>
        <h2>I am JSX as Props</h2>
        <h3>How are you?</h3>
      </JSXCOMP>
      <JSXCOMP color="blue">
        <h1>Hello Jyoti</h1>
        <h2>I am software engineer</h2>
      </JSXCOMP>

      {/* Controlled input component */}
      <CONTROLINPUT />
    </div>
  )
 
}

export default App;