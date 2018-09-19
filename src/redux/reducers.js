/*包含n个reducer函数的模块*/

import {combineReducers} from 'redux';
import {getRedirectPath} from '../utils';
import {AUTH_SUCCESS, ERROR_MSG, RECEIVE_USER, RESET_USER} from './action-types';

// 管理user数据
const initUser = {
  username: '', // 用户名
  type: '', // 用户类型
  msg: '', // 需要显示的错误信息
  redirectTo: '', // 需要自动重定向的路径
};

function user(state = initUser, action) {
  switch (action.type) {
    case AUTH_SUCCESS:
      const user = action.data;
      return {...user, redirectTo: getRedirectPath(user.type, user.header)};
    case ERROR_MSG:
      const msg = action.data;
      return {...state, msg};
    case RECEIVE_USER:
      return action.data;
    case RESET_USER:
      return {...initUser, msg: action.data};
    default:
      return state
  }
}

export default combineReducers({
  user
})
