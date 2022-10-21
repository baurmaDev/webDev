import { Button, Form, Input } from 'antd';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signUp } from '../features/userSlice';

function SignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [err, setErr] = useState();
  const onFinish = (values) => {
    if((values.password !== values.repeatPassword)){
      setErr("Password's doesn't match");
    }else{
      dispatch(signUp(values));
      navigate("/")
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
        label="Repeat Password"
        name="repeatPassword"
        help={err && <span style={{color: 'red'}}>{err}</span>}
        rules={[
          {
            required: true,
            message: 'Please repeat your password!',
          },
        ]}
      >
        <Input.Password />
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

export default SignUp