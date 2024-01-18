import React, { useEffect, useState } from 'react'

const TestScreen = () => {
//State Vaiables, updater function that updates the state. can only be two variables in state array. 
//useState() => put default value
   const [count, setCount] = useState(0);

    useEffect( () => {
        console.log("The Count is", count);
        return () => {
            console.log("I am being cleaned Up")
        };
    }, [count]);
 
    return (
    <div>
      <h1>Test Screen</h1>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  )
}

export default TestScreen
