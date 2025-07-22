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
import BlogList from "./pages/ourBlog/BlogList";
import SingleBlog from "./pages/ourBlog/SingleBlog";
import MonthYearBlogs from "./pages/ourBlog/MonthYearBlogs";

function App() {
  // const lang = useSelector((state) => state.lang.language)
  const { i18n } = useTranslation();
  useEffect(() => {
    document.documentElement.setAttribute("lang", i18n.language);
  }, [i18n.language]);

  const direction = i18n.language === "ar" ? "rtl" : "ltr";
  const showLoader = useSelector((state) => state.loader.isLoading);
  // useEffect(() => {
  //   axios
  //     .post("https://toxiqr.pythonanywhere.com/api/joinus", {
  //       email: "mm@m.com",
  //       name: "mm",
  //       specialist: "mm",
  //       country: "mm",
  //       date: "2025-07-18",
  //     })
  //     .then((res) => console.log(res.data))
  //     .catch((err) => console.log(err.response.data));
  // }, []);
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
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/instructions" element={<Instructions />} />
            <Route path="/join" element={<JoinUs />} />
            <Route path="/about" element={<About />} />
            <Route path="/aid" element={<FirstAid />} />

            <Route path="/blog" element={<OurBlog />}>
              {/* Index = show all/searchable blogs */}
              <Route index element={<BlogList />} />
              {/* /blog/5 → single post */}
              <Route path=":id" element={<SingleBlog />} />
              {/* /blog/7/2023 → archives by month/year */}
              <Route path=":month/:year" element={<MonthYearBlogs />} />
            </Route>
          </Routes>
          {!showLoader && <Footer />}
        </ThemeProvider>
      </div>
    </>
  );
}

export default App;
