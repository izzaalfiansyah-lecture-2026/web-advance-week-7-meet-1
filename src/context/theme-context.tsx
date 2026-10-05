import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type Theme = "light" | "dark";

export type ThemeContext = {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
  isLight: boolean;
  isDark: boolean;
};

export const ThemeContext = createContext({} as ThemeContext);

export function useTheme() {
  return useContext(ThemeContext);
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  function getInitialTheme() {
    try {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme == "light" || savedTheme == "dark") {
        return savedTheme;
      }
      throw new Error("Invalid theem");
    } catch (_) {
      return "light";
    }
  }

  const [theme, setTheme] = useState<Theme>(getInitialTheme());

  function toggleTheme() {
    const nextTheme = theme == "dark" ? "light" : "dark";
    setTheme(nextTheme);
  }

  useEffect(() => {
    try {
      localStorage.setItem("theme", theme);
    } catch (_) {
      //
    }

    document.documentElement.className = theme;
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        toggleTheme,
        isDark: theme == "dark",
        isLight: theme == "light",
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
