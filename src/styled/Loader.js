import styled from 'styled-components';

export const SPINNER_COLOR = '#fff';

export const StyledSpinner = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledSpinnerRing = styled.div`
  display: inline-block;
  width: 80px;
  height: 80px;

  &:after {
    content: ' ';
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid ${SPINNER_COLOR};
    border-color: ${SPINNER_COLOR} transparent ${SPINNER_COLOR}
      transparent;
    animation: dual-ring 1.2s linear infinite;
  }

  @keyframes dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
