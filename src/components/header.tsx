import ThemeToggler from "./theme-toggler.tsx";

export default function Header() {
  return (
    <header className="header">
      <div className="header__brand">Context API Demo</div>
      <ThemeToggler />
    </header>
  );
}
