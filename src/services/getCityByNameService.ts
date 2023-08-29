import { api } from "./api";
export interface CityProps {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
}

export interface CityAPIResponse {
  id: string;
  name: string;
  sys: {
    country?: string;
  };
  coord: {
    lat: number;
    lon: number;
  };
}

export async function getCityByNameService(name: string): Promise<CityProps[]> {
  try {
    const { data } = await api.get(`find?q=${name}`);

    const cities = data.list.map((cityData: any) => ({
      id: cityData.id,
      name: cityData.sys.country
        ? `${cityData.name}, ${cityData.sys.country}`
        : cityData.name,
      longitude: cityData.coord.lon,
      latitude: cityData.coord.lat,
    }));

    return cities;
  } catch (error) {
    console.error(error);
    return [];
  }
}
