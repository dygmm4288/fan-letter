export default function LetterDetailWrapper({
  writedTo,
  content,
  nickname,
  createdAt,
  avatar,
  id,
}) {
  return null;
  // const [isUpdate, setIsUpdate] = useState(false);
  // const [contentValue, setContentValue] = useState(content);
  // const contentRef = useRef(null);
  // const navigate = useNavigate();

  // const handleUpdateButton = () => setIsUpdate(true);
  // const handleUpdateDoneButton = () => {
  //   setIsUpdate(false);
  //   if (contentValue === content) {
  //     alert("아무런 수정 사항이 없습니다.");
  //     return;
  //   }
  //   setMemberLetterList((prev) => prev.map(updateLetter(id, contentValue)));
  // };
  // const handleRemoveButton = () => {
  //   if (!window.confirm("정말로 삭제하시겠습니까?")) return;
  //   setMemberLetterList((prev) => prev.filter(removeLetter(id)));
  //   navigate("/");
  // };
  // const handleChangeContent = (e) => {
  //   setContentValue(e.target.value);
  // };
  // const UpdateButton = () => (
  //   <Button handleClickEvent={handleUpdateButton}>수정</Button>
  // );
  // const RemoveButton = () => (
  //   <Button handleClickEvent={handleRemoveButton}>삭제</Button>
  // );
  // const UpdateDoneButton = () => (
  //   <Button handleClickEvent={handleUpdateDoneButton}>수정 완료</Button>
  // );

  // return (
  //   <LetterDetail
  //     RemoveButton={RemoveButton}
  //     UpdateButton={UpdateButton}
  //     UpdateDoneButton={UpdateDoneButton}
  //     avatar={avatar}
  //     content={content}
  //     contentRef={contentRef}
  //     contentValue={contentValue}
  //     createdAt={createdAt}
  //     handleChangeContent={handleChangeContent}
  //     isUpdate={isUpdate}
  //     nickname={nickname}
  //     writedTo={writedTo}
  //   />
  // );
}
function removeLetter(id) {
  return (letter) => letter.id !== id;
}
function updateLetter(id, content) {
  return (letter) => {
    if (letter.id === id) {
      return {
        ...letter,
        content,
      };
    }
    return letter;
  };
}
