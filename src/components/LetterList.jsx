import { useNavigate } from "react-router-dom";
import LetterItem from "./LetterItem";

/* const letters = [
  {
    avatar: "url",
    name: "",
    createdAt: new Date(),
    content: "카리나 멋져요",
    id: 123,
  },
  {
    avatar: "url",
    name: "",
    createdAt: new Date(),
    content: "카리나 멋져요",
    id: 456,
  },
]; */
export default function LetterList({ letters, selectedMember }) {
  const navigate = useNavigate();
  const handleNavigate = (id) => () => {
    navigate(`/detail/${selectedMember}/${id}`);
  };
  letters = letters || [];
  return (
    <ul>
      {letters.map((letter) => (
        <LetterItem {...letter} handleNavigate={handleNavigate} />
      ))}
    </ul>
  );
}
