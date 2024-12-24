import { createElement } from "react";
// import Login, {Profile, Setting} from "./UserComponent.jsx";

function App(){
  // return (
  //   <div>
  //     <h1>React Import - Export component</h1>
  //     <Login />
  //     <Profile />
  //     <Setting />
  //   </div>
  // )

  return createElement("h1",{id:"customID", class: "customClass"}, "Creating HTML element by react only")
}

export default App;