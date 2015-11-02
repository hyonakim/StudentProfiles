import React from 'react';
import $ from 'jquery';
import eachStudent from './each_student';

export default React.createClass({

onHomeHandler() {
  this.props.onHomeClick();
},

onProfileHandler() {
  this.props.onImageClick();
},

onEditHandler() {
  this.props.onModifyClick();
},

onAddHandler() {
  this.props.onAddClick();
},

onImageHandler(event) {
  this.props.onImageClick(event);
},

processImage(info) {
  return (
    <div className='images' key={info.objectId} onClick={() =>
     this.onImageHandler(data.objectId)}>

    <img src={info.Photo}/>
    </div>
  );
},

render() {
  return (
    <div className='wholePage'>
    <div className='logo'><img src='../../app/images/masan.png'/></div>
      <nav className='navBar'>
        <ul>
          <li onClick={() => this.onHomeHandler()}>Students</li>
          <li onClick={() => this.onProfileHandler()}>Profiles</li>
          <li onClick={() => this.onEditHandler()}>Edit</li>
          <li onClick={() => this.onAddHandler()}>Add</li>
        </ul>
      </nav>

      <div className='studentDatabase'>
        {this.props.onImageSelect.map(this.processImage)}
      </div>

    </div>
  );
}

});