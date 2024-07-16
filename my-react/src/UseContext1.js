// UseContext1.js

import React, { createContext, useContext } from 'react';

// Create the context
const AppContext = createContext();

// DisplayComponent function component consuming the context
function DisplayComponent() {
  const value = useContext(AppContext);
  return <div>{value}</div>;
}

// MyApp function component providing the context
function MyApp() {
  return (
    <AppContext.Provider value="Hello, Everyone">
      <DisplayComponent />
    </AppContext.Provider>
  );
}

export default function UseContext1() {
  return (
    <div>
      <MyApp />
    </div>
  );
}
