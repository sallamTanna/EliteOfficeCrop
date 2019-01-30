import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

class OneService extends React.Component {

   render() {return <div className='OneServiceMainDiv'>
     <img src={this.props.avatar} className="OneServiceImg" />
     <h3>{this.props.title}</h3>
     <span>{this.props.detaila}</span>
   </div>}
}

export default OneService;
