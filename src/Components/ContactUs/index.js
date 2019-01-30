import React from 'react';
import ReactDOM from 'react-dom';
import { Avatar } from 'antd';
import './style.css';

class ContactUs extends React.Component {
  constructor(props) {
    super(props);
  }

   render() {return <div className="contactUMainDiv" id={this.props.id}>
    <h1>Contact Us</h1>
    <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>

    <div className="contact">
        <div className="contactDetails">
          <h2>Facing trouble in live receptionist?</h2>
          <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text<br/><br/>printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</span>
        </div>

        <div className="contactForm">
          <input type="text" placeholder="Your Name (required)" />
          <input type="text" placeholder="Your Email (required)" />
          <textarea>Your Message</textarea>
          <input type="submit" value="Send Now" />
        </div>
    </div>

    <div className="numberOfCustomer">
      <h1>12.657</h1>
      <h2>Happy Customer</h2>
    </div>

   </div>
 }
}

export default ContactUs;
