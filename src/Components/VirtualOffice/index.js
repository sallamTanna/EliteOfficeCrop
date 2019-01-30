import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import icon2 from './icon.png';

class VirtualOffice extends React.Component {

   render() {return <div className="virtualOfficeMainDiv">
      <img className="leftImage" src={icon2} />
      <span>EliteOfficeCrop: Virtual Offices eliminiate the need for hiring and training</span>
      <button><i class="fas fa-chevron-circle-right"></i></button>
   </div>}
}

export default VirtualOffice;
