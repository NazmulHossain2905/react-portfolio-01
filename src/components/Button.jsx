import styled from "styled-components";

const StyledButton = styled.button`
  padding-inline: 2rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  line-height: 3.5rem;
  border-radius: 0.32rem;
  box-shadow: 0px 8px 32px 0px rgba(19, 34, 56, 0.08);
  transition: 0.4s ease-out;
  background-color: ${(props) =>
    props.variant === "primary" ? "#1777E5" : "#FFFFFF"};
  color: ${(props) => (props.variant === "primary" ? "#fff" : "#1777E5")};
  border: ${(props) =>
    props.variant !== "primary" && props.variant !== "secondary"
      ? "2px solid #E8F1FC"
      : "none"};

  &:hover {
    background-color: ${(props) =>
      props.variant !== "primary" ? "#1777E5" : "#FFFFFF"};

    color: ${(props) => (props.variant !== "primary" ? "#fff" : "#1777E5")};
  }
`;

const Button = ({ children, variant, onClick, left, right }) => {
  return (
    <StyledButton onClick={onClick} variant={variant}>
      {left || left} {children} {right || right}
    </StyledButton>
  );
};

export default Button;
