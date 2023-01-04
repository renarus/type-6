import axios from "axios";
import { IForecast, WeatherType } from "../types";

const instance = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/",
  params: {
    appid: "643d0e5bc9d0580b3b3c7b42fb8f5930",
    units: "metric",
  },
});

const Apis = {
  getForecast: async (name: string): Promise<IForecast> => {
    const { data } = await instance.get("forecast", { params: { q: name } });
    return data;
  },
  getWeather: async (name: string): Promise<WeatherType> => {
    const { data } = await instance.get("weather", { params: { q: name } });
    return data;
  },
};

export default Apis;
