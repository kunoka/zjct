import React from 'react';
import {
  Wrapper, LeftWrapper, RightWrapper, Icon,
  Welcome, TodoList, Message, Split
} from './style';

const getName = (props) => {
  if( props && props.userInfo && props.userInfo.name) {
    return props.userInfo.name
  }else{
    return ""
  }
}
const getToDoListCount= (props) => {
  if(props && props.userInfo && props.userInfo.toDoListCount) {
    return props.userInfo.toDoListCount
  }else{
    return ""
  }
}
const getMessageCount= (props) => {
  if(props && props.userInfo && props.userInfo.messageCount) {
    return props.userInfo.messageCount
  }else{
    return ""
  }
}
const TopContent = (props) => {
    // let {name, toDoListCount, messageCount} = props.userInfo;
    return (
      <Wrapper>
        <LeftWrapper>
          <Icon/>
          <Welcome>
            <div>早安，{getName(props)}，祝你开心每一天</div>
            <p>欢迎使用浙江中烟智慧化复合调试平台</p>
          </Welcome>
        </LeftWrapper>
        <RightWrapper>
          <TodoList>
            <div className="text">待办事宜</div>
            <div className="count">
              {getToDoListCount(props)}
            </div>
          </TodoList>
          <Message>
            <div className="text">消息</div>
            <Split/>
            <div className="count">{getMessageCount(props)}</div>
          </Message>
        </RightWrapper>
      </Wrapper>
    )
}
export default TopContent