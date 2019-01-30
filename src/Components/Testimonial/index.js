import React from 'react';
import ReactDOM from 'react-dom';
import { Avatar } from 'antd';
import './style.css';

class Testimonial extends React.Component {

render() {return <div className='testimonialMainDiv' id={this.props.id}>
      <span>{this.props.details}</span>
      <Avatar src={this.props.avatar} className="testimonialAvatar"></Avatar>
      <h3>{this.props.name}</h3>
      <span>{this.props.specialist}</span>
      </div>
 }
}

export default Testimonial;
