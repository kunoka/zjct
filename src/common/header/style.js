import styled from 'styled-components';
import logoPic from '../../asset/image/logo.png';
import iconPic from '../../asset/image/index/u28.jpg';
import msgPic from '../../asset/image/index/u303.png';

export const HeaderWrapper = styled.div`
  display: flex;
  z-index:1;
  position: relative;
  height: 60px;
  // max-width: 1400px;
  // border: 1px solid red;
  border-bottom: 1px solid #F0F0F0;
  background-color: rgba(253, 253, 253, 1);
  box-shadow: 3px 3px 5px rgba(153, 153, 153, 0.35);
`;
export const LeftWrapper = styled.div`
  position: relative;
  height: 100%;
  // border:1px solid yellow;
  flex: 0;
  width: 300px;
`;
export const Logo = styled.div`
  margin: 8px 0 0 15px;
  width: 274px;
  height: 52px;
  background: url(${logoPic});
  background-repeat: no-repeat;
  background-size: 274px 52px;
  background-position: left 50%;
  // border:1px solid red;
`;
export const NavWrapper = styled.div`
  // border: 1px solid green;
  flex: 1;
  display: flex;
  justify-content: center;
`;
export const RightWrapper = styled.div`
  flex: 0 0 none;
  width: 430px;
  // border: 1px solid blue;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
export const Icon = styled.div`
  background: url(${iconPic});
  background-repeat: no-repeat;
  background-size: 26px 25px;
  // border: 1px solid red;
  height: 25px;
  width: 26px;
`;
export const Message = styled.div`
  background: url(${msgPic});
  background-repeat: no-repeat;
  background-size: contain;
  // border: 1px solid red;
  height: 23px;
  width: 22px;
 
`;