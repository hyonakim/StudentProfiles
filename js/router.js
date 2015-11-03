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


  modifyStudent () {

  },


 


  start () {
    Backbone.history.start();
  }


});



