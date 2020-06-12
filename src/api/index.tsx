import axios from "axios";

const BASE_URL="";
const instance = axios.create({
  baseURL: BASE_URL,
  // timeout: 1000,
  headers: { "Accept-Language": "en" },
});

export const listFeedApi = instance.get("/api/v1/offers");