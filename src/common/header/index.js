import React, {PureComponent} from 'react';
import {HeaderWrapper, LeftWrapper, Logo, NavWrapper, RightWrapper, Icon, Message} from './style';
import {Link} from 'react-router-dom';
import {Menu, Input} from 'antd';

const Search = Input.Search;

export default class header extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      current: 'home',
      userName: '洪璐'
    }
  }

  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }

  render() {
    const {userName} = this.state;
    return (
      <HeaderWrapper>
        <Link to='/'>
          <LeftWrapper>
            <Logo/>
          </LeftWrapper>
        </Link>
        <NavWrapper>
          <Menu
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode="horizontal"
          >
          <Menu.Item key="home">
          首页
          </Menu.Item>
          <Menu.Item key="resource">
          资源与约束
          </Menu.Item>
          <Menu.Item key="plan">
          计划与调度
          </Menu.Item>
          <Menu.Item key="monitor">
          全局监控
          </Menu.Item>
          </Menu>
        </NavWrapper>
        <RightWrapper>
          <Search
          placeholder="请输入关键字搜索"
          onSearch={value => console.log(value)}
          style={{ width: 282 }}
        />
          <Icon />
          <div>{userName}</div>
          <Message/>
        </RightWrapper>
      </HeaderWrapper>
    )
  }
}