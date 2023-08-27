"use client";
import { Input } from "@/components/Input";
import axios from "axios";
import { useState } from "react";

export default function Page() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=manchester&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`;

  function handleSearchWeatherApi(e: any) {
    e.preventDefault();
    setIsLoading(true);

    axios.get(url).then((response) => {
      setWeather(response.data);
      console.log(response.data);
    });
    setCity("");
    setIsLoading(false);
  }

  return (
    <div className="w-full h-screen bg-[#13131a]">
      <div className="py-8">
        <h1 className="text-center text-2xl text-gray-100 font-nunito">
          <strong className="text-blue-300">TypeWeather</strong>
        </h1>
      </div>
      <div className="mt-72">
        <p className="text-gray-200 text-center text-5xl">
          Boas vindas ao <span className="text-blue-300">TypeWeather</span>
        </p>
        <p className="text-gray-600 text-2xl mb-14 text-center mt-2">
          Escolha um local para ver a previsão do tempo
        </p>
      </div>
      <div>
        <Input isLoading={false} />
      </div>
    </div>
  );
}
