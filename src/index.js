import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Footer from "./components/ui/footer/Footer";

// createRoot(document.getElementById("root")).render(
//   <BrowserRouter>
//     <StrictMode>
//       <Provider store={store}>
//         <App />
//       </Provider>
//     </StrictMode>
//   </BrowserRouter>
// );

fetch("/config.json")
  .then((res) => res.json())
  .then((config) => {
    window.appConfig = config;
    createRoot(document.getElementById("root")).render(
      <BrowserRouter>
        <StrictMode>
          <Provider store={store}>
            <App />
          </Provider>
        </StrictMode>
      </BrowserRouter>
    );
  });
