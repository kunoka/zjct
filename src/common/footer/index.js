import React, {PureComponent} from 'react';
import {FooterWrapper} from './style';

export default class Footer extends PureComponent {
  render() {
    return (
      <FooterWrapper>
        <div>
          <div>帮助</div>
          <div>隐私</div>
          <div>条款</div>
        </div>
        Copyright © {new Date().getFullYear()} 浙江中烟复合调度平台
      </FooterWrapper>
    )
  }
}