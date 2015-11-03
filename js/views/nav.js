import React from 'react';

export default React.createClass({

  navigateStudents() {
    this.props.onNavigate('home');
  },

  navigateAdd() {
    this.props.onNavigate('studentform');
  },


  render() {
    return (
      <div className="navbar">
        <div onClick={this.navigateStudents} className="studentBtn">Students</div>
        <div onClick={this.navigateAdd} className="addBtn">Add Student</div>
      </div>
    );
  }

});