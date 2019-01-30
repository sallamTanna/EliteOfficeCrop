import React from 'react';
import ReactDOM from 'react-dom';
import { Col, Row } from 'antd';
import Reason from '../Reason'
import icon1 from './icon1.png';
import icon2 from './icon2.png';
import icon3 from './icon3.png';
import icon4 from './icon4.png';
import './style.css';

class WhyChooseUs extends React.Component {

    render() {return <div className="whyChooseUsMainDiv">
     <div className="whyChooseUsParagraph">
       <h1>Why Choose Us?</h1>
       <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
       </span>
     </div>
     <div className="whiteBox">
       <Row className="row">
          <Col span={12}>
            <Reason title="Keeping the promises" detaila="Lorem Ipsum is simply dummy text of the printing and typesetting industry." avatar={icon1}/>
          </Col>
          <Col span={12}>
            <Reason title="Cutting-edge technology" detaila="Lorem Ipsum is simply dummy text of the printing and typesetting industry." avatar={icon2}/>
          </Col>
       </Row>
        <Row className="row">
          <Col span={12}>
            <Reason title="Constantly upgrading" detaila="Lorem Ipsum is simply dummy text of the printing and typesetting industry." avatar={icon3}/>
          </Col>
          <Col span={12}>
            <Reason title="Client is first" detaila="Lorem Ipsum is simply dummy text of the printing and typesetting industry." avatar={icon4}/>
          </Col>
       </Row>
     </div>
     <div className="whiteBox320px">
       <Row className="row320px">
          <Col span={24}>
            <Reason title="Keeping the promises" detaila="Lorem Ipsum is simply dummy text of the printing and typesetting industry." avatar={icon1}/>
          </Col>
       </Row>
       <Row className="row320px">
          <Col span={24}>
            <Reason title="Cutting-edge technology" detaila="Lorem Ipsum is simply dummy text of the printing and typesetting industry." avatar={icon2}/>
          </Col>
       </Row>
       <Row className="row320px">
          <Col span={24}>
            <Reason title="Constantly upgrading" detaila="Lorem Ipsum is simply dummy text of the printing and typesetting industry." avatar={icon3}/>
          </Col>
       </Row>
       <Row className="row320px">
          <Col span={24}>
            <Reason title="Client is first" detaila="Lorem Ipsum is simply dummy text of the printing and typesetting industry." avatar={icon4}/>
          </Col>
       </Row>
     </div>
    </div>
    }
}

export default WhyChooseUs;
