import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "./Detail";
import Home from "./Home";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/detail/:member/:id' element={<Detail />} />
        <Route path='*' element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}
