import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header, Footer, Navbar } from "./components";
import { HomePage, ProductsPage, AboutPage } from "./pages";

const App = () => {
  return (
    <main className="bg-neutral-100 overflow-clip relative">
      <Router>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/products/:categoryURL/:categoryTITLE"
            element={<ProductsPage />}
          />
          <Route path="/about-us" element={<AboutPage />} />
        </Routes>
        <Footer />
      </Router>
    </main>
  );
};

export default App;
