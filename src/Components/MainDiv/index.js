import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import Nav from '../Nav';

class MainDiv extends React.Component {
  constructor(props) {
    super(props);
  }

   render() {return <section className="mainDivSection" id={this.props.id}>
   <Nav id="nav"/>
     <div className="MainDivDiv">
       <h1><b>What are Virtual office?</b></h1>
       <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
       </span>
       <button onClick={this.props.readMore} className="readMore"><p>Read More</p></button>
       <button onClick={this.props.startNow} className="startNow">Start Now</button>
     </div>
 </section>
  }
}

export default MainDiv;
