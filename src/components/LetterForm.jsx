import styled from "styled-components";
import Button from "./Button";

export default function LetterForm({
  members,
  formState,
  handleChangeFormValue,
}) {
  const { nickname, content, selected } = formState;
  const handleEtargetValue = (key) => (e) =>
    handleChangeFormValue(key)(e.target.value);
  return (
    <StyledForm>
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
      <div>
        <label htmlFor='select-memeber'>누구에게 보내실 건가요?</label>
        <select onChange={handleEtargetValue("selected")}>
          {members.map((member) => (
            <option key={"option/" + member} value={member}>
              {member}
            </option>
          ))}
        </select>
      </div>
      <Button>팬레터 등록</Button>
    </StyledForm>
  );
}

const StyledForm = styled.form``;
const StyledInputWrapper = styled.div``;
const StyledRow = styled.div``;
