import LetterDetailWrapper from "components/LetterDetailWrapper";
import { Link, useParams } from "react-router-dom";

export default function Detail({ memberLetterList }) {
  const { member, id } = useParams();
  const getLetters = () =>
    memberLetterList[member].find((letter) => letter.id === id);

  return (
    <div>
      <Link to='/'> 홈으로</Link>
      <LetterDetailWrapper letters={getLetters()} />
    </div>
  );
}
