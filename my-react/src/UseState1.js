import React, { useState } from 'react'; 

function UseState1() {
  const [count, setCount] = useState(0); 

  const increment = () => {
 
    setCount(count + 1); 
  };

  return (
    <div> 
      <p>Count: {count}</p> 
      <button onClick={increment}>Increment</button> 
    </div>
  );
}

export default UseState1;