import styled from "styled-components";
import Button from "./Button";

export default function LetterForm() {
  return (
    <StyledForm>
      <StyledInputWrapper>
        <StyledRow>
          <label htmlFor='nickname'></label>
          <input id='nickname' name='content' required />
        </StyledRow>
        <StyledRow>
          <label htmlFor='content'></label>
          <textarea
            name='content'
            id='content'
            cols='5'
            rows='20'
            required></textarea>
        </StyledRow>
      </StyledInputWrapper>
      <div>
        <label htmlFor='select-memeber' />
        <select>
          <option value='카리나'>카리나</option>
        </select>
      </div>
      <Button>팬레터 등록</Button>
    </StyledForm>
  );
}

const StyledForm = styled.form``;
const StyledInputWrapper = styled.div``;
const StyledRow = styled.div``;
