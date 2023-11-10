import LetterItem from "./LetterItem";

export default function LetterList({ letters, handleNavigate }) {
  letters = letters || [];
  return (
    <ul>
      {letters.map((letter) => (
        <LetterItem
          key={"letter/" + letter.id}
          {...letter}
          handleNavigate={handleNavigate}
        />
      ))}
    </ul>
  );
}
