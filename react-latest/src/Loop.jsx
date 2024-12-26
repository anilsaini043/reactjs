import { useState } from "react";

const Loop = () => {
    const [data] = useState([
        {name: "Anil", skill: "Vue", company: "IBM"},
        {name: "Deep", skill: "React", company: "Tesco"},
        {name: "Coach", skill: "Python", company: "GSK"},
        {name: "Anurag", skill: "Java", company: "HashedIn"},
        {name: "Vinay", skill: "AWS", company: "IBM"}
    ])
    return (
        <div style={{ margin: '20px' }}>
            <h1>Loop in React js</h1>
            <table border={1}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Skill</th>
                        <th>Company</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item, ind)=> (
                            <tr key={ind}>
                                <td>{ind+1}</td>
                                <td>{item.name}</td>
                                <td>{item.skill}</td>
                                <td>{item.company}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

        </div>
    )
}

export default Loop;