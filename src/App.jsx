import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Newsletter from "./pages/Newsletter";
import Footer from "./components/Footer";
import BlogDetail from "./components/blog/BlogDetail";

function App() {
  return (
    <Router>
      <div className="px-6 lg:px-32">
        <header>
          <Navbar />
        </header>
        <main className="pt-4 pb-10">
          <Routes>
            <Route path="/" element={<Navigate to="/blog" replace />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/*" element={<BlogDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/newsletter" element={<Newsletter />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
