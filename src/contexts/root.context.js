import { createContext, useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

// Context의 initialState
const initialState = {
  allLetters: [],
  selectedMemberName: null,
  selectMember: () => {},
  addNewLetter: ({ letter, content }) => {},
  lettersForSelectedMember: [],
};

// Context를 생성
export const RootContext = createContext(initialState);

// Context의 Provider를 만든다

export function RootProvider({ children }) {
  const [letters, setLetter] = useState([]);
  const [selectedMemberName, setSelectedMemberName] = useState(null);
  const [searchParams] = useSearchParams();

  const currentMemberName = searchParams.get("memberName");

  const selectMember = (memberName) => {
    setSelectedMemberName(memberName);
  };

  const addNewLetter = ({ nickname, content }) => {
    const newLetter = {
      id: Date.now().toString(),
      nickname,
      content,
      memberName: selectedMemberName,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    };

    setLetter((prevLetters) => [...prevLetters, newLetter]);
  };

  const lettersForSelectedMember = letters.filter(
    (letter) => letter.memberName === selectedMemberName
  );

  const value = {
    allLetters: letters,
    selectedMemberName,
    selectMember,
    addNewLetter,
    lettersForSelectedMember,
  };

  useEffect(() => {
    setSelectedMemberName(currentMemberName || null);
  }, [currentMemberName]);

  return <RootContext.Provider value={value}>{children}</RootContext.Provider>;
}

export const useRoot = () => useContext(RootContext);
