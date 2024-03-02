import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header, Footer, Navbar } from "./components";
import {
  HomePage,
  ProductsPage,
  AboutPage,
  ContactUsPage,
  LoginPage,
  RegisterationPage,
  ProductDetailsPage,
  UserProfilePage,
  JobsPage,
  AddJobPage,
  PageNotFound,
} from "./pages";

const App = () => {
  return (
    <main className="bg-neutral-100 overflow-clip relative">
      <Router>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/products/:categoryID/:categoryTITLE"
            element={<ProductsPage />}
          />
          <Route path="/products/" element={<ProductsPage />} />
          <Route path="/products/:productID" element={<ProductDetailsPage />} />
          <Route path="/about-us" element={<AboutPage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/regist" element={<RegisterationPage />} />
          <Route path="/jobs" element={<JobsPage />} />
          <Route path="/add-job" element={<AddJobPage />} />
          <Route path="/profile" element={<UserProfilePage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </Router>
    </main>
  );
};

export default App;
