import { ForecastWeatherType, IForecast } from "../types";
import tw from "twin.macro";
import { FiWind } from "react-icons/fi";
import { TbTemperatureCelsius, TbWindsock } from "react-icons/tb";
import { WiRaindrop } from "react-icons/wi";
const Container = tw.div`w-full max-w-md rounded-xl bg-gradient-to-r from-sky-400 to-sky-200 m-4 p-6`;
const Title = tw.h1`text-6xl font-bold`;

const ForecastItem = ({ main, weather, wind, dt_txt }: ForecastWeatherType) => {
  return (
    <Container>
      <div tw={"flex flex-col-reverse gap-2 justify-between items-center"}>
        <div>
          <div tw="flex gap-4 items-center my-2 ml-4">
            <span tw="text-2xl font-semibold">{weather[0].main}</span>
            <h2 tw="text-2xl font-semibold flex gap-1 items-start">
              {main.temp.toFixed(0)} <TbTemperatureCelsius tw="w-4" />
            </h2>
          </div>
          <div tw="grid grid-cols-2 ml-4 mt-2">
            <div tw="flex gap-1 justify-start items-center">
              <FiWind size={20} />
              <h2 tw="text-2xl font-semibold flex gap-1 items-start">
                {main.feels_like.toFixed(0)} <TbTemperatureCelsius tw="w-4" />
              </h2>
            </div>
            <div tw="flex gap-1 justify-start items-center">
              <WiRaindrop size={20} />
              <h2 tw="text-2xl font-semibold">
                {main.humidity.toFixed(0)}
                <span tw="text-sm">%</span>
              </h2>
            </div>
            <div tw="flex gap-1 justify-start items-center">
              <TbWindsock size={20} />
              <h2 tw="text-2xl font-semibold">
                {wind.speed.toFixed(0)} <span tw="text-sm">MPH</span>
              </h2>
            </div>
          </div>
        </div>
        <div tw="w-full flex flex-col justify-center items-center">
          <p>{dt_txt.split(" ")[0]}</p>
          <p>{dt_txt.split(" ")[1]}</p>
          <img
            tw="w-full"
            src={`http://openweathermap.org/img/wn/${weather?.[0].icon}@4x.png`}
          />
        </div>
      </div>
    </Container>
  );
};
export default ForecastItem;
