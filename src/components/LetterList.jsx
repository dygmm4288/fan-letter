import { alter } from "lib/alter";
import styled from "styled-components";
import LetterItem from "./LetterItem";

export default function LetterList({ memberName, letters, handleNavigate }) {
  console.log(letters);
  const ifEmptyThan = alter(() => letters.length === 0);

  return (
    <ul>
      {ifEmptyThan(
        <EmptyLetter memberName={memberName} />,
        <LetterItems letters={letters} handleNavigate={handleNavigate} />,
      )}
    </ul>
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

const StyledEmptyLetter = styled.p``;
