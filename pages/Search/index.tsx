import Image from "next/image";
import { useNavigate } from "react-router-dom";

export function Search() {
  const navigate = useNavigate();

  //   function handleSelected(city: CityProps) {
  //     localStorage.setItem("@typewheather:city", JSON.stringify(city));
  //     navigate("/dashboard");
  //   }

  return (
    <div className="w-full h-[calc(100vh-48px)] bg-center bg-no-repeat bg-cover p-6 flex flex-col items-center">
      <Image src="/Background.png" alt="Logo" />

      <main className="flex-1 max-w-500px flex flex-col justify-center items-center">
        <h1 className="text-center text-2xl text-gray-100">
          <strong className="text-blue-300">TypeWeather</strong>
        </h1>
        <span className="text-gray-200 text-lg mb-14">
          Escolha um local para ver a previsão do tempo
        </span>
      </main>
    </div>
  );
}
