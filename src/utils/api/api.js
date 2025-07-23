// utils/api/api.js
import axios from "axios";
import { store } from "../../store/store";
import { hideLoader, showLoader } from "../../store/slices/loaderSlice";

const API_BASE_URL = "https://toxiqr.pythonanywhere.com/api";

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: { "Content-Type": "application/json" },
});

api.interceptors.request.use((config) => {
  store.dispatch(showLoader());
  return config;
});

// api.interceptors.response.use(
//   (response) => {
//     store.dispatch(hideLoader());
//     return response;
//   },
//   (error) => {
//     store.dispatch(hideLoader());
//     return Promise.reject(error);
//   }
// );
api.interceptors.response.use(
  (response) => {
    store.dispatch(hideLoader());
    return response;
  },
  (error) => {
    store.dispatch(hideLoader());

    // فقط عند انقطاع الإنترنت
    if (!navigator.onLine) {
      alert("⚠️ لا يوجد اتصال بالإنترنت. يرجى التحقق من الشبكة.");
      return Promise.reject(new Error("Offline"));
    }

    // باقي الأخطاء تُترك للمكونات للتعامل معها
    return Promise.reject(error);
  }
);
