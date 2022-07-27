import React from 'react';
import { createContext, useState } from 'react';

export const AppContext = createContext();

const App = ({children}) => {
  const [value, setValue] = useState('appContext');

  const toggle = () => {
    setValue(value => value - '+')
  }
  return <div>
    <AppContext.Provider value={{value, toggle}}>
      <h1>Host Server <button onClick={toggle}>setContext</button></h1>
      <div>{ children }</div>
    </AppContext.Provider>
  </div>
};

export default App;
