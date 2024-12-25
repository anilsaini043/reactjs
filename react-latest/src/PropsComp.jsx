
function PropsComp(props){
  const { name, skill } = props;
  
  return (
    <div>
      <h2>React with Props to pass data from parent to child component</h2>
      {/* My name is : {props.name} and skill is : {props.skill} */}

      My name is : {name} and skill is : {skill}
    </div>
  )
 
}

export default PropsComp;