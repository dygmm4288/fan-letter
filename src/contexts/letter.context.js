import { KARINA, memberNameToKorean } from "data/member";
import { createContext, useContext, useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import defaultAvatar from "../assets/img/default-avatar.png";

const FAN_LETTER_KEY = "fan-letter";

// Context의 initialState
const initialState = {
  letters: [],
  selectedMemberName: "",
  selectMember: () => {},
  addNewLetter: ({ nickname, content }) => {},
  lettersForSelectedMember: [],
  memberNameWithKorean: "",
  letter: null,
  deleteLetter: ({ id }) => {},
  updateLetter: ({ id, content }) => {},
  getLetter: ({ id }) => {},
};
// Context 생성
export const LetterContext = createContext(initialState);
// Context의 Provider 생성
export default function LetterProvider({ children }) {
  const [letters, setLetters] = useState([]);
  const [selectedMemberName, setSelectMemberName] = useState(KARINA);

  const selectMember = (memberName) => {
    setSelectMemberName(memberName);
  };
  const addNewLetter = ({ nickname, content }) => {
    const newLetter = {
      id: uuid(),
      nickname,
      content,
      avatar: defaultAvatar,
      writedTo: selectedMemberName,
      createdAt: Date.now(),
    };
    setLetters(letters.concat(newLetter));
  };
  const deleteLetter = ({ id }) => {
    setLetters(letters.filter((letter) => letter.id === id));
  };
  const updateLetter = ({ id, content }) => {
    setLetters(
      letters.map((letter) => {
        if (letter.id === id) {
          return {
            ...letter,
            content,
          };
        }
        return letter;
      }),
    );
  };

  const lettersForSelectedMember = letters.filter(
    (letter) => letter.writedTo === selectedMemberName,
  );
  const memberNameWithKorean = memberNameToKorean[selectedMemberName];
  const getLetter = (id) => letters.find((letter) => letter.id === id);

  const value = {
    letters,
    selectedMemberName,
    selectMember,
    addNewLetter,
    lettersForSelectedMember,
    memberNameWithKorean,
    getLetter,
    deleteLetter,
    updateLetter,
  };

  useEffect(() => {
    const localStorageData =
      JSON.parse(localStorage.getItem(FAN_LETTER_KEY)) || [];
    if (localStorageData.length === 0) {
      fetch("fakeData.json")
        .then((response) => response.json())
        .then((dataOfLetter) => setLetters(dataOfLetter))
        .catch((e) => {
          alert("정보를 불러올 수 없습니다.");
          console.error(e);
        });
      return;
    }
    setLetters(localStorageData);
  }, []);

  useEffect(() => {
    localStorage.setItem(FAN_LETTER_KEY, JSON.stringify(letters));
  }, [letters]);

  return (
    <LetterContext.Provider value={value}>{children}</LetterContext.Provider>
  );
}
export const useLetter = () => useContext(LetterContext);
