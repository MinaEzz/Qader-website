import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header, Footer, Navbar } from "./components";
import { HomePage, AboutPage } from "./pages";

const App = () => {
  return (
    <main className="bg-neutral-100 relative">
      <Router>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        <Footer />
      </Router>
    </main>
  );
};

export default App;
