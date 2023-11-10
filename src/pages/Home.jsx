import Header from "components/Header";
import LetterForm from "components/LetterForm";
import LetterList from "components/LetterList";
import { useRef, useState } from "react";

// * 페이지와 컨테이너의 역할 동시에 수행
const memberList = ["카리나", "윈터", "닝닝", "지젤"];
export default function Home() {
  const [selectedMember, setSelectedMember] = useState("카리나");
  const [memberLetterList, setMemberLetterList] = useState(
    memberList.reduce((a, c) => {
      a[c] = [];
      return a;
    }, {}),
  );
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
      <LetterList letters={memberLetterList[selectedMember]} />
    </>
  );
}
