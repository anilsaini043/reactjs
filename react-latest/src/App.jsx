import { useState } from "react";
import Counter from "./Counter.jsx"

function App(){
  const [ name, setName ] = useState("Anil Kumar");
  const changeName = () => {
    setName("Anil Kumar Saini")
  }
  return (
    <div>
      <h1>My name is : {name}</h1>
      <button onClick={changeName}>Change Name</button>
      <Counter />
    </div>
  )
 
}

export default App;