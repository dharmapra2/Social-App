import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000/" });

export const uploadImage = (formData) => API.post("post/uploadImage", formData);
export const uploadPost = (formData) => API.post("post/createPost", formData);
