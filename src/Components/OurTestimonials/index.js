import React from 'react';
import ReactDOM from 'react-dom';
import Testimonial from '../Testimonial';
import './style.css';
import img1 from './img1.png';
import img2 from './img2.PNG';
import img3 from './img3.PNG';
import img4 from './img4.PNG';

class OurTestimonials extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLeftButtonActive: false,
      isrightButtonActive: true,
      savedElementsForRightButton: [],
      savedElementsForLeftButton: [],
      isLeftButtonDisabled: true,
      Testimonials: [{details:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis", avatar:img1, name: "Danna Tanna", specialist:"Interpal employee"}, {details:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget     dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis", avatar:img2, name: "Lanna Tanna", specialist:"Security"}, {details:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis", avatar:img3, name: "Sallam Tanna", specialist:"Web developer"}, {details:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis", avatar:img4, name: "Ibraheem Tanna", specialist:"Accountant"},  {details:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis", avatar:img4, name: "Reema Tanna", specialist:"Accountant"},  {details:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis", avatar:img4, name: "Osama Tanna", specialist:"Accountant"}]
    }
  }

moveToRight = ()=> {
  var mainSection = document.getElementById('mainSection');

   this.setState(prevState => {return {
     isrightButtonActive: true,
     isLeftButtonActive: true,
     isLeftButtonDisabled: false,
     savedElementsForRightButton: prevState.savedElementsForRightButton.concat(mainSection.childNodes[0])}
   }, ()=> {
     mainSection.removeChild(mainSection.childNodes[0]);
     mainSection.appendChild(this.state.savedElementsForRightButton.shift());
     });
}

moveToLeft = ()=> {
  var mainSection = document.getElementById('mainSection');

   this.setState(prevState => { return {
     savedElementsForLeftButton: prevState.savedElementsForLeftButton.concat(mainSection.lastChild)}
     }, ()=>{
       mainSection.removeChild(mainSection.lastChild);
       mainSection.insertBefore(this.state.savedElementsForLeftButton.shift(), mainSection.childNodes[0]);
   })
}

  render() {return <div className="ourTestimonialsMainDiv">
      <h1>Our Testimonials</h1>
        <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
        <div className="buttonDiv">
          <button id="leftButton" onClick={this.moveToLeft} className={`leftButton ${this.state.isLeftButtonActive?"LeftButtonActive":""}`} disabled={this.state.isLeftButtonDisabled}><i class="fas fa-arrow-left"></i></button>
          <button onClick={this.moveToRight} className={`rightButton ${this.state.isrightButtonActive?"LeftButtonActive":""}`}><i class="fas fa-arrow-right"></i></button>
       </div>

      <section id="mainSection">
          {this.state.Testimonials.map((item, index) => <Testimonial id={index} details={item.details} name={item.name} avatar={item.avatar} specialist={item.specialist} />)}
      </section>
  </div>}
}

export default OurTestimonials;
