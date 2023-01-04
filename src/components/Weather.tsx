import { WeatherType } from "../types";
import tw from "twin.macro";
import { FiWind } from "react-icons/fi";
import { TbTemperatureCelsius, TbWindsock } from "react-icons/tb";
import { WiRaindrop } from "react-icons/wi";
const Container = tw.div`w-full max-w-md rounded-xl h-full bg-gradient-to-r from-sky-400 to-sky-200 m-4 p-6`;
const Title = tw.h1`text-6xl font-bold`;

const Weather = ({ name, main, weather, wind }: WeatherType) => {
  return (
    <Container>
      <div tw={"flex gap-2 justify-between items-center"}>
        <div>
          <div tw="flex justify-center items-center gap-2">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                tw={"w-14"}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
            </span>
            <Title>{name}</Title>{" "}
          </div>
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
        <div className="w-full">
          <img
            tw="w-full"
            src={`http://openweathermap.org/img/wn/${weather?.[0].icon}@4x.png`}
          />
        </div>
      </div>
    </Container>
  );
};

export default Weather;
