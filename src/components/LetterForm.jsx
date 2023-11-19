import { useRoot } from "contexts/root.context";
import { useState } from "react";
import styled from "styled-components";
import Button from "./Button";

export default function LetterForm() {
  const { addNewLetter } = useRoot();
  const [nickname, setNickname] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newLetter = {
      nickname,
      content,
    };
    addNewLetter(newLetter);
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledInputWrapper>
        <StyledRow>
          <label htmlFor="nickname">닉네임: </label>
          <input
            required
            value={nickname}
            onChange={(e) => setNickname(e.currentTarget.value)}
            placeholder="최대 20글자까지만 작성할 수 있습니다"
          />
        </StyledRow>
        <StyledRow>
          <label htmlFor="content">내용:</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.currentTarget.value)}
            cols="20"
            rows="5"
            required
            maxLength={100}
            placeholder="최대 100자까지만 작성할 수 있습니다."
          ></textarea>
        </StyledRow>
      </StyledInputWrapper>

      <Button type="submit">팬레터 등록</Button>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  width: 512px;
  margin: 0 auto;
  background-color: gray;

  padding: 1.5rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  button {
    align-self: flex-end;
  }

  .select-wrapper label {
    margin-right: 1rem;
  }

  border-radius: 0.5rem;
`;
const StyledInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const StyledRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  label {
    flex: 0.2;
  }
  input,
  textarea {
    flex: 1;
    padding: 0.5rem;
  }
  textarea {
    resize: none;
  }
`;

// const [formState, setFormState] = useState({
//   nickname: "",
//   content: "",
//   selected: KARINA,
// });

// const handleChangeFormValue = (key) => (value) => {
//   setFormState((prev) => ({
//     ...prev,
//     [key]: value,
//   }));
// };
