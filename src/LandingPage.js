import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css'
import Services from './Components/Services';
import VirtualOffice from './Components/VirtualOffice';
import OurTestimonials from './Components/OurTestimonials';
import ContactUs from './Components/ContactUs';
import Footer from './Components/Footer';
import MainDiv from './Components/MainDiv';
import Nav from './Components/Nav';
import WhyChooseUs from './Components/WhyChooseUs';
import Map from './Components/Map';
import GetStarted from './Components/GetStarted';
import Scrollchor from 'react-scrollchor';

class LandingPage extends React.Component {

   render() {return <div>
      <MainDiv id="mainDiv"/>
      <Services id="services"/>
      <WhyChooseUs />
      <OurTestimonials id="ourTestimonials" />
      <VirtualOffice />
      <ContactUs id="contactUs" />
      <Map id="map"/>
      <GetStarted id="getStarted"/>
      <Footer id="footer" />
   </div>}
}

export default LandingPage;
