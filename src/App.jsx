import { ThemeProvider } from "styled-components";
import { theme } from "./styles/themes";
import { GlobalStyles } from "./styles/GlobalStyles";
import "./i18n";

import { I18nextProvider, useTranslation } from "react-i18next";
import CustomNavbar from "./components/ui/navbar/CustomNavbar";
import Home from "./pages/home/Home";
import { Route, Routes } from "react-router-dom";
import Press from "./pages/press/Press";
import OurBlog from "./pages/ourBlog/OurBlog";
import Blog from "./components/ourBlogComponents/blog/Blog";
import Detection from "./pages/Detection/DetectionPage";
import Footer from "./components/ui/footer/Footer";
import Privacy from "./pages/privacy/Privacy";
import Terms from "./pages/terms/Terms";
import Instructions from "./pages/instructions/Instructions";
import JoinUs from "./pages/joinUs/JoinUs";
import About from "./pages/about/About";
import FirstAid from "./pages/firstAid/FirstAid";
import { useEffect } from "react";
import Loader from "./components/ui/Loader";
import { useSelector } from "react-redux";

function App() {
  // const lang = useSelector((state) => state.lang.language)
  const { i18n } = useTranslation();
  useEffect(() => {
    document.documentElement.setAttribute("lang", i18n.language);
  }, [i18n.language]);

  // const { i18n: i18nextInstance } = useTranslation()
  // const theme = useSelector((state) => state.theme);
  const direction = i18n.language === "ar" ? "rtl" : "ltr";
  const showLoader = useSelector((state) => state.loader.isLoading);

  return (
    <>
      <I18nextProvider i18n={i18n} />
      <div dir={direction}>
        <ThemeProvider theme={{ ...theme, lang: i18n.language }}>
          <CustomNavbar />
          <GlobalStyles />
          {showLoader && <Loader />}
          <Routes>
            <Route path="/" index element={<Home />} />
            <Route path="/press" element={<Press />} />
            <Route path="/blog" element={<OurBlog />} />
            <Route path="/blog/:id" element={<Blog />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/instructions" element={<Instructions />} />
            <Route path="/join" element={<JoinUs />} />
            <Route path="/about" element={<About />} />
            <Route path="/aid" element={<FirstAid />} />
          </Routes>
          <Footer />
        </ThemeProvider>
      </div>
    </>
  );
}

export default App;
