import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import { useTranslation } from "react-i18next";
import Footer from "./components/Footer/Footer";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const { i18n } = useTranslation();

  useEffect(() => {
    // حفظ الإعدادات في localStorage
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div
      data-theme={theme}
      dir={i18n.language === "ar" ? "rtl" : "ltr"}
      className='bg-white dark:bg-gray-800'>
      <Navbar setTheme={setTheme} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
