// import { useState, useEffect } from "react"

// function App() {
//   const [count, setCount] = useState(0)

//  useEffect(() => {
//   document.title = `Count is ${count}`
// })

//   return (
//     <>
//       <h1>{count}</h1>
//       <button onClick={() => setCount(prev => prev + 1)}>
//         Increase
//       </button>
//     </>
//   )
// }

// export default App

import { useEffect, useState } from "react"

function App() {
  const [show, setShow] = useState(true)

  return (
    <>
      <button onClick={() => setShow(prev => !prev)}>
        Toggle Counter
      </button>

      {show && <Counter />}
    </>
  )
}

function Counter() {
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Timer running...")
    }, 1000)

    return () => {
      console.log("Cleaning up...")
      clearInterval(interval)
    }
  }, [])

  return <h1>Counter Mounted</h1>
}

export default App