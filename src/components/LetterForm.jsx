import { useLetter } from "contexts/letter.context";
import { memberKoreanMap, memberNames } from "data/member";
import { useState } from "react";
import styled from "styled-components";
import Button from "./Button";

export default function LetterForm() {
  const { addNewLetter, selectMember, selectedMemberName } = useLetter();
  const [formState, setFormState] = useState({
    nickname: "",
    content: "",
  });

  const handleChangeFormState = (e) => {
    const { name, value } = e.currentTarget;
    setFormState({ ...formState, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const newLetter = {
      ...formState,
    };

    addNewLetter(newLetter);
    setFormState({ ...formState, nickname: "", content: "" });
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledInputWrapper>
        <StyledRow>
          <label htmlFor='nickname'>닉네임: </label>
          <input
            id='nickname'
            name='nickname'
            value={formState.nickname}
            onChange={handleChangeFormState}
            placeholder='최대 20글자까지만 작성할 수 있습니다'
            required
          />
        </StyledRow>
        <StyledRow>
          <label htmlFor='content'>내용:</label>
          <textarea
            name='content'
            id='content'
            cols='20'
            rows='5'
            required
            value={formState.content}
            onChange={handleChangeFormState}
            maxLength={100}
            placeholder='최대 100자까지만 작성할 수 있습니다.'></textarea>
        </StyledRow>
      </StyledInputWrapper>
      <div className='select-wrapper'>
        <label htmlFor='select-member'>누구에게 보내실 건가요?</label>
        <select
          value={selectedMemberName}
          onChange={(e) => selectMember(e.target.value)}>
          {memberNames.map((memberName) => (
            <option key={"option/" + memberName} value={memberName}>
              {memberKoreanMap[memberName]}
            </option>
          ))}
        </select>
      </div>
      <Button type='submit'>팬레터 등록</Button>
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
