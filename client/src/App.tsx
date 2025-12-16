import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import GalleryPage from "./pages/GalleryPage";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";

export default function App() {
  return (
    <div className="min-h-screen">
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery/:category" element={<GalleryPage />} />
          <Route path="/gallery/:category/:projectId" element={<ProjectDetailPage />} />
        </Routes>
      </div>
      <Footer />
    </div>

  );
}
