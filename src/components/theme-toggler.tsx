import { useTheme } from "../context/theme-context.tsx";

export default function ThemeToggler() {
  const { isLight, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      className="theme-toggler"
      onClick={toggleTheme}
      aria-label={isLight ? "Switch to dark mode" : "Switch to light mode"}
    >
      {isLight ? "☀️" : "🌙"}
    </button>
  );
}
