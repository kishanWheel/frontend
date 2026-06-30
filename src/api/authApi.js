import api from "./config";

export const signup = (data) => api.post("/api/auth/signup", data);
export const login = (data) => api.post("/api/auth/login", data);
