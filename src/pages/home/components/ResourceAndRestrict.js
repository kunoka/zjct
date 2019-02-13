import React, {PureComponent, Fragment} from 'react';
import {Container, Header, Item} from './style';
import Icon from "../../../asset/image/index/u188.svg";

export default class ResourceAndRestrict extends PureComponent {
  render() {
    return(
      <Fragment>
        <Header>资源与约束</Header>
        <Container>
          <Item>
            <img src={Icon} alt=""/>
            <p>经营目标</p>
          </Item>
          <Item>
            <img src={Icon} alt=""/>
            <p>经营目标</p>
          </Item>
          <Item>
            <img src={Icon} alt=""/>
            <p>经营目标</p>
          </Item>
          <Item>
            <img src={Icon} alt=""/>
            <p>经营目标</p>
          </Item>
          <Item>
            <img src={Icon} alt=""/>
            <p>经营目标</p>
          </Item>
          <Item>
            <img src={Icon} alt=""/>
            <p>经营目标</p>
          </Item>
        </Container>
      </Fragment>
    )
  }

}