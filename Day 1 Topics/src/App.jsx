function Greeting({ name, power }) {
  return <h1>Hello {name} {power}</h1>
}
function App() {
  return (
    <>
 <Greeting name="IronMan"  />
    </>
  )
}

export default App