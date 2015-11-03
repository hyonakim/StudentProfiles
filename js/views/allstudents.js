import React from 'react';
import $ from 'jquery';
import EachStudent from './each_student';

export default React.createClass({

onHomeHandler() {
  this.props.onHomeClick();
},

onEditHandler() {
  this.props.onModifyClick();
},

onAddHandler() {
  this.props.onAddClick();
},

onProfileHandler(id) {
  this.props.onProfileClick(id);
},

processImage(info) {
  return (
    <div className='images' key={info.objectId}>
    <img src={info.Photo} id={info.objectId} onClick={() => this.onProfileHandler(info.objectId)}/>
    </div>
  );
},

render() {
  return (
    <div className='wholePage'>
      <nav className='navBar'>
        <ul>
          <li onClick={() => this.onHomeHandler()}>Students</li>
          <li onClick={() => this.onProfileHandler()}>Profiles</li>
          <li onClick={() => this.onEditHandler()}>Edit</li>
          <li onClick={() => this.onAddHandler()}>Add</li>
        </ul>
      </nav>

      <div className='studentDatabase'>
        {this.props.info.map(this.processImage)}
      </div>

    </div>
  );
}

});