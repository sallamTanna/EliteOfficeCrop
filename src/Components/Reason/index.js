import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

class Reason extends React.Component {
  constructor(props) {
    super(props);
  }

   render() {return <div className='reasonMainDiv'>
     <img src={this.props.avatar} className="reasonImg"/>
     <h3 className="text">{this.props.title}</h3>
     <span>{this.props.detaila}</span>
   </div>}
}

export default Reason;
