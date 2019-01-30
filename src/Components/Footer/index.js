import React from 'react';
import ReactDOM from 'react-dom';
import { Row, Col, Avatar } from 'antd';
import {Link } from 'react-router-dom'
import './style.css';
import download from './download.png';
import Scrollchor from 'react-scrollchor';

class Footer extends React.Component {

   render() {return <div className="footerMainDiv" id={this.props.id}>
     <div className="gutter-example contentDiv">
       <section  className="section1">
       <Row gutter={16}>
         <Col className="gutter-row" span={8}>
           <div className="gutter-box">
           <img src={download} alt="logo" />
           <span>
           Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.
           </span>
           <i class="fab fa-facebook"></i>
           <i class="fab fa-twitter"></i>
           <i class="fab fa-youtube"></i>
           <i class="fab fa-linkedin-in"></i>
           </div>
         </Col>
         <Col className="gutter-row" span={4}>
           <div className="gutter-box"><h4>QUICK LINKS</h4><span className="underline"><hr width="30px" color="green"/></span><br/>
           <Link to="#">Home</Link><br/>
           <Link to="#">About</Link><br/>
           <Link to="#">Services</Link><br/>
           <Link to="#">Pricing</Link><br/>
           <Link to="#">Contact</Link>
           </div>
         </Col>
         <Col className="gutter-row" span={4}>
           <div className="gutter-box"><h4>USEFULL LINKS</h4><span className="underline"><hr width="30px" color="green"/></span><br/>
           <Link to="#">Term of Services</Link><br/>
           <Link to="#">Security Ploicy</Link><br/>
           <Link to="#">Privacy Ploicy</Link><br/>
           <Link to="#">Media</Link><br/>
           </div>
         </Col>
         <Col className="gutter-row" span={8}>
           <div className="gutter-box"><h4>NEWSLETTER</h4><span className="underline"><hr width="30px" color="green"/></span><br/>
           <span>Subscribe to our newsletter to get the lastest News and offers..</span>

           <div className="emailDiv">
             <input type="email" placeholder="Email address" />
             <i class="fas fa-location-arrow"></i>
           </div>
           </div>
         </Col>
       </Row>
       </section>
       <section className="section2">
       <Row gutter={100}>
         <Col className="gutter-row" span={12}>
             <div className="gutter-box">
             <img src={download} alt="download" />
             <span>
             Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.
             </span>
             <i class="fab fa-facebook"></i>
             <i class="fab fa-twitter"></i>
             <i class="fab fa-youtube"></i>
             <i class="fab fa-linkedin-in"></i>
             </div>
         </Col>
         <Col className="gutter-row" span={12}>
             <div className="gutter-box"><h4>QUICK LINKS</h4><span className="underline"><hr width="30px" color="green"/></span><br/>
             <Link to="#">Home</Link><br/>
             <Link to="#">About</Link><br/>
             <Link to="#">Services</Link><br/>
             <Link to="#">Pricing</Link><br/>
             <Link to="#">Contact</Link>
             </div>
         </Col>
        </Row>

       <Row gutter={100}>
         <Col className="gutter-row" span={12}>
             <div className="gutter-box"><h4>USEFULL LINKS</h4><span className="underline"><hr width="30px" color="green"/></span><br/>
             <Link to="#">Term of Services</Link><br/>
             <Link to="#">Security Ploicy</Link><br/>
             <Link to="#">Privacy Ploicy</Link><br/>
             <Link to="#">Media</Link><br/>
             </div>
         </Col>
         <Col className="gutter-row" span={12}>
             <div className="gutter-box"><h4>NEWSLETTER</h4><span className="underline"><hr width="30px" color="green"/></span><br/>
             <span>Subscribe to our newsletter to get the lastest News and offers..</span>

             <div className="emailDiv">
             <input type="email" placeholder="Email address" />
             <i class="fas fa-location-arrow"></i>
             </div>
             </div>
         </Col>
        </Row>
       </section>
       <section className="section3">
       <Row gutter={24}>
         <Col className="gutter-row" span={24}>
             <div className="gutter-box">
             <img src={download} alt="download" />
             <span className="footerText">
             Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.
             </span>
             <i class="fab fa-facebook"></i>
             <i class="fab fa-twitter"></i>
             <i class="fab fa-youtube"></i>
             <i class="fab fa-linkedin-in"></i>
             </div>
         </Col>
         </Row>

       <Row gutter={24}>
       <Col className="gutter-row" span={12}>
           <div className="gutter-box"><h4>QUICK LINKS</h4><span className="underline"><hr width="30px" color="green"/></span><br/>
           <Link to="#">Home</Link><br/>
           <Link to="#">About</Link><br/>
           <Link to="#">Services</Link><br/>
           <Link to="#">Pricing</Link><br/>
           <Link to="#">Contact</Link>
           </div>
       </Col>
         </Row>

       <Row gutter={24}>
       <Col className="gutter-row" span={12}>
           <div className="gutter-box"><h4>USEFULL LINKS</h4><span className="underline"><hr width="30px" color="green"/></span><br/>
           <Link to="#">Term of Services</Link><br/>
           <Link to="#">Security Ploicy</Link><br/>
           <Link to="#">Privacy Ploicy</Link><br/>
           <Link to="#">Media</Link><br/>
           </div>
       </Col>
         </Row>

       <Row gutter={24}>
       <Col className="gutter-row" span={24}>
           <div className="gutter-box"><h4>NEWSLETTER</h4><span className="underline"><hr width="30px" color="green"/></span><br/>
           Subscribe to our newsletter to get the lastest News and offers..
           <span></span>

           <div className="emailDiv">
           <input type="email" placeholder="Email address" />
           <i class="fas fa-location-arrow"></i>
           </div>
           </div>
       </Col>
         </Row>
       </section>
     </div>
     <hr className="line"/>
     <span className="footer">2018 @ All Rights Reserved By EliteOfficeCope</span>
     <button className="toUpButton"><Scrollchor to="nav" className="nav-link"><i class="fas fa-arrow-up"></i></Scrollchor></button>
</div>
  }
}

export default Footer;
