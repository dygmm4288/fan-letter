import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "./Detail";
import Home from "./Home";

export default function Router({ memberLetterList, setMemberLetterList }) {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <Home
              memberLetterList={memberLetterList}
              setMemberLetterList={setMemberLetterList}
            />
          }
        />
        <Route
          path='/detail/:member/:id'
          element={<Detail memberLetterList={memberLetterList} />}
        />
      </Routes>
    </BrowserRouter>
  );
}
