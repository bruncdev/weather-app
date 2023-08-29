import { useEffect, useState } from "react";
import { Input } from "../Input";
import {
  getCityByNameService,
  CityProps,
} from "@/services/getCityByNameService";

interface Props {
  onSelect: (item: CityProps) => void;
}

export function SelectCity({ onSelect }: Props) {
  const [city, setCity] = useState<CityProps[]>([]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function getCities(name: string) {
    setIsLoading(true);

    const response = await getCityByNameService(name);

    setCity(response);

    console.log(response);

    setIsLoading(false);
  }

  useEffect(() => {
    if (search.trim().length === 0) {
      return;
    }

    const debounce = setTimeout(() => getCities(search), 500);
    return () => clearInterval(debounce);
  }, [search]);

  return (
    <div className="w-full flex justify-center items-center flex-col">
      <Input
        isLoading={isLoading}
        placeholder="Buscar local"
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="w-504 rounded-lg overflow-hidden mt-2 flex justify-center items-center flex-col">
        {city.length > 0 &&
          city.map((item) => (
            <button
              className="w-full border-none bg-gray-700 cursor-pointer hover:bg-gray-800"
              type="button"
              key={item.id}
              onClick={() => onSelect(item)}
            >
              <p className="font-normal text-gray-100 py-4 px-6 text-left border-b border-b-gray-900">
                {item.name}
              </p>
            </button>
          ))}
      </div>
    </div>
  );
}
