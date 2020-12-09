import styled from 'styled-components';

export const StyledNavbar = styled.nav`
  background-color: ${(props) => props.theme.colors.bgNavbar};
  color: ${(props) => props.theme.colors.cNavbar};
  height: 15rem;

  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;

  & > h1 {
    font-size: 4rem;
    text-align: center;
    position: absolute;
    top: 4rem;
    transform: translateY(-1rem);
  }
`;
