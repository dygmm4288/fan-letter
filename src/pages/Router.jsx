import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "./Detail";
import Home from "./Home";

export default function Router({ memberLetterList }) {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={<Home memberLetterList={memberLetterList} />}
        />
        <Route
          path='/detail/:member/:id'
          element={<Detail memberLetterList={memberLetterList} />}
        />
      </Routes>
    </BrowserRouter>
  );
}
