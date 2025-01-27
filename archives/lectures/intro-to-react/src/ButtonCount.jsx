import React, { useState } from "react";

 export default function ButtonCount({intitialValue}) {
     // biggest idea in React is: state variables!
     const [count, setCount] = useState(intitialValue);

     function addOne() {
         setCount(count + 1);
     }

     function resetCounter() {
         setCount(intitialValue);
     }

     return (
         <div>
             <button onClick={addOne}>You have clicked {count} times</button>
             <button onClick={resetCounter}>reset</button>
         </div>
     );
 }