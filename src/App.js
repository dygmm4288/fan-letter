import Router from "pages/Router";
import { useState } from "react";

export const KARINA = "karina";
export const WINTER = "winter";
export const NINGNING = "ningning";
export const GISELLE = "giselee";
export const memberList = [KARINA, WINTER, NINGNING, GISELLE];
export const memberKoreanMap = {
  [KARINA]: "카리나",
  [WINTER]: "윈터",
  [GISELLE]: "지젤",
  [NINGNING]: "닝닝",
};
export const memberEnglishMap = {
  카리나: KARINA,
  윈터: WINTER,
  지젤: GISELLE,
  닝닝: NINGNING,
};
export const memberToEng = (member) => memberEnglishMap[member];
function App() {
  const [memberLetterList, setMemberLetterList] = useState(
    memberList.reduce((a, c) => {
      a[c] = [];
      return a;
    }, {}),
  );

  return <Router memberLetterList={memberLetterList} />;
}

export default App;
