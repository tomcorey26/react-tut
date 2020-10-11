import React, { useState } from 'react';

export const StaleClosure: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const addAfterTwoSeconds = () => {
    setTimeout(() => {
      setCount(count + 1);
      console.log('In Time out', count);
    }, 2000);
  };

  const addInstant = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={addAfterTwoSeconds}>add After two seconds</button>
      <button onClick={addInstant}>Increment instantly</button>
      <h1>{count}</h1>
    </div>
  );
};
