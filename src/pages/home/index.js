import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {actionCreators} from './store';
import TopContent from './components/TopContent';
import MainContent from './components/MainContent';
import ResourceAndRestrict from './components/ResourceAndRestrict/index';
import PlanAndDispatch from './components/PlanAndDispatch/index';
import GlobalMonitor from './components/GlobalMonitor/index';


class home extends PureComponent {
  componentDidMount() {
    this.props.getHomeData();
  }

  render() {
    const {
      userInfo, commonFuncList, activityList,
      resourceStrictList, planAndDispatchList, globalMonitorList
    } = this.props;
    return (
      <div>
        <TopContent userInfo={userInfo}/>
        <MainContent commonFuncList={commonFuncList} activityList={activityList}/>
        <ResourceAndRestrict data={resourceStrictList} />
        <PlanAndDispatch data={planAndDispatchList} />
        <GlobalMonitor data={globalMonitorList} />
      </div>
    )
  }
}

const mapState = (state) => {
  return {
    userInfo: state.getIn(['home', 'userInfo']),
    commonFuncList: state.getIn(['home', 'commonFuncList']),
    activityList: state.getIn(['home', 'activityList']),
    resourceStrictList: state.getIn(['home', 'resourceStrictList']),
    planAndDispatchList: state.getIn(['home', 'planAndDispatchList']),
    globalMonitorList: state.getIn(['home', 'globalMonitorList']),
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