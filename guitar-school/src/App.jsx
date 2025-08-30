import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Lessons from "./pages/Lessons";
import LessonDetail from "./pages/LessonDetail";
import Theory from "./pages/Theory";
import Practice from "./pages/Practice";

function App() {
  return (
    <Router>
      <Header />
      <main style={{ padding: "20px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lessons" element={<Lessons />} />
          <Route path="/lessons/:id" element={<LessonDetail />} />
          <Route path="/theory" element={<Theory />} />
          <Route path="/practice" element={<Practice />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
