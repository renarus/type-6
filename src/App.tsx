import tw from "twin.macro";
import Weather from "./components/Weather";
import useGetData from "./hooks/useGetData";
import Apis from "./services/Apis";
import { UseQueryResult } from "react-query";
import { WeatherType } from "./types";
import Forecast from "./components/Forecast";
import Search from "./components/Search";
import { useEffect, useState } from "react";

const Container = tw.div`container font-medium w-full min-h-screen text-gray-900`;
const App = () => {
  const [search, setSearch] = useState<string>("Baku");
  const [clicked, setClicked] = useState(false);
  const { data, isLoading, isError } = useGetData({
    name: "weather",
    api: () => Apis.getWeather(search),
  }) as UseQueryResult<WeatherType>;
  useEffect(() => {
    const name = JSON.parse(localStorage.getItem("search") as string);
    name && setSearch(name);
  }, [clicked]);
  if (isLoading) return <div>Loading</div>;
  if (isError) return <div>Error</div>;
  return (
    <Container>
      <Search clicked={clicked} setClicked={setClicked} />
      <div tw="flex">
        {data && <Weather {...data} />}{" "}
        <div tw="flex w-full justify-center items-center ">
          <h1 tw="text-6xl font-bold">Daily Temprature</h1>
        </div>
      </div>
      <div>
        <Forecast search={search} />
      </div>
    </Container>
  );
};

export default App;
