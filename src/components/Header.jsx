import { useRef } from "react";
import styled from "styled-components";

export default function Header() {
  const members = useRef(["카리나", "윈터", "닝닝", "지젤"]);

  return (
    <StyledHeader>
      <h1>에스파 팬레터 콜렉션</h1>
      <nav>
        <ul>
          <li></li>
        </ul>
      </nav>
    </StyledHeader>
  );
}

const StyledHeader = styled.header``;
