"use client";
import { Input } from "@/components/Input";
import { SelectCity } from "@/components/SelectCity";
import { CityProps } from "@/services/getCityByNameService";
import axios from "axios";
import Image from "next/image";
import { useState } from "react";

export default function Page() {
  function handleSelected(city: CityProps) {
    localStorage.setItem("@typeweather:city", JSON.stringify(city));
  }

  return (
    <div className="w-full h-screen bg-[#13131a]">
      <div className="py-8 flex justify-center">
        <Image src="/logo.png" width={186} height={32} quality={100} alt={""} />
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
        <SelectCity onSelect={handleSelected} />
      </div>
    </div>
  );
}
