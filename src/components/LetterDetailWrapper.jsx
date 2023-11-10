import { alter } from "lib/alter";
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
const LetterDetail = ({}) => {
  return (
    <div>
      <Button>수정</Button>
      <Button>삭제</Button>
    </div>
  );
};
