import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

class Map extends React.Component {

   render() {return <div className="mapMainDiv">
    <div className="informationDiv">
      <h1>New York</h1>
      <div><i class="fas fa-phone"></i><span>123456789</span></div>
      <div><i class="fas fa-envelope"></i><span>sallamtanna2015@hotmail.com</span></div>
      <div><i class="far fa-clock"></i><span>Mon 10am-9pm</span></div>
      <div><i class="fas fa-map-marker-alt"></i><span>Lorem Ipsum is simply dummy text.</span></div>
    </div>
   </div>}
}

export default Map;
