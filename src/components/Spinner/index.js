import styled, { keyframes } from 'styled-components';

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);

  position: relative;
  top: 50%;
  left: 40%;
  
  border-top: 2px solid #FA9F4C;
  border-right: 2px solid #FA9F4C;
  border-bottom: 2px solid #FA9F4C;
  border-left: 4px solid transparent;
  background: transparent;
  width: 80px;
  height: 80px;
  border-radius: 50%;
`;

export default Spinner;
