import React from 'react';

let EditStudent = React.createClass({

  getInitialState() {
    return ({
      objectId: this.props.info.objectId,
      FirstName: this.props.info.FirstName,
      LastName: this.props.info.LastName,
      Photo: this.props.info.Photo,
      StudentAge: this.props.info.StudentAge,
      GradeLevel: this.props.info.GradeLevel,
      StudentGPA: this.props.info.StudentGPA,
      SpecialSkill: this.props.info.SpecialSkill,
      Weapon: this.props.info.Weapon
    });
  },

  SaveChangesClick(event) {
    event.preventDefault();

    this.props.onEditStudentClick(
      this.state.objectId,
      this.state.Photo,
      this.state.FirstName,
      this.state.LastName,
      this.state.StudentAge,
      this.state.GradeLevel,
      this.state.StudentGPA,
      this.state.SpecialSkill,
      this.state.Weapon
    );
  },

  setId(event) {
    let updatedId = event.currentTarget.value;
    this.setState({objectId: updatedId});
  },

  updatePhoto(event) {
    let newPhoto = event.target.value;
    this.setState({Photo: newPhoto});
  },

  updateFirstName(event) {
    let newFname = event.target.value;
    this.setState({FirstName: newFname});
  },

  updateLastName(event) {
    let newLname = event.target.value;
    this.setState({LastName: newLname});
  },

  updateAge(event) {
    let newAge = event.target.value;
    this.setState({StudentAge: newAge});
  },

  updateGradeLevel(event) {
    let newGLevel = event.target.value;
    this.setState({GradeLevel: newGLevel});
  },

  updateGpa(event) {
    let newGpa = event.target.value;
    this.setState({StudentGPA: newGpa});
  },

  updateSkill(event) {
    let newSkill = event.target.value;
    this.setState({SpecialSkill: newSkill});
  },

  updateWeapon(event) {
    let newWeapon = event.target.value;
    this.setState({Weapon: newWeapon});
  },



  render() {
    return (
    <div>
      <form className='formtemplate'>
        <input 
          onChange={this.setId} 
          type='text' 
          className='studentId' 
          value={this.state.objectId} />
        
        <input 
          onChange={this.updatePhoto} 
          type='text' 
          placeholder='Image Link' 
          className='profilePic input' 
          value={this.state.Photo}/>

        <input 
          onChange={this.updateFirstName} 
          type="firstName" 
          placeholder='First Name' 
          className='firstname input' 
          value={this.state.FirstName}/>

        <input 
          onChange={this.updateLastName} 
          type="lastName" 
          placeholder='Last Name' 
          className='lastname input' 
          value={this.state.LastName}/>

        <input 
          onChange={this.updateAge} 
          type='age' 
          placeholder='Age' 
          className='age input' 
          value={this.state.StudentAge}/>

        <input 
          onChange={this.updateGradeLevel} 
          type="gradelevel" 
          placeholder='Grade Level' 
          className='gradelevel input' 
          value={this.state.GradeLevel}/>

        <input 
          onChange={this.updateGpa} 
          type='gpa' 
          placeholder='GPA' 
          className='gpa input' 
          value={this.state.StudentGPA}/>

        <input 
          onChange={this.updateSkill} 
          type='specialSkill' 
          placeholder='Special Skill' 
          className='skill input' 
          value={this.state.SpecialSkill} />

        <input 
          onChange={this.updateWeapon} 
          type='weapon' 
          placeholder='Weapon of Choice' 
          className='weapon input' 
          value={this.state.Weapon}/>

        <button 
        onClick={this.SaveChangesClick} 
        className='editStudent'>Submit Changes</button>
      </form>
    </div>
    );
  }

});

export default EditStudent;