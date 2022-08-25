import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import EarlyAccess from "./pages/EarlyAccess/EarlyAccess";
function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/early-access" element={<EarlyAccess />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
