import { alter } from "lib/alter";
import {
  deleteMemberLetter,
  selectMemberLetterList,
  updateMemberLetter,
} from "modules/memberLetters";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Button from "./Button";
import LetterDetail from "./LetterDetail";

export default function LetterDetailWrapper() {
  const { member, id } = useParams();
  const memberLetterList = useSelector(selectMemberLetterList);
  const letter = memberLetterList[member].find(findLetterById(id));
  const ifEmptyLetterThan = alter(() => !letter);

  const [isUpdate, setIsUpdate] = useState(false);
  const [contentValue, setContentValue] = useState(letter.content);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleUpdateButton = () => setIsUpdate(true);
  const handleUpdateDoneButton = () => {
    setIsUpdate(false);
    if (contentValue === letter.content) {
      alert("아무런 수정 사항이 없습니다.");
      return;
    }
    dispatch(updateMemberLetter({ id, content: contentValue }));
  };
  const handleRemoveButton = () => {
    if (!window.confirm("정말로 삭제하시겠습니까?")) return;
    dispatch(deleteMemberLetter({ id }));
    navigate("/");
  };
  const handleChangeContent = (e) => {
    setContentValue(e.target.value);
  };
  const UpdateButton = () => (
    <Button handleClickEvent={handleUpdateButton}>수정</Button>
  );
  const RemoveButton = () => (
    <Button handleClickEvent={handleRemoveButton}>삭제</Button>
  );
  const UpdateDoneButton = () => (
    <Button handleClickEvent={handleUpdateDoneButton}>수정 완료</Button>
  );

  return ifEmptyLetterThan(
    <EmptyLetterDetail />,
    <LetterDetail
      {...letter}
      RemoveButton={RemoveButton}
      UpdateButton={UpdateButton}
      UpdateDoneButton={UpdateDoneButton}
      handleChangeContent={handleChangeContent}
      isUpdate={isUpdate}
      contentValue={contentValue}
    />,
  );
}
const EmptyLetterDetail = () => {
  return (
    <div>
      <h2>You've taken the wrong path.</h2>
    </div>
  );
};
const findLetterById = (id) => (letter) => letter.id === id;
