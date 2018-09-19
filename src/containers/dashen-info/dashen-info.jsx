import React, {Component} from 'react';
import {connect} from 'react-redux';
import {NavBar, InputItem, TextareaItem, Button, WingBlank, List} from 'antd-mobile';
import {Redirect} from 'react-router-dom';

import HeaderSelector from '../../componnets/header-selector/header-selector';
import {updateUser} from '../../redux/actions';

/*大神信息完善组件*/
class DashenInfo extends Component {
  state = {
    header: '', // 头像名称
    info: '', // 个人简介
    post: '', // 求职岗位
  };
  handleChange = (name, value) => {
    this.setState({
      [name]: value
    })
  };
  setHeader = (header) => {
    this.setState({header})
  };

  render() {
    const {user} = this.props
    if (user.header) {
      return <Redirect to='/dashen'/>
    }
    return (
      <div>
        <NavBar>大神信息完善</NavBar>
        <HeaderSelector setHeader={this.setHeader}/>
        <InputItem onChange={val => this.handleChange('post', val)}>求职岗位:</InputItem>
        <TextareaItem title="个人介绍:"
                      rows={3}
                      onChange={val => this.handleChange('info', val)}/>
        <Button type='primary' onClick={() => this.props.updateUser(this.state)}>保存</Button>
      </div>
    )
  }
}

export default connect(
  state => ({user: state.user}),
  {updateUser}
)(DashenInfo)