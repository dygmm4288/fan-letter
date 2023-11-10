import { memberKoreanMap } from "App";
import { alter } from "lib/alter";
import styled from "styled-components";
import Button from "./Button";

export default function LetterDetailWrapper({ letters }) {
  const ifEmptyLetterThan = alter(() => !letters);

  return (
    <div>
      {ifEmptyLetterThan(<EmptyLetterDetail />, <LetterDetail {...letters} />)}
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
const LetterDetail = ({ writeTo, content, nickname, createdAt, avatar }) => {
  return (
    <StyledDetail>
      <StyledDetailHeader>
        <img src={avatar} alt={nickname + "profile image"} />
        <span>{nickname}</span>
        <span>{createdAt}</span>
      </StyledDetailHeader>
      <span>To : {memberKoreanMap[writeTo]}</span>
      <StyledContent>{content}</StyledContent>
      <Button>수정</Button>
      <Button>삭제</Button>
    </StyledDetail>
  );
};

const StyledDetail = styled.div``;
const StyledDetailHeader = styled.div``;
const StyledContent = styled.p``;
