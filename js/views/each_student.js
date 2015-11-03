import React from 'react';

export default React.createClass({


render() {
  return (
    <div className='details' id={this.props.details.id}>
      <img src={this.props.details.Photo} className='studentImage' />
      <h3>{this.props.details.FirstName} {this.props.details.LastName}</h3><span>{this.props.details.StudentAge}</span>
      <p>{this.props.details.SpecialSkill}</p>
      <p>{this.props.details.Weapon}</p>
    </div>
    );
  },

});