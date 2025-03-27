import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Header from "./components/header";
import Projects from "./pages/projects";
import About from "./pages/about";
import Contact from "./pages/contact";
export default function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}
