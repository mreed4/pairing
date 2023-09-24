import { createContext, useState } from "react";

const AppContext = createContext();

function AppProvider({ children }) {
  const value = {};

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export { AppContext, AppProvider };
