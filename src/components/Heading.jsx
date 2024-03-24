import styled from "styled-components";

const Heading = styled.h1`
  color: var(--text-clr-1);
  text-align: ${(props) => (props.center ? "center" : "left")};
  font-size: ${(props) => props.size || "2.5rem"};
  font-weight: 600;
  line-height: 3rem;
`;

export default Heading;
