import styled from 'styled-components';
import iconPic from '@/asset/image/index/u28.jpg';

export const Wrapper = styled.div`
  display: flex;
  height: 113px;
  margin-top: 10px;
  background-color: #fff;
  padding: 16px 30px 8px 55px;
  justify-content: flex-end;
`;
export const LeftWrapper = styled.div`
  flex: 3;
  // border: 1px solid red;
  display: flex;
`;
export const Icon = styled.div`
  background: url(${iconPic});
  background-repeat: no-repeat;
  background-size: 78px 80px;
  width: 78px;
  height: 80px;
  // border: 1px solid blue;
`;
export const Welcome = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  // border: 1px solid red;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  div {
    font-family: '微软雅黑';
    font-weight: 400;
    font-size: 20px;
  }
  p {
    font-family: '微软雅黑';
    font-weight: 400;
    font-style: normal;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.4);
    margin-top: 10px;
  }
`;
export const RightWrapper = styled.div`
  flex: 1;
  // border: 1px solid red;
  display: flex;
  .text {
    color: rgba(0, 0, 0, 0.427);
    font-size: 14px;
    font-weight: 400;
   }
    .count {
    font-size: 30px;
    font-weight: 400;
    color: #000;
  }
`;
export const TodoList = styled.div`
  flex: 2;  
  // border: 1px solid red;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  padding-right:60px;
`;
export const Split = styled.div`
  position: absolute;
  border-right: 1px solid rgb(233,233,233);
  height: 38px;
  width: 0;
  right: 160px;
`;
export const Message = styled.div`
  flex: 1.3;  
  display: flex;
  // border: 1px solid red;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  padding-right: 50px;
  box-sizing: border-box;
`;