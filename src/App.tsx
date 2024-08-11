import { Route, Routes } from "react-router-dom";
import { appRoutes } from "./lib/appRoutes";
import MainPage from "./pages/MainPage/MainPage";
import NotFoundPage from "./pages/NotFound/NotFound";

export default function App() {
  return (
    <Routes>
      <Route path={appRoutes.MAIN} element={<MainPage />} />
      <Route path={appRoutes.NOT_FOUND} element={<NotFoundPage />} />
    </Routes>
  );
}
