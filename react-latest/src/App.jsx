import { useState } from "react";
import Counter from "./Counter.jsx";

function App(){
  const [ name, setName ] = useState("Anil Kumar");
  const [show, setShow] =  useState(true);

  const changeName = () => {
    setName("Anil Kumar Saini")
  }

  return (
    <div>
      <h1>My name is : {name}</h1>
      <button onClick={changeName}>Change Name</button>
      <Counter />

      <h2>Show hide feature</h2>
      {
        show ? <h3>Toggle me</h3> : null
      }

      <button onClick={()=> setShow(!show)}>Click to toggle</button>
    </div>
  )
 
}

export default App;