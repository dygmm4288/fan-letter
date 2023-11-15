import { memberKoreanMap } from "App";
import { alter } from "lib/alter";
import timeFormat from "lib/timeFormat";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Avatar from "./Avatar";
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
    if (!window.confirm("정말로 삭제하시겠습니까?")) return;
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
        <Avatar nickname={nickname} src={avatar} />
        <h2>{nickname}</h2>
        <span>{timeFormat(createdAt)}</span>
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
      <StyledButtonWrapper>
        {!isUpdate ? <UpdateButton /> : <UpdateDoneButton />}
        <RemoveButton />
      </StyledButtonWrapper>
    </StyledDetail>
  );
};

const StyledDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: white;
  width: 800px;
  min-height: 500px;
  background-color: gray;
  padding: 1rem;

  & > span {
    font-size: 1.5rem;
    font-weight: bold;
  }
`;
const StyledDetailHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  h2 {
    flex: 1;
    font-size: 1.5rem;
    font-weight: bold;
  }
`;
const StyledContent = styled.p`
  background-color: black;
  min-height: 250px;
  border-radius: 0.5rem;
  padding: 2rem 1rem;
  color: white;
`;
const StyledContentTextArea = styled.textarea`
  background-color: black;
  min-height: 250px;
  border-radius: 0.5rem;
  padding: 2rem 1rem;
  color: white;
`;

const StyledButtonWrapper = styled.div`
  align-self: flex-end;
  display: flex;
  gap: 0.5rem;
  * {
    font-size: 1.5rem;
  }
`;
