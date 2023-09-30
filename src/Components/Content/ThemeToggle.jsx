import { useContext } from "react";
import { AppContext } from "../Contexts/AppContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useContext(AppContext);

  const mode = theme === "light-theme" ? "dark_mode" : "light_mode";

  return (
    <button className="theme-toggle" onClick={toggleTheme}>
      <span className={`material-symbols-outlined ${mode}-symbol`}>{mode}</span>
    </button>
  );
}
