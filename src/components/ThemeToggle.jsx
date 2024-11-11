import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <button
      onClick={toggleTheme}
      className="menu-btn flex items-center justify-center"
    >
      <span className="material-symbols-rounded cursor-pointer w-32 h-32 overflow-auto">
        {theme === "light" ? "dark_mode" : "light_mode"}
      </span>
    </button>
  );
};

export default ThemeToggle;
