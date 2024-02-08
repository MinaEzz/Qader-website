import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Footer, Navbar } from "./components";
import { HomePage } from "./pages";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
