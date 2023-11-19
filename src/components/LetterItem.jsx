import timeFormat from "lib/timeFormat";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Avatar from "./Avatar";

export default function LetterItem({
  id,
  createdAt,
  nickname,
  content,
  avatar,
}) {
  const navigate = useNavigate();
  const handleClickLetter = () => {
    navigate("/letters/" + id);
  };
  console.log(timeFormat(createdAt));
  return (
    <li onClick={handleClickLetter}>
      <StyledLetterItemWrapper>
        <Avatar src={avatar} alt={nickname + "user avatar profile"} />
        <StyledLetterItemInfo>
          <span>{nickname}</span>
          <span>{timeFormat(createdAt)}</span>
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
