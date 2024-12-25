// import { createElement } from "react";
import Login, {Profile, Setting} from "./UserComponent.jsx";

function App(){
  const name = "Anil kumar saini";

  function sum(){
    return 10+20
  }

  function multiply(a,b){
    return a*b
  }

  const show = ()=> {
    alert("Without params")
  }

  const show2 = (a)=> {
    alert("With params - "+ a)
  }

  return (
    <div>
      <h1>React Import - Export component</h1>
      <h1>My name is : {name}</h1>
      <h2>Sum of two no is : {sum()}</h2>
      <h2>Multiply of two no is : {multiply(5,7)}</h2>
      <Login />
      <Profile />
      <Setting />

      {/* Onclick event */}
      <button onClick={show}>Click without param</button>  
      <button onClick={()=>show2("Apple")}>Click with param</button>
    </div>
  )

  // return createElement("h1",{id:"customID", className: "customClass"}, "Creating HTML element by react only")
}

export default App;