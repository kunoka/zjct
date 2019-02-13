import React, {PureComponent} from 'react';
import {FooterWrapper} from './style';

export default class Footer extends PureComponent {
  render() {
    return (
      <FooterWrapper>
        Copyright © {new Date().getFullYear()} 浙江中烟复合调度平台
      </FooterWrapper>
    )
  }
}