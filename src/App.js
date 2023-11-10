import Router from "pages/Router";
import { useEffect, useState } from "react";

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
const FAN_LETTER_KEY = "fan-letter";
function App() {
  const [memberLetterList, setMemberLetterList] = useState([]);

  useEffect(() => {
    // ! fake data localStorage에 적용 완료
    /* fetch("fakeData.json")
      .then(async (result) => {
        result = await result.json();

        const localStorageData =
          JSON.parse(localStorage.getItem(FAN_LETTER_KEY)) || [];
        setMemberLetterList(result.concat(localStorageData));
      })
      .catch((e) => {
        alert("정보를 불러올 수 없습니다.");
        console.error(e);
      }); */
    const localStorageData =
      JSON.parse(localStorage.getItem(FAN_LETTER_KEY)) || [];
    setMemberLetterList(localStorageData);
  }, []);

  useEffect(() => {
    localStorage.setItem(FAN_LETTER_KEY, JSON.stringify(memberLetterList));
  }, [memberLetterList]);

  return (
    <Router
      memberLetterList={toMap(memberLetterList)}
      setMemberLetterList={setMemberLetterList}
    />
  );
}

function toMap(letters) {
  const mapMember = memberList.reduce((a, c) => {
    a[c] = [];
    return a;
  }, {});
  letters.forEach((letter) => {
    mapMember[letter.writedTo].push(letter);
  });
  return mapMember;
}

export default App;
