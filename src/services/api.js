import axios from "axios";
import { domain } from "../store/domain";

const api = axios.create({
  baseURL: domain,
  headers: { "Content-Type": "application/json" },
});

api.interceptors.request.use((config) => {
  const stored = JSON.parse(
    localStorage.getItem("auth-token") || sessionStorage.getItem("auth-token") || "null"
  );
  if (stored?.state?.token) {
    config.headers.Authorization = `Bearer ${stored.state.token}`;
  }
  return config;
});

api.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response?.status === 401) {
      localStorage.removeItem("auth-token");
      sessionStorage.removeItem("auth-token");
      window.location.href = "/login";
    }
    return Promise.reject(err);
  }
);

export default api;
