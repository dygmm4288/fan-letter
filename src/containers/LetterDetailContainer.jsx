import EmptyLetterDetail from "components/EmptyLetterDetail";
import { alter } from "lib/alter";
import {
  deleteMemberLetter,
  findLetterById,
  selectMemberLetterList,
  updateMemberLetter,
} from "modules/memberLetters";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import LetterDetail from "../components/LetterDetail";

export default function LetterDetailContainer() {
  const { member, id } = useParams();
  const memberLetterList = useSelector(selectMemberLetterList);
  const letter = memberLetterList[member].find(findLetterById(id));
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
  const ifEmptyLetterThan = alter(() => !letter);
  return ifEmptyLetterThan(
    <EmptyLetterDetail />,
    <LetterDetail
      letter={letter}
      handleChangeContent={handleChangeContent}
      isUpdate={isUpdate}
      contentValue={contentValue}
      handleRemoveButton={handleRemoveButton}
      handleUpdateButton={handleUpdateButton}
      handleUpdateDoneButton={handleUpdateDoneButton}
    />,
  );
}
