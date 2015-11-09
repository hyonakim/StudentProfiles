import React from 'react';
import Navigation from './nav';

export default React.createClass({


	
  SubmitClickHandler(event) {
    event.preventDefault();
    this.props.submitClick();
  },

  render() {
		return (
      <div>
        <form className='formtemplate'>
          <input type='text' placeholder='Image Link' className='profilePic input' />
          <input type="firstName" placeholder='First Name' className='firstname input' />
          <input type="lastName" placeholder='Last Name' className='lastname input' />
          <input type='age' placeholder='Age' className='age input' />
          <input type="gradelevel" placeholder='Grade Level' className='gradelevel input' />
          <input type='gpa' placeholder='GPA' className='gpa input' />
          <input type='specialSkill' placeholder='Special Skill' className='skill input' />
          <input type='weapon' placeholder='Weapon of Choice' className='weapon input' />
          <button onClick={this.SubmitClickHandler} className='createStudent'>Add Student</button>
        </form>
    </div>
    );
	}
});