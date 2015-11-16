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
import {EditStudent}  from './views';


export default Backbone.Router.extend ({

	routes: {

		''            : 'showHome',
		'student/:id' : 'showSpecificStudent',
		'editstudent/:id' : 'modifyStudent',
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
          details={student.toJSON()}
          onEachStudentClick={() => this.goto(`editstudent/` + id)}/>
        );
    }
    else {
      student = this.students.add(id);
      student.fetch().then(()=> {
        this.render(
          <EachStudent
          details={student.toJSON()}
          onEachStudentClick={() => this.goto(`editstudent/` + id)}/>
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
        StudentAge: age,
        GradeLevel: gradeLevel,
        StudentGPA: gpa,
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


//EDIT DATA TEMPLATE

  modifyStudent (id) {
    let information = this.students.get(id);

    if(information) {
    this.render(
      <EditStudent
      info = {information.toJSON()}
      onEditStudentClick={(id, Photo, FirstName, LastName, StudentAge, GradeLevel, StudentGPA, SpecialSkill, Weapon) => {
        this.saveInfo(id, Photo, FirstName, LastName, StudentAge, GradeLevel, StudentGPA, SpecialSkill, Weapon);}}/>);  
    }
    else {
    information = this.students.add({objectId: id}); 
    information.fetch().then( () => {   
    this.render(
      <EditStudent
      info = {information.toJSON()}
      onEditStudentClick={(id, Photo, FirstName, LastName, StudentAge, GradeLevel, StudentGPA, SpecialSkill, Weapon) => {
        this.saveInfo(id, Photo, FirstName, LastName, StudentAge, GradeLevel, StudentGPA, SpecialSkill, Weapon);}}/>);  
      });
    }                                                                  
  },
//SAVE EDITED DATA FUNCTION
  saveInfo(id, Photo, FirstName, LastName, StudentAge, GradeLevel, StudentGPA, SpecialSkill, Weapon) {
    
    var data = {
      objectId: id, 
      Photo: Photo,
      FirstName: FirstName,
      LastName: LastName,
      StudentAge: StudentAge,
      GradeLevel: GradeLevel,
      StudentGPA: StudentGPA,
      SpecialSkill: SpecialSkill,
      Weapon: Weapon
    };
    
    var student = this.students.get(id);

    if (!student) {
      student = new StudentModel({objectId: id});
    }

    console.log('saving data', data);
    console.log('saving to url:', student.url());

    student.save(data).then(() => {
      this.goto('');
    });
  },


 


  start () {
    Backbone.history.start();
  }


});



