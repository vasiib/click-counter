import './App.css';
import { useState } from 'react';

function App() {
  const [count,setCount] = useState(0);
  const [error,setError] = useState(false);

  return (
    <div data-test="component-app">
      <h1 data-test="counter-display">
        The counter is currently&nbsp;
        <span data-test="count">{count}</span>
      </h1>
      <br/>
      <span data-test="error-message" className={`error ${error ? '' : 'hidden'}`}>
        Counter can't go less than zero
      </span>
      <br/>
      <button 
        data-test="increment-button"
        onClick={()=>{
          if(error) setError(false);
          setCount(count+1); 
        }}>
        Increment
      </button>
      <br/>
      <button 
        data-test="decrement-button"
        onClick={()=>{
          if(count <=0){
            setError(true)
          }else{
            setCount(count-1)
          }
        }
        }>
        Decrement
      </button>
    </div>
  );
}

export default App;
