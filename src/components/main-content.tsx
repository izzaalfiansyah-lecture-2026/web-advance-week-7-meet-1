import { useTheme } from "../context/theme-context.tsx";

const CONTEXT_BENEFITS = [
  "No prop drilling",
  "Global state management",
  "Clean component structure",
  "Easy to maintain",
];

export default function MainContent() {
  const { theme, isDark, isLight } = useTheme();

  return (
    <main className="main-content">
      <h1 className="main-content__title">Context API Demonstration</h1>

      <section className="main-content__section">
        <h2 className="main-content__subtitle">Theme Information</h2>
        <ul className="theme-info">
          <li>
            Current Theme: <strong>{theme}</strong>
          </li>
          <li>
            Is Dark Mode: <strong>{isDark ? "Yes" : "No"}</strong>
          </li>
          <li>
            Is Light Mode: <strong>{isLight ? "Yes" : "No"}</strong>
          </li>
        </ul>
      </section>

      <section className="main-content__section">
        <h2 className="main-content__subtitle">Benefits of Context API</h2>
        <ul className="benefits-list">
          {CONTEXT_BENEFITS.map((benefit) => (
            <li key={benefit}>✅ {benefit}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}
