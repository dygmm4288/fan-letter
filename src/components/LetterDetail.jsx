import { memberNameToKorean } from "App";
import timeFormat from "lib/timeFormat";
import styled from "styled-components";
import Avatar from "./Avatar";

export default function LetterDetail({
  nickname,
  avatar,
  createdAt,
  writedTo,
  isUpdate,
  contentRef,
  content,
  handleChangeContent,
  contentValue,
  UpdateButton,
  UpdateDoneButton,
  RemoveButton,
}) {
  return (
    <StyledDetail>
      <StyledDetailHeader>
        <Avatar nickname={nickname} src={avatar} />
        <h2>{nickname}</h2>
        <span>{timeFormat(createdAt)}</span>
      </StyledDetailHeader>
      <span>To : {memberNameToKorean(writedTo)}</span>
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
}
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
