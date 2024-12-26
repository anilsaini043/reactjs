import { useState } from "react"

const Checkbox = () => {
    const [skill, setSkill] = useState([]);
    const handleSkillSelection = (e) => {
        if(e.target.checked){
            setSkill([...skill, e.target.value])
        }else{
            setSkill([...skill.filter((item)=> item != e.target.value)])
        }
    }
    return (
        <div style={{marginLeft:'50px'}}>
            <h1>How to handled checkbox selections</h1>
            <h2>Selected skills : {skill}</h2>
            <input type="checkbox" id="react" value="React, " onChange={handleSkillSelection} />
            <label htmlFor="react"> React JS</label>
            <br /><br />
            <input type="checkbox" id="node" value="Node, " onChange={handleSkillSelection} />
            <label htmlFor="node"> Node JS</label>
            <br /><br />
            <input type="checkbox" id="vue" value="Vue, " onChange={handleSkillSelection} />
            <label htmlFor="vue"> Vue JS</label>
            <br /><br />
            <input type="checkbox" id="js" value="Js, " onChange={handleSkillSelection} />
            <label htmlFor="js"> Javascript</label>
        </div>
    )
}

export default Checkbox;