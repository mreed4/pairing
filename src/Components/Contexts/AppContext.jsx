import { createContext, useState, useEffect } from "react";

const AppContext = createContext();

function AppProvider({ children }) {
  const [theme, setTheme] = useState("dark-theme");

  (function getTheme() {
    const theme = localStorage.getItem("theme");
    if (theme) return theme;
    return "light-theme";
  })();

  function toggleTheme() {
    if (theme === "light-theme") setTheme("dark-theme");
    else setTheme("light-theme");
  }

  useEffect(() => {
    function refreshTheme() {
      localStorage.setItem("theme", theme);
    }

    refreshTheme();
  }, [theme]);

  const value = {
    theme,
    setTheme,
    toggleTheme,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export { AppContext, AppProvider };
