import useGetData from "../hooks/useGetData";
import Apis from "../services/Apis";
import { IForecast } from "../types";
import tw from "twin.macro";
import { UseQueryResult } from "react-query";
import ForecastItem from "./ForecastItem";

const Container = tw.div`w-full max-w-md rounded-xl h-full bg-gradient-to-r from-sky-400 to-sky-200 m-4 p-6`;
const Title = tw.h1`text-6xl font-bold`;

const Forecast = ({ search }: string) => {
  const { data, isLoading, isError } = useGetData({
    name: "forecast",
    api: () => Apis.getForecast(search as unknown as string),
  }) as UseQueryResult<IForecast>;

  if (isLoading) return <div>Loading</div>;
  if (isError) return <div>Error</div>;
  return (
    <div tw="grid grid-cols-5 gap-4">
      {data &&
        data.list.map((list, idx) => <ForecastItem key={idx} {...list} />)}
    </div>
  );
};

export default Forecast;
