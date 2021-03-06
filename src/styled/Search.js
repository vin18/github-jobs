import styled from 'styled-components';

export const StyledSearch = styled.div`
  background-color: ${(props) => props.theme.colors.blueDark};
  padding: 2rem 1.5rem;
  border-radius: 0.5rem;
  transform: translateY(-5rem);
  margin: 0 2rem;
  box-shadow: ${(props) => props.theme.colors.boxShadowDark};
`;

export const StyledForm = styled.form`
  display: flex;
  align-items: center;
`;

export const StyledSearchInput = styled.div`
  flex: 1;

  display: flex;
  align-items: center;

  input {
    font-family: inherit;
    font-size: 1.8rem;
    color: ${(props) => props.theme.colors.white};
    padding: 1rem 2rem;
    background-color: transparent;
    border: none;
    width: 90%;
    outline: none;

    &::placeholder {
      color: ${(props) => props.theme.colors.gray};
    }
  }

  i {
    font-size: 2.5rem;
    transform: translateX(3rem) translateY(-0.1rem);
    margin-right: 2rem;
    color: ${(props) => props.theme.colors.violet};
  }
`;

export const StyledSearchLocation = styled.div`
  flex: 1;

  display: flex;
  align-items: center;

  input {
    font-family: inherit;
    font-size: 1.8rem;
    color: ${(props) => props.theme.colors.white};
    padding: 1rem 2rem;
    background-color: transparent;
    border: none;
    width: 90%;
    outline: none;

    &::placeholder {
      color: ${(props) => props.theme.colors.gray};
    }
  }

  i {
    font-size: 2.5rem;
    transform: translateX(3rem) translateY(-0.1rem);
    margin-right: 2.1rem;
    color: ${(props) => props.theme.colors.violet};
  }

  @media (max-width: 78rem) {
    display: none;
  }
`;

export const StyledSearchInfo = styled.div`
  flex: 1;

  display: flex;
  align-items: center;

  input {
    margin-right: 1rem;
  }

  p {
    font-size: 2rem;
    margin-right: auto;
    color: ${(props) => props.theme.colors.white};
    transform: translateY(0.25rem);
  }

  @media (max-width: 78rem) {
    display: none;

    button {
      display: block;
    }
  }
`;

export const StyledButton = styled.button`
  background-color: ${(props) => props.theme.colors.violet};
  border: none;
  border-radius: 0.5rem;
  color: #fff;
  font-size: 2rem;
  padding: 1.5rem 5rem;
  font-weight: 700;
  outline: none;
  cursor: pointer;
  transition: all 300ms;

  &:hover {
    filter: brightness(125%);
  }
`;
