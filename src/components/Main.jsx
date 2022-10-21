import Card from 'antd/lib/card/Card';
import React, { useState } from 'react'
import SearchComponent from './SearchRobot';

function Main() {
  const [activeTabKey1, setActiveTabKey1] = useState('search');
    const onTab1Change = (key) => {
        setActiveTabKey1(key);
    };
    const tabList = [
        {
            key: 'search',
            tab: 'Search robot',
        },
        {
            key: 'signUp',
            tab: 'Sign Up',
        },
    ];
    const contentList = {
        search: <SearchComponent />,
        
    };
  return (
    <Card
        style={{
          width: '50%',
          marginTop: '20px'
          ,height: '600px'
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

export default Main