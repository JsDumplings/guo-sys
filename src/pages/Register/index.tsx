import React, {Component } from 'react';
import asideImg from '../../assets/images/register.jpg'
import { Button,Form,Input } from 'antd';
import { FormInstance } from 'antd/es/form';
import './index.scss'

export interface RegisterProp {
  userName?: string;
  password?: string;
  phone?: number;
}

const Register:React.FC = () =>{
  const formRef = React.createRef<FormInstance>();
  const onFinish = (values: any) => {
    console.log('Success:', values);
    formRef.current!.resetFields(); // 清空表单
  };
  const toRegister = (event: any) => {
    console.log("点击转跳到:",event)
  }
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div className="RegisterBody">
      <header>
        <div>
          <i className="iconfont icon-xiangji"></i>
          <span>天朗气清，惠风和畅!</span>
        </div>
      </header>
      <main>
        <aside>
          <img src={asideImg} alt="" />
        </aside>
        <section>
          <h1>注册信息</h1>
          <div className="content">
          <Form 
          ref={formRef}
          name="loginForm"
          labelCol={{ span: 7 }}
          wrapperCol={{ span: 12 }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          >
            <Form.Item
              label="用户名"
              name="username"
              hasFeedback
              rules={[
                {required: true,message: '请输入用户!'},
                {whitespace: true, message: '不能输入空格'},
              ]}
            >
              <Input placeholder="请输入用户名" />
            </Form.Item>
            <Form.Item
              label="手机号"
              name="phone"
              hasFeedback
              rules={[
                {required: true,message: '请输入手机号!'},
                {whitespace: true, message: '不能输入空格'}
              ]}
            >
              <Input placeholder="请输入手机号" />
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
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit" onClick={toRegister}>
                确认注册
              </Button>
            </Form.Item>
          </Form>
        </div>
        </section>
      </main>
    </div>
  )
}

export default Register;