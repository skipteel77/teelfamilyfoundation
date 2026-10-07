import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import MissionPage from "./pages/MissionPage";
import HistoryPage from "./pages/HistoryPage";

export default function App() {
  return (
    <div className="site-shell">
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mission" element={<MissionPage />} />
          <Route path="/history" element={<HistoryPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
