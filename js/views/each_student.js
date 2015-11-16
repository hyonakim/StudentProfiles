import React from 'react';

export default React.createClass({

onEditStudent(event) {
  event.preventDefault();
  this.props.onEachStudentClick();
},

render() {
return (
  <div className='details' id={this.props.details.id}>
    <img src={this.props.details.Photo} className='studentImage' />
    <h3>{this.props.details.FirstName} {this.props.details.LastName}</h3>
    <span>{this.props.details.StudentAge}</span>
    <p>{this.props.details.SpecialSkill}</p>
    <p>{this.props.details.Weapon}</p>
    <button onClick={this.onEditStudent} className='editStudentBtn'>Edit Student</button>
  </div>
  );
},

});