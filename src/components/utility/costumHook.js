import { useState, useEffect } from 'react';

const useButton = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // var click = `You clicked ${count}`;
  }, [count]);

  return [count, setCount];
}
export default useButton