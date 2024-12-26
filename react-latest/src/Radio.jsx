import { useState } from "react"

const Radio = () => {
    const [gender, setGender] = useState('Female');
    
    return (
        <div style={{ marginLeft: '50px' }}>
            <h1>How to handled radio selection</h1>
            <h2>Selected gender : {gender}</h2>

            <input type="radio" id="male" name="gender" value="Male" checked={gender == 'Male'} onChange={(e)=>setGender(e.target.value)} />
            <label htmlFor="male">Male</label>
            <br/><br/>

            <input type="radio" id="female" name="gender" value="Female" checked={gender == 'Female'} onChange={(e)=>setGender(e.target.value)} />
            <label htmlFor="female">Female</label>

        </div>
    )
}

export default Radio;