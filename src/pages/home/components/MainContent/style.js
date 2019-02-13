import styled from 'styled-components';

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
  transition: all .2s ease-in;
  &:hover {
    box-shadow: 0 0 4px gray;  
  }
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