import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

export const login = (formData) => API.get("/auth/login", formData);
export const signUp = (formData) => API.get("/auth/register", formData);
