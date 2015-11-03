import React from 'react';
import Navigation from './nav';

export default React.createClass({


	
  SubmitClickHandler() {
    this.props.submitClick();
  },
  
  navigateHandler(route) {
    this.props.onNavigate(route);
  },

  render() {
		return (
    <form className='formtemplate'>
      <input type='image' placeholder='Upload Image' id='profileImg' className='input' />
      <input type="firstName" placeholder='First Name' id='firstname' className='input' />
      <input type="lastName" placeholder='Last Name' id='lastname' className='input' />
      <input type='age' placeholder='Age' id='age' className='input' />
      <input type="gradelevel" placeholder='Grade Level' id='gradelevel' className='input' />
      <input type='gpa' placeholder='GPA' id='gpa' className='input' />
      <input type='specialSkill' placeholder='Special Skill' id='skill' className='input' />
      <input type='weapon' placeholder='Weapon of Choice' id='weapon' className='input' />
      <button onClick={this.SubmitClickHandler} className='createStudent'>Add Student</button>
    </form>
    );
	}
});