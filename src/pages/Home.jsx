import Header from "components/Header";
import LetterForm from "components/LetterForm";
import { useRef, useState } from "react";

// * 페이지와 컨테이너의 역할 동시에 수행

export default function Home() {
  const [selectedMember, setSelectedMember] = useState("카리나");
  const [formState, setFormState] = useState({
    nickname: "",
    content: "",
    selected: "카리나",
  });

  const members = useRef(["카리나", "윈터", "닝닝", "지젤"]);

  const handleSelectMember = (member) => () => {
    setSelectedMember(member);
  };
  const handleChangeFormValue = (key) => (value) => {
    setFormState((prev) => ({
      ...prev,
      key: value,
    }));
  };

  return (
    <>
      <Header
        handleSelectMember={handleSelectMember}
        members={members.current}
      />
      <LetterForm
        members={members.current}
        handleChangeFormValue={handleChangeFormValue}
        formState={formState}
      />
      {/* <LetterList /> */}
    </>
  );
}
