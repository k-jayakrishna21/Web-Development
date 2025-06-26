import { useState } from 'react';
import "./App.css"


function App() {
  const [count,setCount] = useState(0);

  function increMent() {
    setCount(count + 1 )
  }
  
  function decreMent() {
    setCount(count - 1)
  }

  function reset() {
    setCount(0);
  }
  return (
    <div id="main">
        <div id="first">
         <h1>{count}</h1>
        </div>
       <div id="box">
       <button onClick={decreMent} id="d">-</button>
       <button onClick={increMent} id="i">+</button>
       </div>
    <button onClick={reset} id="r">Reset</button>
    </div>
  );
}

export default App;
