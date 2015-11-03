import React from 'react';
import $ from 'jquery';
import EachStudent from './each_student';
import Navigation from './nav';


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

navigateHandler(route) {

  this.props.onNavigate(route);

},

render() {
  return (
    <div className='wholePage'>
      <div className='studentDatabase'>
      <Navigation onNavigate={this.navigateHandler}/>
      <button onClick={this.onAddHandler} className='addBtn'>Add</button>
        {this.props.info.map(this.processImage)}
      }
      </div>

    </div>
  );
}

});

