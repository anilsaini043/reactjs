
// App --> This is main component or root component

function App(){
  alert(SecondComponent())
  return (
    <div>
      <h1>My react components - Count : {SecondComponent()}</h1>
      <FirstComponent />
      <SecondComponent />
    </div>
  )
}

// Component - 1
function FirstComponent(){
  return <h2>First component : Count is - {SecondComponent()}</h2>
}

// Component - 2
function SecondComponent(){
  return 10+10
}

export default App;