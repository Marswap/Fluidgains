import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import EarlyAccess from "./pages/EarlyAccess/EarlyAccess";
import GoToTop from "./pages/GoToTop/GoToTop";
import Vault from "./pages/Vault/Vault";
function App() {
  return (
    <div>
      <Navbar />
      <GoToTop />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/vault" element={<Vault />} />
          <Route exact path="/early-access" element={<EarlyAccess />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
