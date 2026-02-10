import assets from "../assets/assets";

export default function ThemeToggleBar({ theme, toggleTheme }) {
  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition"
    >
      <img
        src={theme === "dark" ? assets.sun_icon : assets.moon_icon}
        alt="Toggle theme"
        className="w-5"
      />
    </button>
  );
}
