import styled from 'styled-components';

export const FooterWrapper = styled.div`
  // border: 0px solid red;
  background: transparent;
  text-align: center;
  color: rgba(0, 0, 0, 0.447);
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  div {
    display:flex;
    // border: 1px solid red;
      margin-bottom: 5px;
    div {
      width: 50px;
      // border: 1px solid yellow;
    }
  }
`;