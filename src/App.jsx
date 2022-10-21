import { Layout } from 'antd';
import { Content, Footer, Header } from 'antd/lib/layout/layout';
import './App.css';
import AppRoutes from './components/AppRoutes';
import HeaderComponent from './components/HeaderComponent';

function App() {
  return (
    <Layout >
      <HeaderComponent />
      <Content style={{display: 'flex', justifyContent: 'center', height: '1000px'}}>
        <AppRoutes />
      </Content>
    </Layout>
  );
}

export default App;
