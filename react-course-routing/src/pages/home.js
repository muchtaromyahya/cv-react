import React, {useEffect, useState} from 'react';
import useTitle from '../utility/costumHook'

const Home = () => {
  const [count, setCount] = useTitle(0);
  const [myNumber, setMyNumber] = useState(1);
  // useEffect (() => {
  //   document.title = `You clicked ${count} times`;
  // } , [count]);
  return (
    <div>
            <h1>Welcome Home!</h1>
            <button onClick={() => setCount(count + 1)}>Click me</button>
            <button onClick={() => {
              setMyNumber(myNumber + 1);
            }}>
              Click My Number
            </button>
            <h2>{myNumber}</h2>
          </div>
  )
};

export default Home;
