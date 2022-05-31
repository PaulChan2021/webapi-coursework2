import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

export const login = (formData) => API.post("/users/login", formData);
export const signUp = (formData) => API.post("/users/signup", formData);

export const addDog = (dogData) => API.post("/dog", dogData);