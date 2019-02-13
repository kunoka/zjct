import styled from 'styled-components';
import iconPic from '../../asset/image/index/u28.jpg';

export const TopWrapper = styled.div`
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
export const Content = styled.div`
  display: flex;
  // border:1px solid green;
  margin-top: 16px;
  background: #fff;  
  .RightContent {
    flex: 1;
  }
`;

export const LeftContent = styled.div`
  flex: 3;
 
`;
export const LeftContentHeader = styled.div`
  height: 48px;
  border-bottom: 1px solid rgb(233, 233, 233);
  display: flex;
  justify-content: space-between;
   .left-title {
      flex: 1;
      font-weight: 650;
      font-size: 20px;
      color: #000;
      padding-left: 25px;
      padding-top: 10px;
    }
    .right-title {
       flex: 1;
       text-align: right;
       font-weight: 400;
       color: #1890FF;
       padding-top: 10px;
       padding-right: 25px;
    }
`;
export const LeftContentBody = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 25px 15px 25px;
`;
export const LeftContentModule = styled.div`
  width: 249px;
  height: 149px;
  border: 1px solid rgb(0, 0, 0, .2);
  box-shadow: 0 0 1px rgb(0, 0, 0,  .1);
  border-radius: 20px;
  margin-top: 10px;
  padding: 25px 20px;
  cursor: pointer;
  .module-title {
    // border:1px solid red;
    height: 40px;
    line-height: 40px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    img {
      width: 25px;
      height: 25px;
    }
    span {
      margin-left: 8px;
      color: #000;
      font-weight: bold;
      font-size: 16px;
    }
   }
   .module-desc {
    margin-top: 20px;
    font-size: 12px;
    color: rgba(0,0,0,0.4);
   }
`;
export const SpaceHolder = styled.div`
  width: 10px;
  // border: 1px solid blue;
	background-color: rgba(240, 242, 245, 1);

`;
export const RightContent = styled.div`
  flex: 1.6;
  // border: 1px solid red;
  font-weight: 700;
  font-size: 16px;
  text-align: left;
  height: 100%;
  display: flex;
  flex-direction: column;
}
`;
export const RightContentHeader = styled.div`
  flex: 0 0 none;
  height: 48px;
  border-bottom: 1px solid rgb(233, 233, 233);
  padding: 10px 0 0 25px;
`;
export const RightContentBody = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between; 
  // border: 1px solid blue;
  // height: 100%;
`;
export const Activity = styled.div`
  padding: 10px 0;
  // border: 1px solid red;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin-bottom: 10px;
  img {
    flex: 0 0 none;
    display: block;
    width: 38px;
    height: 40px;
  }
  .activity-title {
    flex: 1;
    margin-left: 10px;
    // border:1px solid yellow;
    height: 45px;
    line-height: 1.5;
    div {
      font-size: 14px;
      font-weight: 700;
    }
    p{
      color: rgba(0, 0, 0, 0.447);
      font-weight: 400;
      font-size: 14px;
    }
  }
`;