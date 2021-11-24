import React, {Component } from 'react';
import { Button,Form,Input,Checkbox } from 'antd';
import { FormInstance } from 'antd/es/form';
import { Link } from "react-router-dom";

import './index.scss'

export interface LoginProp {
  userName?: string;
  password?: string;
}
class Login extends Component<LoginProp,{}>{
  toRegister(event: any): void{
    console.log("点击转跳到:",event)
  }
  render() {
    const formRef = React.createRef<FormInstance>();
    const onFinish = (values: any) => {
      console.log('Success:', values);
      formRef.current!.resetFields(); // 清空表单
    };
    const toRegister = (event: any) => {
      this.toRegister(event);
    }
  
    const onFinishFailed = (errorInfo: any) => {
      console.log('Failed:', errorInfo);
    };
    const bgBody = (
      <div className="bgBody">
        <div className="container">
          <h1>系统管理后台</h1>
          <div className="content">
            <Form 
            ref={formRef}
            name="loginForm"
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 12 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            >
              <Form.Item
                label="用户名"
                name="username"
                hasFeedback
                rules={[
                  {required: true,message: '请输入用户名或手机号!'},
                  {whitespace: true, message: '不能输入空格'},
                ]}
              >
                <Input placeholder="请输入用户名或手机号" />
              </Form.Item>
              <Form.Item
                label="密码"
                name="password"
                hasFeedback
                rules={[
                  {required: true,message: '请输入密码!'},
                  {min:5, message: '密码不能少于5个字符'}, 
                  {max:10, message: '密码不能大于10个字符'},
                  {whitespace: true, message: '不能输入空格'}
                ]}
              >
                <Input.Password placeholder="请输入密码" />
              </Form.Item>
              <Form.Item wrapperCol={{ offset: 6, span: 12 }}>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox>记住密码</Checkbox>
                </Form.Item>
                <p className="login-forget">忘记密码?</p>
              </Form.Item>



              <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                  登录
                </Button>
                <Button type="primary" className="register-btn" htmlType="button" onClick={toRegister}>
                  <Link to="/register">注册</Link>
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    );
    return (bgBody)
  }
}
export default Login;
