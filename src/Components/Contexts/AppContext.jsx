import { createContext, useState, useEffect } from "react";

const AppContext = createContext();

function AppProvider({ children }) {
  const [users, setUsers] = useState([]);
  const [theme, setTheme] = useState("dark-theme");

  async function getUsers() {
    const response = await fetch("/src/data/MOCK_DATA.json");
    const data = await response.json();
    setUsers(data);
  }

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
    users,
    theme,
    setTheme,
    toggleTheme,
    getUsers,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export { AppContext, AppProvider };
