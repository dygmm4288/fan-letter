import { memberKoreanMap } from "App";
import { alter } from "lib/alter";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "./Button";

export default function LetterDetailWrapper({ letters, setMemberLetterList }) {
  const ifEmptyLetterThan = alter(() => !letters);

  return (
    <div>
      {ifEmptyLetterThan(
        <EmptyLetterDetail />,
        <LetterDetail {...letters} setMemberLetterList={setMemberLetterList} />,
      )}
    </div>
  );
}

const EmptyLetterDetail = () => {
  return (
    <div>
      <h2>You've taken the wrong path.</h2>
    </div>
  );
};
const LetterDetail = ({
  writedTo,
  content,
  nickname,
  createdAt,
  avatar,
  id,
  setMemberLetterList,
}) => {
  const [isUpdate, setIsUpdate] = useState(false);
  const [contentValue, setContentValue] = useState(content);
  const contentRef = useRef(null);
  const navigate = useNavigate();

  const handleUpdateButton = () => {
    setIsUpdate(true);
  };
  const handleUpdateDoneButton = () => {
    setIsUpdate(false);
    if (contentValue === content) {
      alert("아무런 수정사항이 없습니다.");
      return;
    }
    setMemberLetterList((prev) =>
      prev.map((letter) => {
        if (letter.id === id) {
          return {
            ...letter,
            content: contentValue,
          };
        }
        return letter;
      }),
    );
  };
  const handleRemoveButton = () => {
    setMemberLetterList((prev) => prev.filter((letter) => letter.id !== id));
    navigate("/");
  };
  const handleChangeContent = (e) => {
    setContentValue(e.target.value);
  };

  const UpdateButton = () => (
    <Button handleClickEvent={handleUpdateButton}>수정</Button>
  );
  const RemoveButton = () => (
    <Button handleClickEvent={handleRemoveButton}>삭제</Button>
  );
  const UpdateDoneButton = () => (
    <Button handleClickEvent={handleUpdateDoneButton}>수정 완료</Button>
  );

  return (
    <StyledDetail>
      <StyledDetailHeader>
        <img src={avatar} alt={nickname + "profile image"} />
        <span>{nickname}</span>
        <span>{createdAt}</span>
      </StyledDetailHeader>
      <span>To : {memberKoreanMap[writedTo]}</span>
      {!isUpdate ? (
        <StyledContent ref={contentRef}>{content}</StyledContent>
      ) : (
        <StyledContentTextArea
          onChange={handleChangeContent}
          value={contentValue}
        />
      )}
      {!isUpdate ? <UpdateButton /> : <UpdateDoneButton />}
      <RemoveButton />
    </StyledDetail>
  );
};

const StyledDetail = styled.div``;
const StyledDetailHeader = styled.div``;
const StyledContent = styled.p``;
const StyledContentTextArea = styled.textarea``;
