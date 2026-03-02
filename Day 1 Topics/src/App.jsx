function Greeting() {
  const name = "Chetan"
  const age = 21

  return (
    <>
      <h1>Hello {name} 🚀</h1>
      <p>You are {age} years old</p>
    </>
  )
}
function App() {
  return (
    <div>
      <Greeting />
    </div>
  )
}

export default App