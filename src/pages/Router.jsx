import { Route, Routes } from "react-router-dom";
import Detail from "./Detail";
import Home from "./Home";

export default function Router() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/letters/:id' element={<Detail />} />
    </Routes>
  );
}
