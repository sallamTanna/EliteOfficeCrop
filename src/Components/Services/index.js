import React from 'react';
import ReactDOM from 'react-dom';
import { Row, Col } from 'antd';
import OneService from '../OneService';
import './style.css';
import icon1 from './icon1.PNG';
import icon2 from './icon2.png';
import icon3 from './icon3.png';
import icon4 from './icon4.png';
import icon5 from './icon5.png';
import icon6 from './icon6.png';
import icon7 from './icon7.png';
import icon8 from './icon8.png';

class Services extends React.Component {

   render() {return <div className="ServicesMainDiv" id={this.props.id}>
     <h1>Awesome Services</h1>
     <div>
     <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
     <span>Lorem Ipsum has been the industry's standard dummy text ever since  the 1500s, when an unknown printer took a galley of type.</span>
     </div >
    <section className="servicesSection">
        <Row className="servicesSectionRow">
        <Col span={6}>
          <OneService avatar={icon1} title='Live Web Chat' detaila="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"/>
        </Col>
        <Col span={6}>
          <OneService avatar={icon2} title='Live Web Chat' detaila="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"/>
        </Col>
        <Col span={6}>
          <OneService avatar={icon3} title='Live Web Chat' detaila="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"/>
        </Col>
        <Col span={6}>
          <OneService avatar={icon4} title='Live Web Chat' detaila="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"/>
        </Col>
        </Row>

        <Row>
        <Col span={6}>
          <OneService avatar={icon5} title='Live Web Chat' detaila="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"/>
        </Col>
        <Col span={6}>
          <OneService avatar={icon6} title='Live Web Chat' detaila="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"/>
        </Col>
        <Col span={6}>
          <OneService avatar={icon7} title='Live Web Chat' detaila="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"/>
        </Col>
        <Col span={6}>
          <OneService avatar={icon8} title='Live Web Chat' detaila="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"/>
        </Col>
        </Row>
    </section>
    <section className="section2">
    <Row>
    <Col span={8}>
      <OneService avatar={icon1} title='Live Web Chat' detaila="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"/>
    </Col>
    <Col span={8}>
      <OneService avatar={icon2} title='Live Web Chat' detaila="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"/>
    </Col>
    <Col span={8}>
      <OneService avatar={icon3} title='Live Web Chat' detaila="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"/>
    </Col>
    </Row>
    <Row>
    <Col span={8}>
      <OneService avatar={icon4} title='Live Web Chat' detaila="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"/>
    </Col>
    <Col span={8}>
      <OneService avatar={icon5} title='Live Web Chat' detaila="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"/>
    </Col>
    <Col span={8}>
      <OneService avatar={icon6} title='Live Web Chat' detaila="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"/>
    </Col>
    </Row>
    <Row>
    <Col span={8}>
      <OneService avatar={icon7} title='Live Web Chat' detaila="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"/>
    </Col>
    <Col span={8}>
      <OneService avatar={icon8} title='Live Web Chat' detaila="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"/>
    </Col>
    </Row>
    </section>
    <section className="section3">
    <Row>
      <Col span={12}>
        <OneService avatar={icon1} title='Live Web Chat' detaila="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"/>
      </Col>
      <Col span={12}>
        <OneService avatar={icon2} title='Live Web Chat' detaila="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"/>
      </Col>
    </Row>
    <Row>
      <Col span={12}>
        <OneService avatar={icon3} title='Live Web Chat' detaila="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"/>
      </Col>
      <Col span={12}>
        <OneService avatar={icon4} title='Live Web Chat' detaila="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"/>
      </Col>
    </Row>
    <Row>
      <Col span={12}>
        <OneService avatar={icon5} title='Live Web Chat' detaila="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"/>
      </Col>
      <Col span={12}>
        <OneService avatar={icon6} title='Live Web Chat' detaila="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"/>
      </Col>
    </Row>
    <Row>
      <Col span={12}>
        <OneService avatar={icon7} title='Live Web Chat' detaila="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"/>
      </Col>
      <Col span={12}>
        <OneService avatar={icon8} title='Live Web Chat' detaila="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"/>
      </Col>
    </Row>
    </section>
    <section className="section4">
    <Row>
      <Col span={24}>
        <OneService avatar={icon1} title='Live Web Chat' detaila="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"/>
      </Col>
    </Row>
    <Row>
      <Col span={24}>
        <OneService avatar={icon1} title='Live Web Chat' detaila="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"/>
      </Col>
    </Row>
    <Row>
      <Col span={24}>
        <OneService avatar={icon1} title='Live Web Chat' detaila="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"/>
      </Col>
    </Row>
    <Row>
      <Col span={24}>
        <OneService avatar={icon1} title='Live Web Chat' detaila="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"/>
      </Col>
    </Row>
    <Row>
      <Col span={24}>
        <OneService avatar={icon1} title='Live Web Chat' detaila="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"/>
      </Col>
    </Row>
    <Row>
      <Col span={24}>
        <OneService avatar={icon1} title='Live Web Chat' detaila="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"/>
      </Col>
    </Row>
    <Row>
      <Col span={24}>
        <OneService avatar={icon1} title='Live Web Chat' detaila="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"/>
      </Col>
    </Row>
    <Row>
      <Col span={24}>
        <OneService avatar={icon1} title='Live Web Chat' detaila="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"/>
      </Col>
    </Row>
    </section>
  </div>}
}

export default Services;
