import Header from "components/Header";
import LetterForm from "components/LetterForm";
import LetterList from "components/LetterList";
import { KARINA, memberList } from "lib/member";
import { createMemberLetter } from "modules/memberLetters";
import { selectMember, setSelectedMember } from "modules/selectedMember";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
import defaultAvatar from "../assets/img/default-avatar.png";

export default function HomeContainer() {
  const [formState, setFormState] = useState({
    nickname: "",
    content: "",
    selected: KARINA,
  });
  const selectedMember = useSelector(selectMember);
  const members = useRef(memberList);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSelectMember = (member) => () => {
    dispatch(setSelectedMember(member));
  };
  const handleChangeFormValue = (key) => (e) => {
    setFormState((prev) => ({
      ...prev,
      [key]: e.target.value,
    }));
  };
  const handleEnrollLetter = (e) => {
    e.preventDefault();
    const newLetter = {
      createdAt: new Date().toISOString(),
      nickname: formState.nickname,
      avatar: defaultAvatar,
      content: formState.content,
      writedTo: formState.selected,
      id: uuid(),
    };
    dispatch(createMemberLetter({ memberLetter: newLetter }));
    setFormState((prev) => ({
      ...prev,
      nickname: "",
      content: "",
    }));
  };
  const handleNavigate = (id) => () => {
    navigate(`/detail/${selectedMember}/${id}`);
  };

  return (
    <>
      <Header
        handleSelectMember={handleSelectMember}
        members={members.current}
      />
      <LetterForm
        members={members.current}
        formState={formState}
        handleChangeFormValue={handleChangeFormValue}
        handleEnrollLetter={handleEnrollLetter}
      />
      <LetterList handleNavigate={handleNavigate} />
    </>
  );
}
