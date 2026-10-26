import { BrowserRouter as Router, Routes, Route, Outlet, useLocation } from "react-router-dom";
import ParticlesBackground from "./components/ParticlesBackground";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import TalksPage from "./pages/TalksPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";

import SEO from "./components/SEO";

// Layout for pages that need Header and Footer
const MainLayout = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer isHome={isHome} />
    </>
  );
};

function App() {
  return (
    <Router>
      <SEO />
      <div className="App">
        {/* Particles background is always present */}
        <ParticlesBackground />

        <Routes>
          {/* Routes with Header and Footer */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/talks" element={<TalksPage />} />
            <Route path="/ponencias" element={<TalksPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Route>

          {/* 404 Route without Header and Footer */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
