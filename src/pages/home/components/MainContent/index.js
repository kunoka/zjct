import React from 'react';
import {
  Content, LeftContent, RightContent, SpaceHolder, LeftContentHeader,
  RightContentHeader, LeftContentBody, LeftContentModule, RightContentBody, Activity
} from './style';

// 渲染常用功能
const renderModules = (props) => {
  const {commonFuncList} = props;
  const result = commonFuncList.map((data, index) => {
    return (
      <LeftContentModule key={index}>
        <div className="module-title">
          <img src={data.pic} alt=""/><span>{data.name}</span>
        </div>
        <div className="module-desc">
          {data.desc}
        </div>
      </LeftContentModule>
    )
  });
  return result;
}
// 渲染动态
const renderActivities = (props) => {
  const {activityList} = props;
  const result = activityList.map((data, index) => {
    return (
      <Activity key={index}>
        <img src={data.image} alt=""/>
        <div className="activity-title">
          <div>{data.title}</div>
          <p>{data.time}</p>
        </div>
      </Activity>
    )
  });
  return result;
}
const MainContent = (props) => {
  return(
    <Content>
      <LeftContent>
        <LeftContentHeader>
          <div className="left-title">常用功能</div>
          <div className="right-title">全部项目</div>
        </LeftContentHeader>
        <LeftContentBody>
          {renderModules(props)}
        </LeftContentBody>
      </LeftContent>
      <SpaceHolder/>
      <RightContent>
        <RightContentHeader>
          动态
        </RightContentHeader>
        <RightContentBody>
          {renderActivities(props)}
        </RightContentBody>
      </RightContent>
    </Content>
  )
}

export default MainContent;