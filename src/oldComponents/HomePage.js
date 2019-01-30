// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Row, Col } from 'antd';
// import { Avatar } from 'antd';
// import 'antd/dist/antd.css'
// import NewForm from './NewForm.js';
// import {Link } from 'react-router-dom'
// import './index.css';
// import store from './store';
// import {
//   Layout, Menu, Breadcrumb, Form, Select, InputNumber, Switch, Radio, Slider, Button, Upload, Icon, Rate, Checkbox,
// } from 'antd';
//
// const {
//   Header, Content, Footer, Sider,
// } = Layout;
// const SubMenu = Menu.SubMenu;
// const { Option } = Select;
//
// class HomePage extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       collapsed: false,
//     };
//   }
//
//   onCollapse = (collapsed) => {
//      console.log(collapsed);
//      this.setState({ collapsed });
//    }
//
//    render() {return <div>
//      <Row className="row">
//          <Col span={18} push={6}>
//             <Menu
//               className="menu"
//               theme="dark"
//               mode="horizontal"
//               defaultSelectedKeys={['1']}
//               style={{ lineHeight: '64px' }}>
//               <Menu.Item key="1">HOME</Menu.Item>
//               <Menu.Item key="2">ABOUT</Menu.Item>
//               <Menu.Item key="3">CONTACT</Menu.Item>
//               <Menu.Item key="4"><Link to="/LOGIN">LOGIN</Link></Menu.Item>
//           </Menu>
//          </Col>
//          <Col span={6} pull={18} className="back">
//             <Avatar className="avatar" src={store.getState().imageState}>
//             </Avatar>
//          </Col>
//      </Row>
//
//    <Layout style={{ minHeight: '100vh' }}>
//            <Sider
//              collapsible
//              collapsed={this.state.collapsed}
//              onCollapse={this.onCollapse}
//            >
//              <div className="logo" />
//              <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
//                <Menu.Item key="1">
//                  <Icon type="pie-chart" />
//                  <span>Sections</span>
//                </Menu.Item>
//                <Menu.Item key="2">
//                  <Icon type="desktop" />
//                  <span>Our Data</span>
//                </Menu.Item>
//                <SubMenu
//                  key="sub1"
//                  title={<span><Icon type="user" /><span>User</span></span>}
//                >
//                  <Menu.Item key="3">Tom</Menu.Item>
//                  <Menu.Item key="4">Bill</Menu.Item>
//                  <Menu.Item key="5">Alex</Menu.Item>
//                </SubMenu>
//                <SubMenu
//                  key="sub2"
//                  title={<span><Icon type="team" /><span>Team</span></span>}
//                >
//                  <Menu.Item key="6">Team 1</Menu.Item>
//                  <Menu.Item key="8">Team 2</Menu.Item>
//                </SubMenu>
//                <Menu.Item key="9">
//                  <Icon type="file" />
//                  <span>File</span>
//                </Menu.Item>
//              </Menu>
//            </Sider>
//            <Layout>
//
//
//
//            <Content style={{ margin: '0 16px' }}>
//             <div style={{ padding: 24, margin: '16px 0' , background: '#fff', minHeight: 360 }}>
//               <div style={{ textAlign: 'center'}}><span className="title">What is Lorem Ipsum?</span></div>
//               <img className="img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8fVn4MP7BLUAFvy0q29Kr7oFT4NI-eU8iZ2vX11v1CKw0k_t7hw" />
//               <div className="data"><strong>Lorem Ipsum</strong> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
//               Why do we use it?
//               It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
//               Where does it come from?
//               Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
//               The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
//               </div>
//             </div>
//           </Content>
//
//              <Footer style={{ textAlign: 'center' }}>
//                Ant Design ©2018 Created by Ant UED
//              </Footer>
//            </Layout>
//          </Layout>
//    </div>}
// }
//
// export default HomePage;
