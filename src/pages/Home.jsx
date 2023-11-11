import {
  KARINA,
  MemberLetterListContext,
  memberKoreanMap,
  memberList,
} from "App";
import Header from "components/Header";
import LetterForm from "components/LetterForm";
import LetterList from "components/LetterList";
import { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { v4 as uuid } from "uuid";
import defaultAvatar from "../assets/img/default-avatar.png";

// * 페이지와 컨테이너의 역할 동시에 수행

export default function Home({ setMemberLetterList }) {
  const [selectedMember, setSelectedMember] = useState(KARINA);
  const { memberLetterList } = useContext(MemberLetterListContext);

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
    setMemberLetterList((prev) => prev.concat(newLetter));
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
        selectedMember={selectedMember}
      />
      <LetterForm
        handleEnrollLetter={handleEnrollLetter}
        members={members.current}
        handleChangeFormValue={handleChangeFormValue}
        formState={formState}
      />
      <LetterList
        memberName={memberKoreanMap[selectedMember]}
        letters={memberLetterList[selectedMember]}
        handleNavigate={handleNavigate}
      />
    </StyledHome>
  );
}

const StyledHome = styled.div`
  width: 100vw;

  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
