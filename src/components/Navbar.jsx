import { NavLink } from "react-router-dom";

function Navbar() {
  const linkClass = ({ isActive }) =>
    isActive
      ? "rounded-xl bg-pink-600 px-4 py-2 font-semibold text-white"
      : "rounded-xl bg-white px-4 py-2 font-semibold text-slate-700 hover:bg-pink-50 hover:text-pink-600";

  return (
    <nav className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-wrap gap-3 px-6 py-4">
        <NavLink to="/" className={linkClass}>
          React
        </NavLink>

        <NavLink to="/redux" className={linkClass}>
          Redux
        </NavLink>

        <NavLink to="/tanstack-query" className={linkClass}>
          TanStack Query
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
// bir kaç konu var react, redux, tanstack gibi bu sebeple bunların ayrılması gerekiyordu bende navbar ekledim bşr de sayfalar arası geçiş için react-router-dom import ettim//