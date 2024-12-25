import { useState } from "react";

function Toggle(){
  const [show, setShow] =  useState(true);

  return (
    <div>
      <h2>Show hide feature</h2>
      {
        show ? <h3>Toggle me</h3> : null
      }

      <button onClick={()=> setShow(!show)}>Click to toggle</button>
    </div>
  )
 
}

export default Toggle;