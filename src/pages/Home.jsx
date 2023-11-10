import { memberList } from "App";
import Header from "components/Header";
import LetterForm from "components/LetterForm";
import LetterList from "components/LetterList";
import { useRef, useState } from "react";

// * 페이지와 컨테이너의 역할 동시에 수행

export default function Home({ memberLetterList }) {
  const [selectedMember, setSelectedMember] = useState("카리나");

  const [formState, setFormState] = useState({
    nickname: "",
    content: "",
    selected: "카리나",
  });

  const members = useRef(memberList);

  const handleSelectMember = (member) => () => {
    setSelectedMember(member);
  };
  const handleChangeFormValue = (key) => (value) => {
    setFormState((prev) => ({
      ...prev,
      [key]: value,
    }));
  };
  const handleEnrollLetter = (e) => {
    e.preventDefault();
    console.log(formState);
  };

  return (
    <>
      <Header
        handleSelectMember={handleSelectMember}
        members={members.current}
      />
      <LetterForm
        handleEnrollLetter={handleEnrollLetter}
        members={members.current}
        handleChangeFormValue={handleChangeFormValue}
        formState={formState}
      />
      <LetterList
        letters={memberLetterList[selectedMember]}
        selectedMember={selectedMember}
      />
    </>
  );
}
