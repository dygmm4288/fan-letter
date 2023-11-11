import Router from "pages/Router";
import { createContext, useEffect, useState } from "react";

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
export const memberNameToKorean = (member) => memberKoreanMap[member];
export const memberToEng = (member) => memberEnglishMap[member];
const FAN_LETTER_KEY = "fan-letter";
export const MemberLetterListContext = createContext(null);
export const SelectedMemberContext = createContext(null);

function App() {
  const [memberLetterList, setMemberLetterList] = useState([]);
  const [selectedMember, setSelectedMember] = useState(KARINA);

  useEffect(() => {
    const localStorageData =
      JSON.parse(localStorage.getItem(FAN_LETTER_KEY)) || [];
    if (localStorageData.length === 0) {
      fetch("fakeData.json")
        .then(async (result) => {
          result = await result.json();
          setMemberLetterList(result);
        })
        .catch((e) => {
          alert("정보를 불러올 수 없습니다.");
          console.error(e);
        });
      return;
    }
    setMemberLetterList(localStorageData);
  }, []);

  useEffect(() => {
    localStorage.setItem(FAN_LETTER_KEY, JSON.stringify(memberLetterList));
  }, [memberLetterList]);

  return (
    <MemberLetterListContext.Provider
      value={{
        memberLetterList: toMap(memberLetterList),
        setMemberLetterList,
      }}>
      <SelectedMemberContext.Provider
        value={{ selectedMember, setSelectedMember }}>
        <Router
          memberLetterList={toMap(memberLetterList)}
          setMemberLetterList={setMemberLetterList}
        />
      </SelectedMemberContext.Provider>
    </MemberLetterListContext.Provider>
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
