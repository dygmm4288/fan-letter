import { SelectedMemberContext } from "App";
import Header from "components/Header";
import LetterForm from "components/LetterForm";
import LetterList from "components/LetterList";
import { KARINA, memberList } from "lib/member";
import { createMemberLetter } from "modules/memberLetters";
import { useContext, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { v4 as uuid } from "uuid";
import defaultAvatar from "../assets/img/default-avatar.png";

// * 페이지와 컨테이너의 역할 동시에 수행

export default function Home() {
  const { selectedMember, setSelectedMember } = useContext(
    SelectedMemberContext,
  );
  const dispatch = useDispatch();

  const [formState, setFormState] = useState({
    nickname: "",
    content: "",
    selected: KARINA,
  });

  const navigate = useNavigate();
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
    <StyledHome>
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
      <LetterList handleNavigate={handleNavigate} />
    </StyledHome>
  );
}

const StyledHome = styled.div`
  width: 100vw;

  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
