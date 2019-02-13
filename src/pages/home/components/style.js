import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  border:1px solid red;
  padding: 25px 20px;
`;
export const Header = styled.div`
  margin-top: 20px;
  background-color: #fff;

  height: 48px;
`;
export const Item = styled.div`
  width: 180px;
  height: 135px;
  border: 1px solid rgba(0,0,0,.2);
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding:10px 0;
  cursor: pointer;
      transition: all .2s ease-in;

  &:hover {
    box-shadow: 0 0 4px gray;  
  }
  img {
    width: 80%;
    height: 80%;
    // border:1px solid blue;
  }
  p {
    // border:1px solid blue;
    font-size: 16px;
    font-weight: 700;
  }
 
`;
