import { useState } from "react";

const Dropdown = () => {
    const [city, setCity] = useState("jaipur")
    
    return (
        <div style={{ marginLeft: '50px' }}>
            <h1>How to handled select dropdown option selection</h1>
            <h2>Selected city : {city}</h2>

            <select defaultValue={"jaipur"} onChange={(e)=> setCity(e.target.value)}>
                <option value="bengluru">Bengluru</option>
                <option value="hydrabad">Hydrabad</option>
                <option value="jaipur">Jaipur</option>
                <option value="delhi">Delhi</option>
                <option value="alwar">Alwar</option>
            </select>

        </div>
    )
}

export default Dropdown;