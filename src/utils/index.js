/**
 * 返回整数倍的数组
 * @params {array} 需要实践的原始数组
 * @params {integer} number,补足每行多少位，首页是6位
 */

// 补充6的整数倍，解决 flex 换行显示问题
export const FillArr = (data, number) => {
  if (data && data.length) {
    const len = data.length;
    const left = len % number;
    const fill = number - left;
    let fillArr = [];
    for (let i = 0; i < fill; i++) {
      fillArr.push({
        image: '',
        name: ""
      })
    }
    return data.concat(fillArr);
  }else{
    return data;
  }
}
