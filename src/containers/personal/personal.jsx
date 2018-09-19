import React, {Component} from 'react';
import {connect} from 'react-redux';
/*个人中心主界面路由组件*/
class Personal extends Component {
  render() {
    return (
      <div>Personal</div>
    )
  }
}

export default connect(
  state => ({}),
  {}
)(Personal)