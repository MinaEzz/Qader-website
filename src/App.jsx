import { useEffect, useState } from "react";
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
  SearchPage,
} from "./pages";

const App = () => {
  const [isDark, setIsDark] = useState(false);
  // theme vars
  const userTheme = localStorage.getItem("theme");
  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
  // initial theme check
  const themeCheck = () => {
    if (userTheme === "dark" || (!userTheme && systemTheme)) {
      document.documentElement.classList.add;
      ("dark");
      setIsDark(true);
      return;
    }
  };
  // manual theme switch
  const themeSwitch = () => {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
      return;
    }
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
    setIsDark(true);
  };
  useEffect(() => {
    themeCheck();
  }, []);

  return (
    <main className="bg-neutral-100 dark:bg-slate-950 overflow-clip relative">
      <Router>
        <Header
          isDark={isDark}
          setIsDark={setIsDark}
          userTheme={userTheme}
          systemTheme={systemTheme}
          themeSwitch={themeSwitch}
        />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route
            path="/products/:categoryID/:categoryTITLE"
            element={<ProductsPage />}
          />
          <Route path="/products/:productID" element={<ProductDetailsPage />} />
          <Route path="/search/:searchTerm" element={<SearchPage />} />
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
