import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/",
  params: {
    lang: "pt_br",
    units: "metric",
    appid: "09e2efbd1327d3d8165960c9c9e83bac",
  },
});
