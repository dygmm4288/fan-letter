import LetterItem from "./LetterItem";

/* const letters = [
  {
    avatar: "url",
    name: "",
    createdAt: new Date(),
    content: "카리나 멋져요",
  },
  {
    avatar: "url",
    name: "",
    createdAt: new Date(),
    content: "카리나 멋져요",
  },
]; */
export default function LetterList({ letters }) {
  return (
    <ul>
      {letters.map((letter) => (
        <LetterItem {...letter} />
      ))}
    </ul>
  );
}
