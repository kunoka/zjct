import React, {PureComponent, Fragement} from 'react';
import {connect} from 'react-redux';
import {actionCreators} from './store';
import ResourceAndRestrict from './components/ResourceAndRestrict';

import {
  TopWrapper, LeftWrapper, RightWrapper, Icon,
  Welcome, TodoList, Message, Split, Content,
  LeftContent,  RightContent,SpaceHolder, LeftContentHeader,
  RightContentHeader, LeftContentBody, LeftContentModule,
  RightContentBody, Activity
} from './style';

class home extends PureComponent {
  componentDidMount() {
    this.props.getHomeData();
  }
  renderModules() {
    const {commonFuncList} = this.props;
    const result = commonFuncList.map((data, index) => {
      return(
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
  renderActivities() {
    const {activityList} = this.props;
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
  render() {
    return (
      <div>
        <TopWrapper>
          <LeftWrapper>
            <Icon/>
            <Welcome>
              <div>早安，洪璐，祝你开心每一天</div>
              <p>欢迎使用浙江中烟智慧化复合调试平台</p>
            </Welcome>
          </LeftWrapper>
          <RightWrapper>
            <TodoList>
              <div className="text">待办事宜</div>
              <div className="count">12</div>
            </TodoList>
            <Message>
              <div className="text">消息</div>
              <Split/>
              <div className="count">32</div>
            </Message>
          </RightWrapper>
        </TopWrapper>
        <Content>
          <LeftContent>
            <LeftContentHeader>
              <div className="left-title">常用功能</div>
              <div className="right-title">全部项目</div>
            </LeftContentHeader>
            <LeftContentBody>
              {this.renderModules()}
            </LeftContentBody>
          </LeftContent>
          <SpaceHolder />
          <RightContent>
            <RightContentHeader>
              动态
            </RightContentHeader>
            <RightContentBody>
              {this.renderActivities()}
            </RightContentBody>
          </RightContent>
        </Content>
        <ResourceAndRestrict />
      </div>
    )
  }
}

const mapState = (state) => {
  return {
    commonFuncList: state.getIn(['home', 'commonFuncList']),
    activityList: state.getIn(['home', 'activityList']),
  }
}

const mapDispatch = (dispatch) => {
  return {
    getHomeData() {
      dispatch(actionCreators.getHomeData())
    }
  }
}
export default connect(mapState, mapDispatch)(home)