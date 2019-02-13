import React, {Fragment} from 'react';
import {Container, Header, Item} from './style';

const ResourceAndRestrict = (props) => {
  const {data} = props;
  return (
    <Fragment>
      <Header>资源与约束</Header>
      <Container>
        {data ? data.map((item, index) => {
          return (
            <Item>
              <img src={item.image} alt=""/>
              <p>{item.name}</p>
            </Item>
          )
        }) : null}
      </Container>
    </Fragment>
  )
}

export default ResourceAndRestrict;