import { Button, Checkbox, Form, Input } from 'antd';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../features/userSlice';

function SignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState();
  const username = localStorage.getItem("username")
  const password = localStorage.getItem("password")
  
  const onFinish = (values) => {
    console.log('Success:', values);
    if(values.username === username && values.password === password){
      dispatch(login(values.remember))
      navigate("/");
    }else{
      setError("Credentials incorrect!")
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <Form
      name="basic"
      labelCol={{
        span: 5,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        help={error && <span style={{color: 'red'}}>{error}</span>}
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 5,
          span: 16,
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 5,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit" style={{width: '600px'}}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}

export default SignIn