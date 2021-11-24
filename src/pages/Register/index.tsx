import React, {Component } from 'react';

export interface RegisterProp {
  userName?: string;
  password?: string;
}

class Register extends Component<RegisterProp,{}>{
  render() {
    return <h1>注册页面</h1>
  }
}

export default Register;