
const Person = (props) => {
  return(
    <>
    <h1>Name:{props.name}</h1>
    <h2>Last Name:{props.lastname}</h2>
    <h3>Age:{props.age}</h3>
    </>
  )
}

function App() {

  return (
  <div>
    <Person name={'sid'} lastname={'acharya'} age={'23'}/>
     <Person/>
     <Person/>
     <Person/>
   </div>
  )
}

export default App
