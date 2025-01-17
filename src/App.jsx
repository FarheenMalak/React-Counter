import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="card">
      <h1>Counter App</h1>
      <button>
        Count is {count}
      </button>
      <div>
        <button 
          className="increase"
          onClick={() => {
            if (count >= 20) {
              alert('Cannot exceed this value');
            } else {
              setCount(count + 1);
            }
          }}>
          Increase
        </button>
        <button 
          className="decrease"
          onClick={() => {
            if (count <= 0) {
              alert('Cannot go below this value');
            } else {
              setCount(count - 1);
            }
          }}>
          Decrease
        </button>
      </div>
    </div>
  );
}

export default Counter;

