import { Route, Routes } from "react-router-dom";
import { Search } from "../../../pages/Search";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Search />} />
    </Routes>
  );
}
