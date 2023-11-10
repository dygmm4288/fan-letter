import { memberKoreanMap } from "App";
import styled from "styled-components";
import Button from "./Button";

export default function LetterForm({
  members,
  formState,
  handleChangeFormValue,
  handleEnrollLetter,
}) {
  const { nickname, content } = formState;
  const handleEtargetValue = (key) => (e) =>
    handleChangeFormValue(key)(e.target.value);
  return (
    <StyledForm onSubmit={handleEnrollLetter}>
      <StyledInputWrapper>
        <StyledRow>
          <label htmlFor='nickname'>닉네임: </label>
          <input
            id='nickname'
            name='content'
            required
            value={nickname}
            onChange={handleEtargetValue("nickname")}
            placeholder='최대 20글자까지만 작성할 수 있습니다'
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
            value={content}
            onChange={handleEtargetValue("content")}
            maxLength={100}
            placeholder='최대 100자까지만 작성할 수 있습니다.'></textarea>
        </StyledRow>
      </StyledInputWrapper>
      <div className='select-wrapper'>
        <label htmlFor='select-memeber'>누구에게 보내실 건가요?</label>
        <select onChange={handleEtargetValue("selected")}>
          {members.map((member) => (
            <option key={"option/" + member} value={member}>
              {memberKoreanMap[member]}
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
