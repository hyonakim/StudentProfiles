//Libraries and Frameworks
import Backbone from 'backbone';
import $ from 'jquery';
import React from 'react';
import ReactDom from 'react-dom';

//Collections and Models
import {StudentModel} from './resources';
import {StudentCollection} from './resources';

//Views Templates
import {AllStudents} from './views';
import {EachStudent} from './views';
import {AddStudent} from './views';


export default Backbone.Router.extend ({

	routes: {

		''            : 'showHome',
		'student/:id' : 'showSpecificStudent',
		'editstudent' : 'modifyStudent',
		'studentform' : 'addNewStudent'
	},


  initialize(appElement) {
    this.el = appElement;
    this.students = new StudentCollection();
    let router = this;
  },


  goto(route) {
    this.navigate(route, {
      trigger: true
    });
  },


  render(component) {
    ReactDom.render(component, this.el);
  },


  showHome() {
    this.students.fetch().then(()=>{
      this.render(
      <AllStudents 
        id={this.students.objectId}
        info={this.students.toJSON()} 
        onHomeClick={()=>this.goto('')} 
        onProfileClick={(id)=>this.goto(`student/` + id)}
        onModifyClick={()=>this.goto(`editstudent`)} 
        onAddClick={()=>this.goto(`studentform`)}/>
     
      );
    });
  },

  showSpecificStudent (id) {
    let student = this.students.get(id);

    if (student) {
      this.render(
        <EachStudent
          details={student.toJSON()}/>
        );
    }
    else {
      student = this.students.add(id);
      student.fetch().then(()=> {
        this.render(
          <EachStudent
          details={student.toJSON()}/>
        );
      });
    }
  },

  addNewStudent() {
    this.render(
      <AddStudent 
       info={this.students.toJSON()}
       submitClick={() => {
        let photo = document.querySelector('.profilePic').value;
        let firstName = document.querySelector('.firstname').value;
        let lastName  = document.querySelector('.lastname').value;
        let age       = document.querySelector('.age').value;
        let gradeLevel= document.querySelector('.gradelevel').value;
        let gpa       = document.querySelector('.gpa').value;
        let skill     = document.querySelector('.skill').value;
        let weapon    = document.querySelector('.weapon').value;

        let newStudent = new StudentModel({ 
        Photo: photo,
        FirstName: firstName,
        LastName: lastName,
        Age: age,
        GradeLevel: gradeLevel,
        GPA: gpa,
        SpecialSkill: skill,
        Weapon: weapon 
     });

        newStudent.save().then(() => {
          alert('Add new student to Masan High?');
          this.goto('');
        });
      }
     }/>); 
  },

  modifyStudent () {

  },


 


  start () {
    Backbone.history.start();
  }


});



