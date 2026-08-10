import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import ReactPage from "./pages/ReactPage";
import ReduxPage from "./pages/ReduxPage";
import TanStackQueryPage from "./pages/TanStackQueryPage";

function App() {
  return (
    <div className="min-h-screen bg-slate-100">
      <Header />
      <Navbar />

      <main className="mx-auto max-w-6xl px-6 py-10">
        <Routes>
          <Route path="/" element={<ReactPage />} />
          <Route path="/redux" element={<ReduxPage />} />
          <Route path="/tanstack-query" element={<TanStackQueryPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;