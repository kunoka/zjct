import React, {Fragment} from 'react';
import {FillArr} from '../../../../utils/index';
import {Container, Header, Item} from './style';

const GlobalMonitor = (props) => {
  let {data} = props;
  // 补充6的整数倍，解决 flex 换行显示问题
 data = FillArr(data, 6);
  return (
    <Fragment>
      <Header>计划与调度</Header>
      <Container>
        {data ? data.map((item, index) => {
          return (
            <Item className={item.name ? "" : "hide"}>
              <img src={item.image} alt=""/>
              <p>{item.name}</p>
            </Item>
          )
        }) : null}
      </Container>
    </Fragment>
  )
}

export default GlobalMonitor;