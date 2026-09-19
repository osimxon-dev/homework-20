import { useTheme } from "../../context/ThemeContext";

function ThemeButton() {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <button
      className={`rounded border border-gray-400 px-3 py-2 ${darkMode ? "hover:bg-gray-700" : "hover:bg-gray-200"}`}
      onClick={toggleTheme}
    >
      {darkMode ? "Light" : "Dark"}
    </button>
  );
}

export default ThemeButton;
