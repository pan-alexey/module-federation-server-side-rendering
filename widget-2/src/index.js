import React from 'react';
import { useState, useContext } from 'react';

const Widget = ({propValue}) => {
  const [count, setCount] = useState(100);

  const onClick = () => {
    setCount(count => count + 1);
  }
  // const contextValue = context ? useContext(context): 'unknown';

  return (<div>
    <div>Widget 2 (remote) + client</div>
    <div>Widget useState ({count}) <button onClick={() => onClick()}>+</button></div>
    <div>Prop value ({JSON.stringify(propValue)})</div>
  </div>);
}

export default Widget;
