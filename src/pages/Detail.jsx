import { MemberLetterListContext } from "App";
import LetterDetailWrapper from "components/LetterDetailWrapper";
import { alter } from "lib/alter";
import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

export default function Detail() {
  const { member, id } = useParams();
  const { memberLetterList } = useContext(MemberLetterListContext);
  const letter = memberLetterList[member].find(findLetterById(id));
  const ifEmptyLetterThan = alter(() => !letter);

  return (
    <StyledDetail>
      <Link to='/'> 홈으로</Link>
      {ifEmptyLetterThan(
        <EmptyLetterDetail />,
        <LetterDetailWrapper {...letter} />,
      )}
    </StyledDetail>
  );
}

const EmptyLetterDetail = () => {
  return (
    <div>
      <h2>You've taken the wrong path.</h2>
    </div>
  );
};

const StyledDetail = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  & > a {
    padding: 1rem 1.5rem;
    background-color: black;
    color: white;
    display: inline-block;
    text-decoration: none;
    font-weight: 500;
    font-size: 0.9rem;

    border-left: 1.5px solid gray;
    border-top: 1.5px solid gray;

    box-shadow: 5px 5px 5px black;

    position: absolute;
    top: 1rem;
    left: 1rem;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;

const findLetterById = (id) => (letter) => letter.id === id;
