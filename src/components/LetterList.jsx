import { alter } from "lib/alter";
import styled from "styled-components";
import LetterItem from "./LetterItem";

export default function LetterList({ memberName, letters, handleNavigate }) {
  const ifEmptyThan = alter(() => letters.length === 0);

  return (
    <StyledLetterList>
      {ifEmptyThan(
        <EmptyLetter memberName={memberName} />,
        <LetterItems letters={letters} handleNavigate={handleNavigate} />,
      )}
    </StyledLetterList>
  );
}
function LetterItems({ letters, handleNavigate }) {
  return (
    <>
      {letters.map((letter) => (
        <LetterItem
          key={"letter/" + letter.id}
          {...letter}
          handleNavigate={handleNavigate}
        />
      ))}
    </>
  );
}
function EmptyLetter({ memberName }) {
  return (
    <StyledEmptyLetter>
      {memberName}에게 남겨진 팬래터가 없습니다. 첫 번째 팬래터의 주인공이
      되주세요!
    </StyledEmptyLetter>
  );
}
const StyledLetterList = styled.ul`
  width: 512px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  border-radius: 0.5rem;

  padding: 1rem;

  background-color: black;

  gap: 1.5rem;
  li {
    width: 100%;
    transition: transform 0.2s ease-in-out;
  }
  li:hover {
    transform: scale(1.05);
  }
`;
const StyledEmptyLetter = styled.p``;
