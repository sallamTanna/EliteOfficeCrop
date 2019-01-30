import React from 'react';
import ReactDOM from 'react-dom';
import { Row, Col, Avatar } from 'antd';
import { Menu } from 'antd';
import './style.css';
import logo from  './logo.PNG';
import Scrollchor from 'react-scrollchor';
const SubMenu = Menu.SubMenu;

class Nav extends React.Component {
  constructor(props) {
    super(props);
  }

showNavigationMenu = ()=> {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
}
   render() {return <div className="navMianDiv" id={this.props.id}>
     <Row className="row" className="mainRow">
       <Col span={18} push={6} className="mainNav">
         <nav class="topnav" id="myTopnav">
           <li><Scrollchor to="nav" className="nav-link active">Home</Scrollchor></li>
           <li><Scrollchor to="mainDiv" className="nav-link">About us</Scrollchor></li>
           <li><Scrollchor to="services" className="nav-link">Our-Services</Scrollchor></li>
           <li><Scrollchor to="Footer" className="nav-link">Pricing Plan</Scrollchor></li>
           <li><Scrollchor to="Footer" className="nav-link">FQA</Scrollchor></li>
           <li><Scrollchor to="contactUs" className="nav-link">Contact Us</Scrollchor></li>
           <li href="javascript:void(0);" className="navIcon" onClick={this.showNavigationMenu}><i class="fa fa-bars"></i></li>
         </nav>
       </Col>
       <Col span={6} pull={18}>
          <img src={logo} alt="logo" className="logo"/>
       </Col>
     </Row>
 </div>
  }
}

export default Nav;
