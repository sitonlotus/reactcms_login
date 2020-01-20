import React from 'react';
import {HashRouter as Router,Route,Link,Switch} from 'react-router-dom';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import '../Assets/css/homePage.css';
import Banner from '../Components/banner.jsx';
import Teacher from '../Components/teacher';
import News from '../Components/news';

const { SubMenu } = Menu;
const { Header, Content, Sider ,Footer} = Layout;

export default class Home extends React.Component{
    render(){
        return(
          <Layout style={{height:'100%'}}>
            <Header className="header">
              <div className="logo" />
              <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['2']}
                style={{ lineHeight: '64px' }}
              >
                <Menu.Item key="1">主页</Menu.Item>
                <Menu.Item key="2">修改</Menu.Item>
                <Menu.Item key="3">配置</Menu.Item>
              </Menu>
            </Header>
            <Layout>
              <Sider width={200} style={{ background: '#fff' }}>
                <Menu
                  mode="inline"
                  defaultSelectedKeys={['1']}
                  defaultOpenKeys={['sub1']}
                  style={{ height: '100%', borderRight: 0 }}
                >
                  <SubMenu
                    key="sub1"
                    title={
                      <span>
                        <Icon type="user" />
                        Banner管理
                      </span>
                    }
                  >
                    <Menu.Item key="1"><Link to="/home/banner/">Banner</Link></Menu.Item>
                  </SubMenu>
                  <SubMenu
                    key="sub2"
                    title={
                      <span>
                        <Icon type="laptop" />
                        学院管理
                      </span>
                    }
                  >
                    <Menu.Item key="5"><Link to="/home/teacher/">老师管理</Link></Menu.Item>
                    <Menu.Item key="6">菜品管理</Menu.Item>
                  </SubMenu>
                  <SubMenu
                    key="sub3"
                    title={
                      <span>
                        <Icon type="notification" />
                        新闻管理
                      </span>
                    }
                  >
                    <Menu.Item key="9"><Link to="/home/news">新闻管理</Link></Menu.Item>
                  </SubMenu>
                  <SubMenu
                    key="sub4"
                    title={
                      <span>
                        <Icon type="appstore" />
                        其他管理
                      </span>
                    }
                  >
                    <Menu.Item key="9">新闻管理</Menu.Item>
                  </SubMenu>
                </Menu>
              </Sider>
              <Layout style={{ padding: '0 24px 0' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                  <Breadcrumb.Item>Home</Breadcrumb.Item>
                  <Breadcrumb.Item>List</Breadcrumb.Item>
                  <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <Content
                  style={{
                    background: '#fff',
                    padding: 24,
                    margin: 0,
                    minHeight: 280,
                  }}
                >
                  <Router>
                    <Switch>
                      <Route path="/home/news" component={News} />
                      <Route path="/home/teacher" component={Teacher} />
                      <Route path="/home/banner" component={Banner} />
                      <Route path="/home" component={Banner} />
                    </Switch>
                  </Router>
                </Content>
              </Layout>
            </Layout>
            <Footer style={{ textAlign: 'center' }}>Ant Design CMS ©2020 Created by Zuolian Liu</Footer>
          </Layout>
        )
    }
}

