import React, { useState } from 'react'
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Card, Menu } from 'antd';
import SignIn from './SignIn';
import SignUp from './SignUp';


function Auth() {
    const [activeTabKey1, setActiveTabKey1] = useState('signIn');
    const onTab1Change = (key) => {
        setActiveTabKey1(key);
    };
    const tabList = [
        {
            key: 'signIn',
            tab: 'Sign In',
        },
        {
            key: 'signUp',
            tab: 'Sign Up',
        },
    ];
    const contentList = {
        signIn: <SignIn />,
        signUp: <SignUp />,
    };
  return (
    <Card
        style={{
          width: '50%',
          marginTop: '20px'
          ,height: '400px'
        }}
        title="Authorization"
        tabList={tabList}
        activeTabKey={activeTabKey1}
        onTabChange={(key) => {
          onTab1Change(key);
        }}
      >
        {contentList[activeTabKey1]}
    </Card>

  )
}

export default Auth