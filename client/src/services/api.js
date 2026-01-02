import axios from "axios";

const API = axios.create({
  baseURL: "/api",
});

export const fetchServices = () => API.get("/services");
export const sendContact = (data) => API.post("/contact", data);
