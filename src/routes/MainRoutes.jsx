import { BrowserRouter as Router, Routes, Route } from "react-router";
import ROUTES from "./routes";

// Import Pages

import Home from "../pages/Home";




const MainRoutes = () => {
  return (
    <Routes>
     <Route path={ROUTES.HOME} element={<Home />} />

      

    </Routes>
  );
};

export default MainRoutes;
