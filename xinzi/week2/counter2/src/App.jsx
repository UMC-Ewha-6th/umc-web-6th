import { useState } from 'react'

function App() {
  
  const [number, setNumber] = useState(0);

  const handleIncrease = () => {
    console.log("increase가 클릭됨");
    setNumber (number + 1);
  };

  const handleDecrease = () => {
    console.log("decrease가 클릭됨");
    setNumber (number - 1);
  };

  return (
    <>
      <h2 id="number">{number}</h2>
      <div>
       <button id="increase" onClick={handleIncrease}>+1</button>
       <button id="decrease" onClick={handleDecrease}>-1</button>
     </div>
    </>
  )
}

export default App

