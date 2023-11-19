import timeFormat from "lib/timeFormat";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function LetterItem({
  id,
  memberName,
  nickname,
  content,
  createdAt,
  updatedAt,
}) {
  const navigate = useNavigate();

  const handleClickLetter = () => {
    navigate("/letters/" + id);
  };

  return (
    <li onClick={handleClickLetter}>
      <StyledLetterItemWrapper>
        <StyledLetterItemInfo>
          <span>작성자: {nickname}</span>
          <span>For: {memberName}</span>
          <span>작성일: {timeFormat(createdAt)}</span>
          <span>수정일: {timeFormat(updatedAt)}</span>
          <span>{content}</span>
        </StyledLetterItemInfo>
      </StyledLetterItemWrapper>
    </li>
  );
}

const StyledLetterItemWrapper = styled.div`
  width: 100%;
  padding: 1.5rem;
  display: flex;
  flex-direction: row;

  color: white;

  border: 1px solid white;
  gap: 1rem;

  div:first-child {
    flex: 0.2;
  }
`;

const StyledLetterItemInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.8rem;
  overflow: hidden;

  span:last-child {
    padding: 0.5rem;
    background-color: rgb(50, 50, 50);
    border-radius: 0.5rem;

    overflow: hidden;
    text-overflow: ellipsis;
    text-wrap: nowrap;
  }
`;
